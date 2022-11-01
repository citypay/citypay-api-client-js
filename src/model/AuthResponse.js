/**
 * CityPay Payment API
 *  This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.  ## Compliance and Security Your application will need to adhere to PCI-DSS standards to operate safely and to meet requirements set out by  Visa and MasterCard and the PCI Security Standards Council. These include  * Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities. 
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
     * @param merchantid {Number} The merchant id that processed this transaction.
     * @param result {Number} An integer result that indicates the outcome of the transaction. The Code value below maps to the result value  <table> <tr> <th>Code</th> <th>Abbrev</th> <th>Description</th> </tr> <tr><td>0</td><td>Declined</td><td>Declined</td></tr> <tr><td>1</td><td>Accepted</td><td>Accepted</td></tr> <tr><td>2</td><td>Rejected</td><td>Rejected</td></tr> <tr><td>3</td><td>Not Attempted</td><td>Not Attempted</td></tr> <tr><td>4</td><td>Referred</td><td>Referred</td></tr> <tr><td>5</td><td>PinRetry</td><td>Perform PIN Retry</td></tr> <tr><td>6</td><td>ForSigVer</td><td>Force Signature Verification</td></tr> <tr><td>7</td><td>Hold</td><td>Hold</td></tr> <tr><td>8</td><td>SecErr</td><td>Security Error</td></tr> <tr><td>9</td><td>CallAcq</td><td>Call Acquirer</td></tr> <tr><td>10</td><td>DNH</td><td>Do Not Honour</td></tr> <tr><td>11</td><td>RtnCrd</td><td>Retain Card</td></tr> <tr><td>12</td><td>ExprdCrd</td><td>Expired Card</td></tr> <tr><td>13</td><td>InvldCrd</td><td>Invalid Card No</td></tr> <tr><td>14</td><td>PinExcd</td><td>Pin Tries Exceeded</td></tr> <tr><td>15</td><td>PinInvld</td><td>Pin Invalid</td></tr> <tr><td>16</td><td>AuthReq</td><td>Authentication Required</td></tr> <tr><td>17</td><td>AuthenFail</td><td>Authentication Failed</td></tr> <tr><td>18</td><td>Verified</td><td>Card Verified</td></tr> <tr><td>19</td><td>Cancelled</td><td>Cancelled</td></tr> <tr><td>20</td><td>Un</td><td>Unknown</td></tr> <tr><td>21</td><td>Challenged</td><td>Challenged</td></tr> <tr><td>22</td><td>Decoupled</td><td>Decoupled</td></tr> <tr><td>23</td><td>Denied</td><td>Permission Denied</td></tr> </table> 
     * @param result_code {String} The result code as defined in the Response Codes Reference for example 000 is an accepted live transaction whilst 001 is an accepted test transaction. Result codes identify the source of success and failure.  Codes may start with an alpha character i.e. C001 indicating a type of error such as a card validation error. 
     * @param result_message {String} The message regarding the result which provides further narrative to the result code. 
     */
    constructor(merchantid, result, result_code, result_message) { 
        
        AuthResponse.initialize(this, merchantid, result, result_code, result_message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, merchantid, result, result_code, result_message) { 
        obj['merchantid'] = merchantid;
        obj['result'] = result;
        obj['result_code'] = result_code;
        obj['result_message'] = result_message;
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
 * The merchant id that processed this transaction.
 * @member {Number} merchantid
 */
AuthResponse.prototype['merchantid'] = undefined;

/**
 * An integer result that indicates the outcome of the transaction. The Code value below maps to the result value  <table> <tr> <th>Code</th> <th>Abbrev</th> <th>Description</th> </tr> <tr><td>0</td><td>Declined</td><td>Declined</td></tr> <tr><td>1</td><td>Accepted</td><td>Accepted</td></tr> <tr><td>2</td><td>Rejected</td><td>Rejected</td></tr> <tr><td>3</td><td>Not Attempted</td><td>Not Attempted</td></tr> <tr><td>4</td><td>Referred</td><td>Referred</td></tr> <tr><td>5</td><td>PinRetry</td><td>Perform PIN Retry</td></tr> <tr><td>6</td><td>ForSigVer</td><td>Force Signature Verification</td></tr> <tr><td>7</td><td>Hold</td><td>Hold</td></tr> <tr><td>8</td><td>SecErr</td><td>Security Error</td></tr> <tr><td>9</td><td>CallAcq</td><td>Call Acquirer</td></tr> <tr><td>10</td><td>DNH</td><td>Do Not Honour</td></tr> <tr><td>11</td><td>RtnCrd</td><td>Retain Card</td></tr> <tr><td>12</td><td>ExprdCrd</td><td>Expired Card</td></tr> <tr><td>13</td><td>InvldCrd</td><td>Invalid Card No</td></tr> <tr><td>14</td><td>PinExcd</td><td>Pin Tries Exceeded</td></tr> <tr><td>15</td><td>PinInvld</td><td>Pin Invalid</td></tr> <tr><td>16</td><td>AuthReq</td><td>Authentication Required</td></tr> <tr><td>17</td><td>AuthenFail</td><td>Authentication Failed</td></tr> <tr><td>18</td><td>Verified</td><td>Card Verified</td></tr> <tr><td>19</td><td>Cancelled</td><td>Cancelled</td></tr> <tr><td>20</td><td>Un</td><td>Unknown</td></tr> <tr><td>21</td><td>Challenged</td><td>Challenged</td></tr> <tr><td>22</td><td>Decoupled</td><td>Decoupled</td></tr> <tr><td>23</td><td>Denied</td><td>Permission Denied</td></tr> </table> 
 * @member {Number} result
 */
AuthResponse.prototype['result'] = undefined;

/**
 * The result code as defined in the Response Codes Reference for example 000 is an accepted live transaction whilst 001 is an accepted test transaction. Result codes identify the source of success and failure.  Codes may start with an alpha character i.e. C001 indicating a type of error such as a card validation error. 
 * @member {String} result_code
 */
AuthResponse.prototype['result_code'] = undefined;

/**
 * The message regarding the result which provides further narrative to the result code. 
 * @member {String} result_message
 */
AuthResponse.prototype['result_message'] = undefined;

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
 * The result of any authentication using 3d_secure authorisation against ecommerce transactions. Values are:  <table> <tr> <th>Value</th> <th>Description</th> </tr> <tr> <td>Y</td> <td>Authentication Successful. The Cardholder's password was successfully validated.</td> </tr> <tr> <td>N</td> <td>Authentication Failed. Customer failed or cancelled authentication, transaction denied.</td> </tr> <tr> <td>A</td> <td>Attempts Processing Performed Authentication could not be completed but a proof of authentication attempt (CAVV) was generated.</td> </tr> <tr> <td>U</td> <td>Authentication Could Not Be Performed Authentication could not be completed, due to technical or other problem.</td> </tr> </table> 
 * @member {String} authen_result
 */
AuthResponse.prototype['authen_result'] = undefined;

/**
 * A boolean definition that indicates that the transaction was authorised. It will return false if the transaction  was declined, rejected or cancelled due to CSC matching failures.  Attention should be referenced to the AuthResult and Response code for accurate determination of the result. 
 * @member {Boolean} authorised
 */
AuthResponse.prototype['authorised'] = undefined;

/**
 * The AVS result codes determine the result of checking the AVS values within the Address Verification fraud system. If a transaction is declined due to the AVS code not matching, this value can help determine the reason for the decline.  <table> <tr> <th>Code</th> <th>Description</th> </tr> <tr><td>Y</td><td>Address and 5 digit post code match</td></tr> <tr><td>M</td><td>Street address and Postal codes match for international transaction</td></tr> <tr><td>U</td><td>No AVS data available from issuer auth system</td></tr> <tr><td>A</td><td>Addres matches, post code does not</td></tr> <tr><td>I</td><td>Address information verified for international transaction</td></tr> <tr><td>Z</td><td>5 digit post code matches, Address does not</td></tr> <tr><td>W</td><td>9 digit post code matches, Address does not</td></tr> <tr><td>X</td><td>Postcode and address match</td></tr> <tr><td>B</td><td>Postal code not verified due to incompatible formats</td></tr> <tr><td>P</td><td>Postal codes match. Street address not verified due to to incompatible formats</td></tr> <tr><td>E</td><td>AVS Error</td></tr> <tr><td>C</td><td>Street address and Postal code not verified due to incompatible formats</td></tr> <tr><td>D</td><td>Street address and postal codes match</td></tr> <tr><td> </td><td>No information</td></tr> <tr><td>N</td><td>Neither postcode nor address match</td></tr> <tr><td>R</td><td>Retry, System unavailble or Timed Out</td></tr> <tr><td>S</td><td>AVS Service not supported by issuer or processor</td></tr> <tr><td>G</td><td>Issuer does not participate in AVS</td></tr> </table> 
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
 * The CSC rseult codes determine the result of checking the provided CSC value within the Card Security Code fraud system. If a transaction is declined due to the CSC code not matching, this value can help determine the reason for the decline.  <table> <tr> <th>Code</th> <th>Description</th> </tr> <tr><td> </td><td>No information</td></tr> <tr><td>M</td><td>Card verification data matches</td></tr> <tr><td>N</td><td>Card verification data was checked but did not match</td></tr> <tr><td>P</td><td>Card verification was not processed</td></tr> <tr><td>S</td><td>The card verification data should be on the card but the merchant indicates that it is not</td></tr> <tr><td>U</td><td>The card issuer is not certified</td></tr> </table> 
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
 * Used to identify that a transaction was processed on a live authorisation platform.
 * @member {Boolean} live
 */
AuthResponse.prototype['live'] = undefined;

/**
 * A masked value of the card number used for processing displaying limited values that can be used on a receipt. 
 * @member {String} maskedpan
 */
AuthResponse.prototype['maskedpan'] = undefined;

/**
 * A name of the card scheme of the transaction that processed the transaction such as Visa or MasterCard. 
 * @member {String} scheme
 */
AuthResponse.prototype['scheme'] = undefined;

/**
 * A SHA256 digest value of the transaction used to validate the response data The digest is calculated by concatenating   * authcode   * amount   * response_code   * merchant_id   * trans_no   * identifier   * licence_key - which is not provided in the response. 
 * @member {String} sha256
 */
AuthResponse.prototype['sha256'] = undefined;

/**
 * Used to identify the status of a transaction. The status is used to track a transaction through its life cycle.  <table> <tr> <th>Id</th> <th>Description</th> </tr> <tr> <td>O</td> <td>Transaction is open for settlement</td> </tr> <tr> <td>A</td> <td>Transaction is assigned for settlement and can no longer be voided</td> </tr> <tr> <td>S</td> <td>Transaction has been settled</td> </tr> <tr> <td>D</td> <td>Transaction has been declined</td> </tr> <tr> <td>R</td> <td>Transaction has been rejected</td> </tr> <tr> <td>P</td> <td>Transaction has been authorised only and awaiting a capture. Used in pre-auth situations</td> </tr> <tr> <td>C</td> <td>Transaction has been cancelled</td> </tr> <tr> <td>E</td> <td>Transaction has expired</td> </tr> <tr> <td>I</td> <td>Transaction has been initialised but no action was able to be carried out</td> </tr> <tr> <td>H</td> <td>Transaction is awaiting authorisation</td> </tr> <tr> <td>.</td> <td>Transaction is on hold</td> </tr> <tr> <td>V</td> <td>Transaction has been verified</td> </tr> </table> 
 * @member {String} trans_status
 */
AuthResponse.prototype['trans_status'] = undefined;

/**
 * The resulting transaction number, ordered incrementally from 1 for every merchant_id. The value will default to less than 1 for transactions that do not have a transaction number issued. 
 * @member {Number} transno
 */
AuthResponse.prototype['transno'] = undefined;






export default AuthResponse;

