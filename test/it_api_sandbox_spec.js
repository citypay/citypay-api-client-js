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

    beforeEach(function () {
        client = new citypay_api_client.ApiClient({
            "sandbox": true,
            "client_id": client_id,
            "licence_key": licence_key
        });
    });


    describe('Can run operational calls', () => {
        it('should call a ping and ack', async () => {
            let ping = new citypay_api_client.Ping();
            ping.identifier = uuidv4();
            let ack = await new citypay_api_client.OperationalApi(client).pingRequest(ping);
            expect(ack.code === "044")
            expect(ack.identifier === ping.identifier);
        });

        it('should list merchants', async () => {
            let resp = await new citypay_api_client.OperationalApi(client).listMerchantsRequest(client_id);
            expect(resp.client_id === client_id)
            expect(resp.merchants.length > 2)
        })

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
                merchantid: merchant_id
            });
            let decision = await new citypay_api_client.PaymentProcessingApi(client).authorisationRequest(rq);
            expect(decision.isAuthenRequired()).to.be(false);
            expect(decision.isChallengeRequired()).to.be(false);
            expect(decision.isAuthResponse()).to.be(true);

            let result = decision.AuthResponse;
            expect(result.result_code).to.be("001");
            expect(result.identifier).to.be(uuid);
            expect(result.authcode).to.be("A12345");
            expect(result.amount).to.be(1395);


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
            expect(result.account_id).to.be(cha_id);
            expect(result.contact.address1).to.be("7 Esplanade");

            result = await api.accountCardRegisterRequest(cha_id,
                new citypay_api_client.RegisterCard.constructFromObject({
                    cardnumber: "4000 0000 0000 0002",
                    expmonth: "12",
                    expyear: "2030"
                })
            )
            expect(result.account_id).to.be(cha_id);
            expect(result.cards.length).to.be(1);
            expect(result.cards[0].expmonth).to.be(12);
            expect(result.cards[0].expyear).to.be(2030);

            result = await api.accountRetrieveRequest(cha_id);
            expect(result.account_id).to.be(cha_id);
            expect(result.contact.address1).to.be("7 Esplanade");
            expect(result.cards.length).to.be(1);
            expect(result.cards[0].expmonth).to.be(12);
            expect(result.cards[0].expyear).to.be(2030);

            let identifier = uuidv4();
            let cr = new citypay_api_client.ChargeRequest.constructFromObject({
                amount: 7801,
                identifier: identifier,
                merchantid: merchant_id,
                token: result.cards[0].token,
                csc: "012"
            });
            let auth = await api.chargeRequest(cr);
            expect(auth.isAuthenRequired()).to.be(false);
            expect(auth.isChallengeRequired()).to.be(false);
            expect(auth.isAuthResponse()).to.be(true);

            let ar = auth.AuthResponse;
            expect(ar.identifier).to.be(identifier);
            expect(ar.result_code).to.be("001");
            expect(ar.amount).to.be(7801);
            expect(ar.authcode).to.be("A12345");


            let ack = await api.accountDeleteRequest(cha_id);
            expect(ack.code).to.be("01");

        });

    });

}));
