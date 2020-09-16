/**
 * CityPay Payment API
 *  This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.  ## Compliance and Security <aside class=\"notice\">   Before we begin a reminder that your application will need to adhere to PCI-DSS standards to operate safely   and to meet requirements set out by Visa and MasterCard and the PCI Security Standards Council including: </aside>  * Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities.
 *
 * The version of the OpenAPI document: dev
 * Contact: support@citypay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

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


    describe('Decision', function () {


        it('should have the property authen_required (base name: "AuthenRequired")', function () {
            let json = {
                "AuthenRequired": {
                    "acs_url": "https://www.acs.com/tdsecure/opt_in_dispatcher.jsp?partner=debit&VAA=B",
                    "md": "0000000000000000000022",
                    "pareq": "eJxVUm1v2yAQ/itWv8dg/B5dmJyfw=="
                }
            }
            let decision = new citypay_api_client.ApiClient.instance.deserialize({
                status: 200,
                body: json
            }, citypay_api_client.Decision);

            expect(decision['AuthenRequired']).to.be.a(citypay_api_client.AuthenRequired);
            expect(decision.hasOwnProperty('AuthResponse')).to.be(false);
            expect(decision.hasOwnProperty('RequestChallenged')).to.be(false);

            let ar = decision.AuthenRequired;
            expect(ar.acs_url).to.be("https://www.acs.com/tdsecure/opt_in_dispatcher.jsp?partner=debit&VAA=B");
            expect(ar.md).to.be("0000000000000000000022");
            expect(ar.pareq).to.be("eJxVUm1v2yAQ/itWv8dg/B5dmJyfw==");
        });

        it('should have the property auth_response (base name: "AuthResponse")', function () {
            let json = {
                "AuthResponse": {
                    "amount": 5500,
                    "atrn": "atrn1",
                    "atsd": "a",
                    "authcode": "12345",
                    "authen_result": "R",
                    "authorised": true,
                    "avs_result": "G",
                    "bin_commercial": false,
                    "bin_debit": false,
                    "bin_description": "bin_desc",
                    "cavv": "cavvvvvvvvvvvvv",
                    "context": "20200812075906AAAGV4",
                    "csc_result": "C",
                    "currency": "GBP",
                    "datetime": "2020-08-12T07:59:11Z",
                    "eci": "0",
                    "identifier": "ident1",
                    "live": true,
                    "maskedpan": "400000******0002",
                    "merchantid": 12345,
                    "result": 1,
                    "result_code": "000",
                    "result_message": "System: Accepted Transaction",
                    "scheme": "VISA_BUSINESS",
                    "sha256": "abcdefg",
                    "trans_status": "P",
                    "transno": 74875
                }
            }
            let decision = new citypay_api_client.ApiClient.instance.deserialize({
                status: 200,
                body: json
            }, citypay_api_client.Decision);

            expect(decision.hasOwnProperty('AuthenRequired')).to.be(false);
            expect(decision['AuthResponse']).to.be.a(citypay_api_client.AuthResponse);
            expect(decision.hasOwnProperty('RequestChallenged')).to.be(false);

            let response = decision.AuthResponse;
            expect(response.amount).to.be(5500);
            expect(response.atrn).to.be("atrn1");
            expect(response.atsd).to.be("a");
            expect(response.authcode).to.be("12345");
            expect(response.authen_result).to.be("R");
            expect(response.authorised).to.be(true);
            expect(response.avs_result).to.be("G");
            expect(response.bin_commercial).to.be(false);
            expect(response.bin_debit).to.be(false);
            expect(response.bin_description).to.be("bin_desc");
            expect(response.cavv).to.be("cavvvvvvvvvvvvv");
            expect(response.context).to.be("20200812075906AAAGV4");
            expect(response.csc_result).to.be("C");
            expect(response.currency).to.be("GBP");
            expect(response.datetime.toISOString()).to.be(new Date("2020-08-12T07:59:11Z").toISOString());
            expect(response.eci).to.be("0");
            expect(response.identifier).to.be("ident1");
            expect(response.live).to.be(true);
            expect(response.maskedpan).to.be("400000******0002");
            expect(response.merchantid).to.be(12345);
            expect(response.result).to.be(1);
            expect(response.result_code).to.be("000");
            expect(response.result_message).to.be("System: Accepted Transaction");
            expect(response.scheme).to.be("VISA_BUSINESS");
            expect(response.sha256).to.be("abcdefg");
            expect(response.trans_status).to.be("P");
            expect(response.transno).to.be(74875);
        });

        it('should have the property request_challenged (base name: "RequestChallenged")', function () {

            let json = {
                "RequestChallenged": {
                    "acs_url": "https://someacs.com/acs",
                    "merchantid": 123456,
                    "threedserver_trans_id": "MD0000000000000",
                    "creq": "CCRREEQQQQQ",
                    "transno": 112233
                }
            }
            let decision = new citypay_api_client.ApiClient.instance.deserialize({
                status: 200,
                body: json
            }, citypay_api_client.Decision);

            expect(decision.hasOwnProperty('AuthenRequired')).to.be(false);
            expect(decision.hasOwnProperty('AuthResponse')).to.be(false);
            expect(decision['RequestChallenged']).to.be.a(citypay_api_client.RequestChallenged);
            let rc = decision.RequestChallenged;
            expect(rc.acs_url).to.be("https://someacs.com/acs");
            expect(rc.merchantid).to.be(123456);
            expect(rc.threedserver_trans_id).to.be("MD0000000000000");
            expect(rc.creq).to.be("CCRREEQQQQQ");
            expect(rc.transno).to.be(112233);
        });

    });

}));
