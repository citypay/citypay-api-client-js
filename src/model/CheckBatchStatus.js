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
 * The CheckBatchStatus model module.
 * @module model/CheckBatchStatus
 */
class CheckBatchStatus {
    /**
     * Constructs a new <code>CheckBatchStatus</code>.
     * @alias module:model/CheckBatchStatus
     * @param batch_id {Array.<Number>} 
     */
    constructor(batch_id) { 
        
        CheckBatchStatus.initialize(this, batch_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, batch_id) { 
        obj['batch_id'] = batch_id;
    }

    /**
     * Constructs a <code>CheckBatchStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckBatchStatus} obj Optional instance to populate.
     * @return {module:model/CheckBatchStatus} The populated <code>CheckBatchStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckBatchStatus();

            if (data.hasOwnProperty('batch_id')) {
                obj['batch_id'] = ApiClient.convertToType(data['batch_id'], ['Number']);
            }
            if (data.hasOwnProperty('client_account_id')) {
                obj['client_account_id'] = ApiClient.convertToType(data['client_account_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckBatchStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckBatchStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CheckBatchStatus.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['batch_id'])) {
            throw new Error("Expected the field `batch_id` to be an array in the JSON data but got " + data['batch_id']);
        }
        // ensure the json data is a string
        if (data['client_account_id'] && !(typeof data['client_account_id'] === 'string' || data['client_account_id'] instanceof String)) {
            throw new Error("Expected the field `client_account_id` to be a primitive type in the JSON string but got " + data['client_account_id']);
        }

        return true;
    }


}

CheckBatchStatus.RequiredProperties = ["batch_id"];

/**
 * @member {Array.<Number>} batch_id
 */
CheckBatchStatus.prototype['batch_id'] = undefined;

/**
 * The batch account id to obtain the batch for. Defaults to your client id if not provided.
 * @member {String} client_account_id
 */
CheckBatchStatus.prototype['client_account_id'] = undefined;






export default CheckBatchStatus;

