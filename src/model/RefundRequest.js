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
 * The RefundRequest model module.
 * @module model/RefundRequest
 */
class RefundRequest {
    /**
     * Constructs a new <code>RefundRequest</code>.
     * @alias module:model/RefundRequest
     * @param amount {Number} The amount to refund in the lowest unit of currency with a variable length to a maximum of 12 digits.  The amount should be the total amount required to refund for the transaction up to the original processed amount.  No decimal points are to be included and no divisional characters such as 1,024.  For example with GBP £1,021.95 the amount value is 102195. 
     * @param identifier {String} The identifier of the refund to process. The value should be a valid reference and may be used to perform  post processing actions and to aid in reconciliation of transactions.  The value should be a valid printable string with ASCII character ranges from 0x32 to 0x127.  The identifier is recommended to be distinct for each transaction such as a [random unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) this will aid in ensuring each transaction is identifiable.  When transactions are processed they are also checked for duplicate requests. Changing the identifier on a subsequent request will ensure that a transaction is considered as different. 
     * @param merchantid {Number} Identifies the merchant account to perform the refund for.
     * @param refund_ref {Number} A reference to the original transaction number that is wanting to be refunded. The original  transaction must be on the same merchant id, previously authorised. 
     */
    constructor(amount, identifier, merchantid, refund_ref) { 
        
        RefundRequest.initialize(this, amount, identifier, merchantid, refund_ref);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, identifier, merchantid, refund_ref) { 
        obj['amount'] = amount;
        obj['identifier'] = identifier;
        obj['merchantid'] = merchantid;
        obj['refund_ref'] = refund_ref;
    }

    /**
     * Constructs a <code>RefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RefundRequest} obj Optional instance to populate.
     * @return {module:model/RefundRequest} The populated <code>RefundRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RefundRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
            if (data.hasOwnProperty('refund_ref')) {
                obj['refund_ref'] = ApiClient.convertToType(data['refund_ref'], 'Number');
            }
            if (data.hasOwnProperty('trans_info')) {
                obj['trans_info'] = ApiClient.convertToType(data['trans_info'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The amount to refund in the lowest unit of currency with a variable length to a maximum of 12 digits.  The amount should be the total amount required to refund for the transaction up to the original processed amount.  No decimal points are to be included and no divisional characters such as 1,024.  For example with GBP £1,021.95 the amount value is 102195. 
 * @member {Number} amount
 */
RefundRequest.prototype['amount'] = undefined;

/**
 * The identifier of the refund to process. The value should be a valid reference and may be used to perform  post processing actions and to aid in reconciliation of transactions.  The value should be a valid printable string with ASCII character ranges from 0x32 to 0x127.  The identifier is recommended to be distinct for each transaction such as a [random unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) this will aid in ensuring each transaction is identifiable.  When transactions are processed they are also checked for duplicate requests. Changing the identifier on a subsequent request will ensure that a transaction is considered as different. 
 * @member {String} identifier
 */
RefundRequest.prototype['identifier'] = undefined;

/**
 * Identifies the merchant account to perform the refund for.
 * @member {Number} merchantid
 */
RefundRequest.prototype['merchantid'] = undefined;

/**
 * A reference to the original transaction number that is wanting to be refunded. The original  transaction must be on the same merchant id, previously authorised. 
 * @member {Number} refund_ref
 */
RefundRequest.prototype['refund_ref'] = undefined;

/**
 * Further information that can be added to the transaction will display in reporting. Can be used for flexible values such as operator id.
 * @member {String} trans_info
 */
RefundRequest.prototype['trans_info'] = undefined;






export default RefundRequest;

