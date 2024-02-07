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
import BatchTransactionResultModel from './BatchTransactionResultModel';

/**
 * The BatchReportResponseModel model module.
 * @module model/BatchReportResponseModel
 */
class BatchReportResponseModel {
    /**
     * Constructs a new <code>BatchReportResponseModel</code>.
     * @alias module:model/BatchReportResponseModel
     * @param amount {Number} The total amount that the batch contains.
     * @param batch_date {Date} The date and time of the batch in ISO-8601 format.
     * @param batch_id {Number} The batch id specified in the batch processing request.
     * @param batch_status {String} The status of the batch. Possible values are - CANCELLED. The file has been cancelled by an administrator or server process.  - COMPLETE. The file has passed through the processing cycle and is determined as being complete further information should be obtained on the results of the processing - ERROR_IN_PROCESSING. Errors have occurred in the processing that has deemed that processing can not continue. - INITIALISED. The file has been initialised and no action has yet been performed - LOCKED. The file has been locked for processing - QUEUED. The file has been queued for processing yet no processing has yet been performed - UNKNOWN. The file is of an unknown status, that is the file can either not be determined by the information requested of the file has not yet been received. 
     * @param client_account_id {String} The batch account id that the batch was processed with.
     * @param transactions {Array.<module:model/BatchTransactionResultModel>} 
     */
    constructor(amount, batch_date, batch_id, batch_status, client_account_id, transactions) { 
        
        BatchReportResponseModel.initialize(this, amount, batch_date, batch_id, batch_status, client_account_id, transactions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, batch_date, batch_id, batch_status, client_account_id, transactions) { 
        obj['amount'] = amount;
        obj['batch_date'] = batch_date;
        obj['batch_id'] = batch_id;
        obj['batch_status'] = batch_status;
        obj['client_account_id'] = client_account_id;
        obj['transactions'] = transactions;
    }

    /**
     * Constructs a <code>BatchReportResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchReportResponseModel} obj Optional instance to populate.
     * @return {module:model/BatchReportResponseModel} The populated <code>BatchReportResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchReportResponseModel();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('batch_date')) {
                obj['batch_date'] = ApiClient.convertToType(data['batch_date'], 'Date');
            }
            if (data.hasOwnProperty('batch_id')) {
                obj['batch_id'] = ApiClient.convertToType(data['batch_id'], 'Number');
            }
            if (data.hasOwnProperty('batch_status')) {
                obj['batch_status'] = ApiClient.convertToType(data['batch_status'], 'String');
            }
            if (data.hasOwnProperty('client_account_id')) {
                obj['client_account_id'] = ApiClient.convertToType(data['client_account_id'], 'String');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [BatchTransactionResultModel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BatchReportResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BatchReportResponseModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BatchReportResponseModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['batch_status'] && !(typeof data['batch_status'] === 'string' || data['batch_status'] instanceof String)) {
            throw new Error("Expected the field `batch_status` to be a primitive type in the JSON string but got " + data['batch_status']);
        }
        // ensure the json data is a string
        if (data['client_account_id'] && !(typeof data['client_account_id'] === 'string' || data['client_account_id'] instanceof String)) {
            throw new Error("Expected the field `client_account_id` to be a primitive type in the JSON string but got " + data['client_account_id']);
        }
        if (data['transactions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['transactions'])) {
                throw new Error("Expected the field `transactions` to be an array in the JSON data but got " + data['transactions']);
            }
            // validate the optional field `transactions` (array)
            for (const item of data['transactions']) {
                BatchTransactionResultModel.validateJSON(item);
            };
        }

        return true;
    }


}

BatchReportResponseModel.RequiredProperties = ["amount", "batch_date", "batch_id", "batch_status", "client_account_id", "transactions"];

/**
 * The total amount that the batch contains.
 * @member {Number} amount
 */
BatchReportResponseModel.prototype['amount'] = undefined;

/**
 * The date and time of the batch in ISO-8601 format.
 * @member {Date} batch_date
 */
BatchReportResponseModel.prototype['batch_date'] = undefined;

/**
 * The batch id specified in the batch processing request.
 * @member {Number} batch_id
 */
BatchReportResponseModel.prototype['batch_id'] = undefined;

/**
 * The status of the batch. Possible values are - CANCELLED. The file has been cancelled by an administrator or server process.  - COMPLETE. The file has passed through the processing cycle and is determined as being complete further information should be obtained on the results of the processing - ERROR_IN_PROCESSING. Errors have occurred in the processing that has deemed that processing can not continue. - INITIALISED. The file has been initialised and no action has yet been performed - LOCKED. The file has been locked for processing - QUEUED. The file has been queued for processing yet no processing has yet been performed - UNKNOWN. The file is of an unknown status, that is the file can either not be determined by the information requested of the file has not yet been received. 
 * @member {String} batch_status
 */
BatchReportResponseModel.prototype['batch_status'] = undefined;

/**
 * The batch account id that the batch was processed with.
 * @member {String} client_account_id
 */
BatchReportResponseModel.prototype['client_account_id'] = undefined;

/**
 * @member {Array.<module:model/BatchTransactionResultModel>} transactions
 */
BatchReportResponseModel.prototype['transactions'] = undefined;






export default BatchReportResponseModel;

