/**
 * CityPay Payment API
 *  This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.  ## Compliance and Security <aside class=\"notice\">   Before we begin a reminder that your application will need to adhere to PCI-DSS standards to operate safely   and to meet requirements set out by Visa and MasterCard and the PCI Security Standards Council including: </aside>  * Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities. 
 *
 * Contact: support@citypay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AuthResponse model module.
 * @module model/AuthResponse
 */
class AuthResponse {
    /**
     * Constructs a new <code>AuthResponse</code>.
     * @alias module:model/AuthResponse
     */
    constructor() { 
        
        AuthResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthResponse} obj Optional instance to populate.
     * @return {module:model/AuthResponse} The populated <code>AuthResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthResponse();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('atrn')) {
                obj['atrn'] = ApiClient.convertToType(data['atrn'], 'String');
            }
            if (data.hasOwnProperty('atsd')) {
                obj['atsd'] = ApiClient.convertToType(data['atsd'], 'String');
            }
            if (data.hasOwnProperty('authcode')) {
                obj['authcode'] = ApiClient.convertToType(data['authcode'], 'String');
            }
            if (data.hasOwnProperty('authen_result')) {
                obj['authen_result'] = ApiClient.convertToType(data['authen_result'], 'String');
            }
            if (data.hasOwnProperty('authorised')) {
                obj['authorised'] = ApiClient.convertToType(data['authorised'], 'Boolean');
            }
            if (data.hasOwnProperty('avs_result')) {
                obj['avs_result'] = ApiClient.convertToType(data['avs_result'], 'String');
            }
            if (data.hasOwnProperty('bin_commercial')) {
                obj['bin_commercial'] = ApiClient.convertToType(data['bin_commercial'], 'Boolean');
            }
            if (data.hasOwnProperty('bin_debit')) {
                obj['bin_debit'] = ApiClient.convertToType(data['bin_debit'], 'Boolean');
            }
            if (data.hasOwnProperty('bin_description')) {
                obj['bin_description'] = ApiClient.convertToType(data['bin_description'], 'String');
            }
            if (data.hasOwnProperty('cavv')) {
                obj['cavv'] = ApiClient.convertToType(data['cavv'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ApiClient.convertToType(data['context'], 'String');
            }
            if (data.hasOwnProperty('csc_result')) {
                obj['csc_result'] = ApiClient.convertToType(data['csc_result'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
            }
            if (data.hasOwnProperty('eci')) {
                obj['eci'] = ApiClient.convertToType(data['eci'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('live')) {
                obj['live'] = ApiClient.convertToType(data['live'], 'Boolean');
            }
            if (data.hasOwnProperty('maskedpan')) {
                obj['maskedpan'] = ApiClient.convertToType(data['maskedpan'], 'String');
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'Number');
            }
            if (data.hasOwnProperty('result_code')) {
                obj['result_code'] = ApiClient.convertToType(data['result_code'], 'String');
            }
            if (data.hasOwnProperty('result_message')) {
                obj['result_message'] = ApiClient.convertToType(data['result_message'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
            if (data.hasOwnProperty('sha256')) {
                obj['sha256'] = ApiClient.convertToType(data['sha256'], 'String');
            }
            if (data.hasOwnProperty('trans_status')) {
                obj['trans_status'] = ApiClient.convertToType(data['trans_status'], 'String');
            }
            if (data.hasOwnProperty('transno')) {
                obj['transno'] = ApiClient.convertToType(data['transno'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The amount of the transaction processed.
 * @member {Number} amount
 */
AuthResponse.prototype['amount'] = undefined;

/**
 * A reference number provided by the acquirer for a transaction it can be used to cross reference transactions with an Acquirers reporting panel. 
 * @member {String} atrn
 */
AuthResponse.prototype['atrn'] = undefined;

/**
 * Additional Transaction Security Data used for ecommerce transactions to decipher security capabilities and attempts against a transaction.
 * @member {String} atsd
 */
AuthResponse.prototype['atsd'] = undefined;

/**
 * The authorisation code as returned by the card issuer or acquiring bank when a transaction has successfully   been authorised. Authorisation codes contain alphanumeric values. Whilst the code confirms authorisation it   should not be used to determine whether a transaction was successfully processed. For instance an auth code   may be returned when a transaction has been subsequently declined due to a CSC mismatch. 
 * @member {String} authcode
 */
AuthResponse.prototype['authcode'] = undefined;

/**
 * The result of any authentication using 3d_secure authorisation against ecommerce transactions. Values are | Value | Description | |-------|-------------| | Y | Authentication Successful. The Cardholder's password was successfully validated. | | N | Authentication Failed. Customer failed or cancelled authentication, transaction denied. | | A | Attempts Processing Performed Authentication could not be completed but a proof of authentication attempt (CAVV) was generated | | U | Authentication Could Not Be Performed Authentication could not be completed, due to technical or other problem | 
 * @member {String} authen_result
 */
AuthResponse.prototype['authen_result'] = undefined;

/**
 * A boolean definition that indicates that the transaction was authorised. It will return false if the transaction  was declined, rejected or cancelled due to CSC matching failures. Attention should be referenced to the AuthResult and Response code for accurate determination of the result. 
 * @member {Boolean} authorised
 */
AuthResponse.prototype['authorised'] = undefined;

/**
 * The AVS result codes determine the result of checking the AVS values within the Address Verification fraud system. If a transaction is declined due to the AVS code not matching, this value can help determine the reason for the decline.   | Code | Description |  |------|------------|  | Y | Address and 5 digit post code match |  | M | Street address and Postal codes match for international transaction |  | U | No AVS data available from issuer auth system |  | A | Addres matches, post code does not |  | I | Address information verified for international transaction |  | Z | 5 digit post code matches, Address does not |  | W | 9 digit post code matches, Address does not |  | X | Postcode and address match |  | B | Postal code not verified due to incompatible formats |  | P | Postal codes match. Street address not verified due to to incompatible formats |  | E | AVS Error |  | C | Street address and Postal code not verified due to incompatible formats |  | D | Street address and postal codes match |  |   | No information |  | N | Neither postcode nor address match |  | R | Retry, System unavailble or Timed Out |  | S | AVS Service not supported by issuer or processor |  | G | Issuer does not participate in AVS | 
 * @member {String} avs_result
 */
AuthResponse.prototype['avs_result'] = undefined;

/**
 * Determines whether the bin range was found to be a commercial or business card.
 * @member {Boolean} bin_commercial
 */
AuthResponse.prototype['bin_commercial'] = undefined;

/**
 * Determines whether the bin range was found to be a debit card. If false the card was considered as a credit card.
 * @member {Boolean} bin_debit
 */
AuthResponse.prototype['bin_debit'] = undefined;

/**
 * A description of the bin range found for the card.
 * @member {String} bin_description
 */
AuthResponse.prototype['bin_description'] = undefined;

/**
 * The cardholder authentication verification value which can be returned for verification purposes of the authenticated  transaction for dispute realisation. 
 * @member {String} cavv
 */
AuthResponse.prototype['cavv'] = undefined;

/**
 * The context which processed the transaction, can be used for support purposes to trace transactions.
 * @member {String} context
 */
AuthResponse.prototype['context'] = undefined;

/**
 * The CSC rseult codes determine the result of checking the provided CSC value within the Card Security Code fraud system. If a transaction is declined due to the CSC code not matching, this value can help determine the reason for the decline.   | Code | Description |  |------|------------|  |   | No information |  | M | Card verification data matches |  | N | Card verification data was checked but did not match |  | P | Card verification was not processed |  | S | The card verification data should be on the card but the merchant indicates that it is not |  | U | The card issuer is not certified | 
 * @member {String} csc_result
 */
AuthResponse.prototype['csc_result'] = undefined;

/**
 * The currency the transaction was processed in. This is an `ISO4217` alpha currency value.
 * @member {String} currency
 */
AuthResponse.prototype['currency'] = undefined;

/**
 * The UTC date time of the transaction in ISO data time format. 
 * @member {Date} datetime
 */
AuthResponse.prototype['datetime'] = undefined;

/**
 * An Electronic Commerce Indicator (ECI) used to identify the result of authentication using 3DSecure. 
 * @member {String} eci
 */
AuthResponse.prototype['eci'] = undefined;

/**
 * The identifier provided within the request.
 * @member {String} identifier
 */
AuthResponse.prototype['identifier'] = undefined;

/**
 * Used to identify that a tranasction was processed on a live authorisation platform.
 * @member {Boolean} live
 */
AuthResponse.prototype['live'] = undefined;

/**
 * A masked value of the card number used for processing displaying limited values that can be used on a receipt. 
 * @member {String} maskedpan
 */
AuthResponse.prototype['maskedpan'] = undefined;

/**
 * The merchant id that processed this transaction.
 * @member {Number} merchantid
 */
AuthResponse.prototype['merchantid'] = undefined;

/**
 * An integer result that indicates the outcome of the transaction. The Code value below maps to the result value   | Code | Abbrev | Description |  |------|-------|-------------|  | 0 | Declined | Declined |  | 1 | Accepted | Accepted |  | 2 | Rejected | Rejected |  | 3 | Not Attempted | Not Attempted |  | 4 | Referred | Referred |  | 5 | PinRetry | Perform PIN Retry |  | 6 | ForSigVer | Force Signature Verification |  | 7 | Hold | Hold |  | 8 | SecErr | Security Error |  | 9 | CallAcq | Call Acquirer |  | 10 | DNH | Do Not Honour |  | 11 | RtnCrd | Retain Card |  | 12 | ExprdCrd | Expired Card |  | 13 | InvldCrd | Invalid Card No |  | 14 | PinExcd | Pin Tries Exceeded |  | 15 | PinInvld | Pin Invalid |  | 16 | AuthReq | Authentication Required |  | 17 | AuthenFail | Authentication Failed |  | 18 | Verified | Card Verified |  | 19 | Cancelled | Cancelled |  | 20 | Un | Unknown | 
 * @member {Number} result
 */
AuthResponse.prototype['result'] = undefined;

/**
 * The result code as defined in the Response Codes Reference for example 000 is an accepted live transaction whilst 001 is an accepted test transaction. Result codes identify the source of success and failure. Codes may start with an alpha character i.e. C001 indicating a type of error such as a card validation error. 
 * @member {String} result_code
 */
AuthResponse.prototype['result_code'] = undefined;

/**
 * The message regarding the result which provides further narrative to the result code. 
 * @member {String} result_message
 */
AuthResponse.prototype['result_message'] = undefined;

/**
 * A name of the card scheme of the transaction that processed the transaction such as Visa or MasterCard. 
 * @member {String} scheme
 */
AuthResponse.prototype['scheme'] = undefined;

/**
 * A SHA256 digest value of the transaction used to validate the response data The digest is calculated by concatenating  * authcode  * amount  * response_code  * merchant_id  * trans_no  * identifier  * licence_key - which is not provided in the response. 
 * @member {String} sha256
 */
AuthResponse.prototype['sha256'] = undefined;

/**
 * Used to identify the status of a transaction. The status is used to track a transaction through its life cycle.  | Id | Description | |----|-------------| | O | Transaction is open for settlement | | A | Transaction is assigned for settlement and can no longer be voided | | S | Transaction has been settled   | | D | Transaction has been declined | | R | Transaction has been rejected | | P | Transaction has been authorised only and awaiting a capture. Used in pre-auth situations | | C | Transaction has been cancelled | | E | Transaction has expired | | I | Transaction has been initialised but no action was able to be carried out | | H | Transaction is awaiting authorisation | | . | Transaction is on hold | | V | Transaction has been verified | 
 * @member {String} trans_status
 */
AuthResponse.prototype['trans_status'] = undefined;

/**
 * The resulting transaction number, ordered incrementally from 1 for every merchant_id. The value will default to less than 1 for transactions that do not have a transaction number issued. 
 * @member {Number} transno
 */
AuthResponse.prototype['transno'] = undefined;






export default AuthResponse;

