/**
 * CityPay Payment API
 *  This CityPay API is an HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokenized payments using cardholder Accounts.  ## Compliance and Security Your application will need to adhere to PCI-DSS standards to operate safely and to meet requirements set out by  Visa and MasterCard and the PCI Security Standards Council. These include  * Data must be collected using TLS version 1.2 using [strong cryptography](https://citypay.github.io/api-docs/payment-api/#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive cardholder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities. 
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
 * The BatchTransaction model module.
 * @module model/BatchTransaction
 */
class BatchTransaction {
    /**
     * Constructs a new <code>BatchTransaction</code>.
     * @alias module:model/BatchTransaction
     * @param account_id {String} The card holder account id to process against.
     * @param amount {Number} The amount required to process in the lowest denomination.
     */
    constructor(account_id, amount) { 
        
        BatchTransaction.initialize(this, account_id, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account_id, amount) { 
        obj['account_id'] = account_id;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>BatchTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchTransaction} obj Optional instance to populate.
     * @return {module:model/BatchTransaction} The populated <code>BatchTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchTransaction();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchTransaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchTransaction.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['account_id'] && !(typeof data['account_id'] === 'string' || data['account_id'] instanceof String)) {
            throw new Error("Expected the field `account_id` to be a primitive type in the JSON string but got " + data['account_id']);
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }

        return true;
    }


}

BatchTransaction.RequiredProperties = ["account_id", "amount"];

/**
 * The card holder account id to process against.
 * @member {String} account_id
 */
BatchTransaction.prototype['account_id'] = undefined;

/**
 * The amount required to process in the lowest denomination.
 * @member {Number} amount
 */
BatchTransaction.prototype['amount'] = undefined;

/**
 * An identifier used to reference the transaction set by your integration. The value should be used to refer to the transaction in future calls.
 * @member {String} identifier
 */
BatchTransaction.prototype['identifier'] = undefined;

/**
 * The CityPay merchant id used to process the transaction.
 * @member {Number} merchantid
 */
BatchTransaction.prototype['merchantid'] = undefined;






export default BatchTransaction;

