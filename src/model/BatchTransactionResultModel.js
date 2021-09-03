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
 * The BatchTransactionResultModel model module.
 * @module model/BatchTransactionResultModel
 */
class BatchTransactionResultModel {
    /**
     * Constructs a new <code>BatchTransactionResultModel</code>.
     * @alias module:model/BatchTransactionResultModel
     * @param account_id {String} The card holder account id used for the transaction.
     * @param identifier {String} The identifier of the transaction.
     * @param merchantid {Number} The merchant id of the transaction.
     * @param message {String} A response message pertaining to the transaction.
     */
    constructor(account_id, identifier, merchantid, message) { 
        
        BatchTransactionResultModel.initialize(this, account_id, identifier, merchantid, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account_id, identifier, merchantid, message) { 
        obj['account_id'] = account_id;
        obj['identifier'] = identifier;
        obj['merchantid'] = merchantid;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>BatchTransactionResultModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchTransactionResultModel} obj Optional instance to populate.
     * @return {module:model/BatchTransactionResultModel} The populated <code>BatchTransactionResultModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchTransactionResultModel();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('authcode')) {
                obj['authcode'] = ApiClient.convertToType(data['authcode'], 'String');
            }
            if (data.hasOwnProperty('authorised')) {
                obj['authorised'] = ApiClient.convertToType(data['authorised'], 'Boolean');
            }
            if (data.hasOwnProperty('maskedpan')) {
                obj['maskedpan'] = ApiClient.convertToType(data['maskedpan'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'Number');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The card holder account id used for the transaction.
 * @member {String} account_id
 */
BatchTransactionResultModel.prototype['account_id'] = undefined;

/**
 * The identifier of the transaction.
 * @member {String} identifier
 */
BatchTransactionResultModel.prototype['identifier'] = undefined;

/**
 * The merchant id of the transaction.
 * @member {Number} merchantid
 */
BatchTransactionResultModel.prototype['merchantid'] = undefined;

/**
 * A response message pertaining to the transaction.
 * @member {String} message
 */
BatchTransactionResultModel.prototype['message'] = undefined;

/**
 * The amount of the transaction processed.
 * @member {Number} amount
 */
BatchTransactionResultModel.prototype['amount'] = undefined;

/**
 * The authorisation code of a successful transaction.
 * @member {String} authcode
 */
BatchTransactionResultModel.prototype['authcode'] = undefined;

/**
 * A boolean definition that indicates that the transaction was authorised. It will return false if the transaction  was declined, rejected or cancelled due to CSC matching failures.  Attention should be referenced to the AuthResult and Response code for accurate determination of the result. 
 * @member {Boolean} authorised
 */
BatchTransactionResultModel.prototype['authorised'] = undefined;

/**
 * A masked value of the card number used for processing displaying limited values that can be used on a receipt. 
 * @member {String} maskedpan
 */
BatchTransactionResultModel.prototype['maskedpan'] = undefined;

/**
 * An integer result that indicates the outcome of the transaction. The Code value below maps to the result value  <table> <tr> <th>Code</th> <th>Abbrev</th> <th>Description</th> </tr> <tr><td>0</td><td>Declined</td><td>Declined</td></tr> <tr><td>1</td><td>Accepted</td><td>Accepted</td></tr> <tr><td>2</td><td>Rejected</td><td>Rejected</td></tr> <tr><td>3</td><td>Not Attempted</td><td>Not Attempted</td></tr> <tr><td>4</td><td>Referred</td><td>Referred</td></tr> <tr><td>5</td><td>PinRetry</td><td>Perform PIN Retry</td></tr> <tr><td>6</td><td>ForSigVer</td><td>Force Signature Verification</td></tr> <tr><td>7</td><td>Hold</td><td>Hold</td></tr> <tr><td>8</td><td>SecErr</td><td>Security Error</td></tr> <tr><td>9</td><td>CallAcq</td><td>Call Acquirer</td></tr> <tr><td>10</td><td>DNH</td><td>Do Not Honour</td></tr> <tr><td>11</td><td>RtnCrd</td><td>Retain Card</td></tr> <tr><td>12</td><td>ExprdCrd</td><td>Expired Card</td></tr> <tr><td>13</td><td>InvldCrd</td><td>Invalid Card No</td></tr> <tr><td>14</td><td>PinExcd</td><td>Pin Tries Exceeded</td></tr> <tr><td>15</td><td>PinInvld</td><td>Pin Invalid</td></tr> <tr><td>16</td><td>AuthReq</td><td>Authentication Required</td></tr> <tr><td>17</td><td>AuthenFail</td><td>Authentication Failed</td></tr> <tr><td>18</td><td>Verified</td><td>Card Verified</td></tr> <tr><td>19</td><td>Cancelled</td><td>Cancelled</td></tr> <tr><td>20</td><td>Un</td><td>Unknown</td></tr> </table> 
 * @member {Number} result
 */
BatchTransactionResultModel.prototype['result'] = undefined;

/**
 * A name of the card scheme of the transaction that processed the transaction such as Visa or MasterCard. 
 * @member {String} scheme
 */
BatchTransactionResultModel.prototype['scheme'] = undefined;






export default BatchTransactionResultModel;

