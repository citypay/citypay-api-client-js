const {Digest} = require('../../src/utils/Digest');
const should = require("should");
require('dotenv').config();
const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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
            "licence_key": licence_key
            // "domain_key": "xyz..."
        });
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
                    cp_bx: "eyJhIjoiRkFwSCIsImMiOjI0LCJpIjoid3dIOTExTlBKSkdBRVhVZCIsImoiOmZhbHNlLCJsIjoiZW4tVVMiLCJoIjoxNDQwLCJ3IjoyNTYwLCJ0IjowLCJ1IjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTFfMl8zKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODkuMC40Mzg5LjgyIFNhZmFyaS81MzcuMzYiLCJ2IjoiMS4wLjAifQ"
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

                const content = {
                    threeDSSessionData: result.threedserver_trans_id,
                    creq: result.creq
                }

                const request = (0, _superagent["default"])("POST", "https://sandbox.citypay.com/3dsv2/acs");


                const resultRequest = await request.send(content).set('Content-Type',
                    'application/json');

                const cResAuthRequest = resultRequest['body'];

                if (cResAuthRequest) {
                    expect(cResAuthRequest['acsTransID']).not.to.be.empty();
                    expect(cResAuthRequest['messageType']).not.to.be.empty();
                    expect(cResAuthRequest['messageVersion']).not.to.be.empty();
                    expect(cResAuthRequest['threeDSServerTransID']).not.to.be.empty();
                    expect(cResAuthRequest['transStatus']).not.to.be.empty();

                    const cResAuthRequestString = JSON.stringify(cResAuthRequest);

                    const cResAuthRequestString64 = new citypay_api_client.CResAuthRequest.constructFromObject({cres: Buffer.from(cResAuthRequestString).toString('base64')});

                    const cResRequestResponse = await new citypay_api_client.AuthorisationAndPaymentApi(
                        client).cResRequest(cResAuthRequestString64);

                    expect(cResRequestResponse.amount).to.be.equal(1396);
                    expect(cResRequestResponse.authcode).to.be.equal("A12345");
                    expect(cResRequestResponse.authen_result).to.be.equal("Y");
                    expect(cResRequestResponse.authorised).to.be.equal(true);
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
                address1: "7 Esplanade",
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
            expect(result.contact.address1).to.equal("7 Esplanade");

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
            expect(result.contact.address1).to.equal("7 Esplanade");
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
