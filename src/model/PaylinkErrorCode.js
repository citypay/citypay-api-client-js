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
 * The PaylinkErrorCode model module.
 * @module model/PaylinkErrorCode
 */
class PaylinkErrorCode {
    /**
     * Constructs a new <code>PaylinkErrorCode</code>.
     * @alias module:model/PaylinkErrorCode
     * @param code {String} An error code identifying the error.
     * @param msg {String} An error message describing the error.
     */
    constructor(code, msg) { 
        
        PaylinkErrorCode.initialize(this, code, msg);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, msg) { 
        obj['code'] = code;
        obj['msg'] = msg;
    }

    /**
     * Constructs a <code>PaylinkErrorCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaylinkErrorCode} obj Optional instance to populate.
     * @return {module:model/PaylinkErrorCode} The populated <code>PaylinkErrorCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaylinkErrorCode();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaylinkErrorCode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaylinkErrorCode</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaylinkErrorCode.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['msg'] && !(typeof data['msg'] === 'string' || data['msg'] instanceof String)) {
            throw new Error("Expected the field `msg` to be a primitive type in the JSON string but got " + data['msg']);
        }

        return true;
    }


}

PaylinkErrorCode.RequiredProperties = ["code", "msg"];

/**
 * An error code identifying the error.
 * @member {String} code
 */
PaylinkErrorCode.prototype['code'] = undefined;

/**
 * An error message describing the error.
 * @member {String} msg
 */
PaylinkErrorCode.prototype['msg'] = undefined;






export default PaylinkErrorCode;

