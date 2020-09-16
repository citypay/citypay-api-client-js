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

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const client_id = process.env.CP_CLIENT_ID;
    const licence_key = process.env.CP_LICENCE_KEY;
    const merchant_id = process.env.CP_MERCHANT_ID;
    let client;

    beforeEach(function () {
        client = new citypay_api_client.ApiClient({ "sandbox": true, "client_id": client_id, "licence_key": licence_key });
        // client.basePath = "https://sandbox.citypay.com/v6";
        // client.authentications['cp-api-key'].apiKey = new citypay_api_client.ApiKey(client_id, licence_key).generateApiKey();
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
            // expect(resp.merchants.length > 2)
        })

    });

}));
