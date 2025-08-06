const {Digest} = require('../../src/utils/Digest');
const should = require("should");
require('dotenv').config();
const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
const {stringify} = require("mocha/lib/utils");


const _superagent = _interopRequireDefault(require("superagent"));

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['expect.js', process.cwd() + '/src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require(process.cwd() + '/src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.citypay_api_client);
    }
}(this, function (expect, citypay_api_client) {
    'use strict';

    const client_id = process.env.CP_CLIENT_ID;
    const licence_key = process.env.CP_LICENCE_KEY;
    const merchant_id = process.env.CP_MERCHANT_ID;
    let client;

    if (client_id === undefined) {
        should.fail('No client_id specified');
    }

    beforeEach(function () {
        client = new citypay_api_client.ApiClient({
            "sandbox": true,
            "client_id": client_id,
            "licence_key": licence_key,
            // "subject": subject
            // "domain_key": "xyz..."
        });
        // .withAccessToken("....")

    });


    describe('Can run operational calls', () => {


        it('should list merchants', async () => {
            let resp = await new citypay_api_client.OperationalFunctionsApi(client).listMerchantsRequest(client_id);
            expect(resp.clientid).to.be.equal(client_id)
            expect(resp.merchants.length).to.be.greaterThan(2)
        })

        it('should call a ping and ack', async () => {
            let ping = new citypay_api_client.Ping();
            ping.identifier = uuidv4();
            let ack = await new citypay_api_client.OperationalFunctionsApi(client).pingRequest(ping);
            expect(ack.code).to.be.equal("044")
            expect(ack.identifier).to.be.equal(ping.identifier);
        });

    });

    describe('Can run payment calls', () => {

        it('should authorise', async () => {

            let uuid = uuidv4();
            let rq = new citypay_api_client.AuthRequest.constructFromObject({
                amount: 1395,
                cardnumber: "4000 0000 0000 0002",
                expmonth: 12,
                expyear: 2030,
                csc: "012",
                identifier: uuid,
                merchantid: merchant_id,
                threedsecure: new citypay_api_client.ThreeDSecure.constructFromObject({
                    tds_policy: "2"
                })
            });
            let decision = await new citypay_api_client.AuthorisationAndPaymentApi(client).authorisationRequest(rq);
            expect(decision.isAuthenRequired()).to.be.equal(false);
            expect(decision.isChallengeRequired()).to.be.equal(false);
            expect(decision.isAuthResponse()).to.be.equal(true);

            let result = decision.AuthResponse;
            expect(result.result_code).to.be.equal("001");
            expect(result.identifier).to.be.equal(uuid);
            expect(result.authcode).to.be.equal("A12345");
            expect(result.amount).to.be.equal(1395);

            expect(Digest.validateDigest(result, licence_key)).to.be.equal(true);
        });

    });

    describe('Can run payment calls 3DSv2', () => {

        it('should authorise 3DSv2', async () => {

            let uuid = uuidv4();
            let rq = new citypay_api_client.AuthRequest.constructFromObject({
                amount: 1396,
                cardnumber: "4000 0000 0000 0002",
                expmonth: 12,
                expyear: 2030,
                csc: "123",
                identifier: uuid,
                merchantid: merchant_id,
                trans_type: "A",
                threedsecure: new citypay_api_client.ThreeDSecure.constructFromObject({
                    merchant_termurl: "https://citypay.com/acs/return",
                    cp_bx: "eyJhY3NUcmFuc0lEIjoiNzM3YjAzMmMtODZhNC00NGRiLThmN2QtNjQ2Mzk5MjUyYmYwIiwiY2hhbGxlbmdlV2luZG93U2l6ZSI6IjA1IiwibWVzc2FnZUV4dGVuc2lvbiI6W3sibmFtZSI6IkNQIFRlc3QgQUNTMiBFeHRlbnNpb24iLCJpZCI6IkNQMDAwMDAwMDEtMDAyIiwiY3JpdGljYWxpdHlJbmRpY2F0b3IiOmZhbHNlLCJkYXRhIjp7Im5vdGlmaWNhdGlvblVybCI6Imh0dHBzOi8vcGF5bWVudHMuY2l0eXBheS5jb20vVWxkV1RGcEdYZy9ORFF6TXpBNU56a3pPRGN5TWpnek9ESTBNelUvYWNzUmV0dXJuP2lmbT1mYWxzZSIsIm1pZCI6NjA1MjM3MDUsIm1hc2tlZFBhbiI6IjQ2MjI5NCoqKioqKjEwMjIiLCJzY2hlbWVMb2dvIjoiaHR0cHM6Ly9jZG4uY2l0eXBheS5jb20vaW1nL2NzL3Zpc2EtbG9nby5zdmciLCJleHBpcnkiOiIxMi8yMDI1IiwiYW1vdW50IjoiMC4wMSIsImRhdGV0aW1lIjoxNzUxNTM1MDA3NDUxLCJjYXRlZ29yeSI6IjAxIn19XSwibWVzc2FnZVR5cGUiOiJDUmVxIiwibWVzc2FnZVZlcnNpb24iOiIyLjIuMCIsInRocmVlRFNTZXJ2ZXJUcmFuc0lEIjoiNjg2NjRkOWYtMDM5Yi00M2QyLWEwOTAtODRiOTAwMDAwMTNjIn0"
                })
            });

            let decision = await new citypay_api_client.AuthorisationAndPaymentApi(client).authorisationRequest(rq);
            expect(decision.isAuthenRequired()).to.equal(false);
            expect(decision.isChallengeRequired()).to.equal(true);
            expect(decision.isAuthResponse()).to.equal(false);

            if (decision.isChallengeRequired()) {
                let result = decision.RequestChallenged;
                expect(result.acs_url).to.not.equal(null);
                expect(result.creq).to.not.equal(null);
                expect(result.threedserver_trans_id).to.not.equal(null);

                const content = new URLSearchParams({
                    transStatus: "Y",
                    reason: "01",
                    creq: result.creq,
                    threeDSSessionData: result.threedserver_trans_id
                }).toString();

                const request = _superagent.default("POST", "https://sandbox.citypay.com/3dsv2/gen-rreq");


                const resultRequest = await request
                    .send(content)
                    .set('Content-Type', 'application/x-www-form-urlencoded');

                const cresResponse = resultRequest.body;
                if (cresResponse && cresResponse.cres) {
                    const cResAuthRequestString64 = new citypay_api_client.CResAuthRequest.constructFromObject({cres: cresResponse.cres});

                    const cResRequestResponse = await new citypay_api_client.AuthorisationAndPaymentApi(client).cResRequest(cResAuthRequestString64);

                    expect(cResRequestResponse.amount).to.be.equal(1396);
                    expect(cResRequestResponse.authcode).to.be.equal("A12345");
                    expect(cResRequestResponse.authen_result).to.be.equal("Y");
                    expect(cResRequestResponse.authorised).to.be.equal(true);
                } else {
                    throw new Error('Cres not found in response: ' + JSON.stringify(cresResponse));
                }
            }
        });

    });

    describe('Run card holder account actions', () => {

        let cha_id = uuidv4();

        it('should create a new cha', async () => {

            let api = new citypay_api_client.CardHolderAccountApi(client)
            let ac = new citypay_api_client.AccountCreate(cha_id);
            ac.contact = new citypay_api_client.ContactDetails.constructFromObject({
                address1: "Mielles House",
                area: "St Helier",
                company: "CityPay Limited",
                country: "JE",
                email: "dev@citypay.com",
                firstname: "Integration",
                lastname: "Test",
                postcode: "JE2 3QA"
            });
            let result = await api.accountCreate(ac)
            expect(result.account_id).to.equal(cha_id);
            expect(result.contact.address1).to.equal("Mielles House");

            result = await api.accountCardRegisterRequest(cha_id,
                new citypay_api_client.RegisterCard.constructFromObject({
                    cardnumber: "4000 0000 0000 0002",
                    expmonth: "12",
                    expyear: "2030"
                })
            )
            expect(result.account_id).to.equal(cha_id);
            expect(result.cards.length).to.equal(1);
            expect(result.cards[0].expmonth).to.equal(12);
            expect(result.cards[0].expyear).to.equal(2030);

            result = await api.accountRetrieveRequest(cha_id);
            expect(result.account_id).to.equal(cha_id);
            expect(result.contact.address1).to.equal("Mielles House");
            expect(result.cards.length).to.equal(1);
            expect(result.cards[0].expmonth).to.equal(12);
            expect(result.cards[0].expyear).to.equal(2030);

            let identifier = uuidv4();
            let cr = new citypay_api_client.ChargeRequest.constructFromObject({
                amount: 7801,
                identifier: identifier,
                merchantid: merchant_id,
                token: result.cards[0].token,
                csc: "012",
                threedsecure: new citypay_api_client.ThreeDSecure.constructFromObject({
                    tds_policy: "2"
                })
            });
            let auth = await api.chargeRequest(cr);
            expect(auth.isAuthenRequired()).to.equal(false);
            expect(auth.isChallengeRequired()).to.equal(false);
            expect(auth.isAuthResponse()).to.equal(true);

            let ar = auth.AuthResponse;
            expect(ar.identifier).to.equal(identifier);
            expect(ar.result_code).to.equal("001");
            expect(ar.amount).to.equal(7801);
            expect(ar.authcode).to.equal("A12345");

            let ack = await api.accountDeleteRequest(cha_id);
            expect(ack.code).to.equal("001");

        });

    });

}))
