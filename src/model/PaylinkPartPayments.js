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
 * The PaylinkPartPayments model module.
 * @module model/PaylinkPartPayments
 */
class PaylinkPartPayments {
    /**
     * Constructs a new <code>PaylinkPartPayments</code>.
     * @alias module:model/PaylinkPartPayments
     */
    constructor() { 
        
        PaylinkPartPayments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaylinkPartPayments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaylinkPartPayments} obj Optional instance to populate.
     * @return {module:model/PaylinkPartPayments} The populated <code>PaylinkPartPayments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaylinkPartPayments();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'String');
            }
            if (data.hasOwnProperty('floor')) {
                obj['floor'] = ApiClient.convertToType(data['floor'], 'String');
            }
            if (data.hasOwnProperty('max')) {
                obj['max'] = ApiClient.convertToType(data['max'], 'String');
            }
            if (data.hasOwnProperty('max_rate')) {
                obj['max_rate'] = ApiClient.convertToType(data['max_rate'], 'String');
            }
            if (data.hasOwnProperty('min')) {
                obj['min'] = ApiClient.convertToType(data['min'], 'String');
            }
            if (data.hasOwnProperty('min_rate')) {
                obj['min_rate'] = ApiClient.convertToType(data['min_rate'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaylinkPartPayments</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaylinkPartPayments</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['enabled'] && !(typeof data['enabled'] === 'string' || data['enabled'] instanceof String)) {
            throw new Error("Expected the field `enabled` to be a primitive type in the JSON string but got " + data['enabled']);
        }
        // ensure the json data is a string
        if (data['floor'] && !(typeof data['floor'] === 'string' || data['floor'] instanceof String)) {
            throw new Error("Expected the field `floor` to be a primitive type in the JSON string but got " + data['floor']);
        }
        // ensure the json data is a string
        if (data['max'] && !(typeof data['max'] === 'string' || data['max'] instanceof String)) {
            throw new Error("Expected the field `max` to be a primitive type in the JSON string but got " + data['max']);
        }
        // ensure the json data is a string
        if (data['max_rate'] && !(typeof data['max_rate'] === 'string' || data['max_rate'] instanceof String)) {
            throw new Error("Expected the field `max_rate` to be a primitive type in the JSON string but got " + data['max_rate']);
        }
        // ensure the json data is a string
        if (data['min'] && !(typeof data['min'] === 'string' || data['min'] instanceof String)) {
            throw new Error("Expected the field `min` to be a primitive type in the JSON string but got " + data['min']);
        }
        // ensure the json data is a string
        if (data['min_rate'] && !(typeof data['min_rate'] === 'string' || data['min_rate'] instanceof String)) {
            throw new Error("Expected the field `min_rate` to be a primitive type in the JSON string but got " + data['min_rate']);
        }

        return true;
    }


}



/**
 * Determines if part payments is enabled. Default is false.
 * @member {String} enabled
 */
PaylinkPartPayments.prototype['enabled'] = undefined;

/**
 * The floor amount specifies a value that the minimum rate cannot go under. If 0 the amount of min rate is applied.
 * @member {String} floor
 */
PaylinkPartPayments.prototype['floor'] = undefined;

/**
 * a maximum percentage to charge i.e. 90%.
 * @member {String} max
 */
PaylinkPartPayments.prototype['max'] = undefined;

/**
 * a rate as fixed or percentage.
 * @member {String} max_rate
 */
PaylinkPartPayments.prototype['max_rate'] = undefined;

/**
 * a minimum percentage to charge i.e. 10.
 * @member {String} min
 */
PaylinkPartPayments.prototype['min'] = undefined;

/**
 * a rate as fixed or percentage.
 * @member {String} min_rate
 */
PaylinkPartPayments.prototype['min_rate'] = undefined;






export default PaylinkPartPayments;

