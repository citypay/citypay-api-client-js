/**
 * CityPay Payment API
 *  Welcome to the CityPay API, a robust HTTP API payment solution designed for seamless server-to-server  transactional processing. Our API facilitates a wide array of payment operations, catering to diverse business needs.  Whether you're integrating Internet payments, handling Mail Order/Telephone Order (MOTO) transactions, managing  Subscriptions with Recurring and Continuous Authority payments, or navigating the complexities of 3-D Secure  authentication, our API is equipped to support your requirements. Additionally, we offer functionalities for  Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids, and Completion processing, alongside the capability  for tokenised payments.  ## Compliance and Security Overview <aside class=\"notice\">   Ensuring the security of payment transactions and compliance with industry standards is paramount. Our API is    designed with stringent security measures and compliance protocols to safeguard sensitive information and meet    the rigorous requirements of Visa, MasterCard, and the PCI Security Standards Council. </aside>  ### Key Compliance and Security Measures  * **TLS Encryption**: All data transmissions must utilise TLS version 1.2 or higher, employing [strong cryptography](#enabled-tls-ciphers). Our infrastructure strictly enforces this requirement to maintain the integrity and confidentiality of data in transit. We conduct regular scans and assessments of our TLS endpoints to identify and mitigate vulnerabilities. * **Data Storage Prohibitions**: Storing sensitive cardholder data (CHD), such as the card security code (CSC) or primary account number (PAN), is strictly prohibited. Our API is designed to minimize your exposure to sensitive data, thereby reducing your compliance burden. * **Data Masking**: For consumer protection and compliance, full card numbers must not be displayed on receipts or any customer-facing materials. Our API automatically masks PANs, displaying only the last four digits to facilitate safe receipt generation. * **Network Scans**: If your application is web-based, regular scans of your hosting environment are mandatory to identify and rectify potential vulnerabilities. This proactive measure is crucial for maintaining a secure and compliant online presence. * **PCI Compliance**: Adherence to PCI DSS standards is not optional; it's a requirement for operating securely and legally in the payments ecosystem. For detailed information on compliance requirements and resources, please visit the PCI Security Standards Council website [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/). * **Request Validation**: Our API includes mechanisms to verify the legitimacy of each request, ensuring it pertains to a valid account and originates from a trusted source. We leverage remote IP address verification alongside sophisticated application firewall technologies to thwart a wide array of common security threats.  ## Getting Started Before integrating with the CityPay API, ensure your application and development practices align with the outlined compliance and security measures. This preparatory step is crucial for a smooth integration process and the long-term success of your payment processing operations.  For further details on API endpoints, request/response formats, and code examples, proceed to the subsequent sections of our documentation. Our aim is to provide you with all the necessary tools and information to integrate our payment processing capabilities seamlessly into your application.  Thank you for choosing CityPay API. We look forward to supporting your payment processing needs with our secure, compliant, and versatile API solution. 
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
 * The AuthReference model module.
 * @module model/AuthReference
 */
class AuthReference {
    /**
     * Constructs a new <code>AuthReference</code>.
     * @alias module:model/AuthReference
     */
    constructor() { 
        
        AuthReference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthReference} obj Optional instance to populate.
     * @return {module:model/AuthReference} The populated <code>AuthReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthReference();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('amount_value')) {
                obj['amount_value'] = ApiClient.convertToType(data['amount_value'], 'Number');
            }
            if (data.hasOwnProperty('atrn')) {
                obj['atrn'] = ApiClient.convertToType(data['atrn'], 'String');
            }
            if (data.hasOwnProperty('authcode')) {
                obj['authcode'] = ApiClient.convertToType(data['authcode'], 'String');
            }
            if (data.hasOwnProperty('batchno')) {
                obj['batchno'] = ApiClient.convertToType(data['batchno'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('maskedpan')) {
                obj['maskedpan'] = ApiClient.convertToType(data['maskedpan'], 'String');
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
            if (data.hasOwnProperty('trans_status')) {
                obj['trans_status'] = ApiClient.convertToType(data['trans_status'], 'String');
            }
            if (data.hasOwnProperty('trans_type')) {
                obj['trans_type'] = ApiClient.convertToType(data['trans_type'], 'String');
            }
            if (data.hasOwnProperty('transno')) {
                obj['transno'] = ApiClient.convertToType(data['transno'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthReference</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['atrn'] && !(typeof data['atrn'] === 'string' || data['atrn'] instanceof String)) {
            throw new Error("Expected the field `atrn` to be a primitive type in the JSON string but got " + data['atrn']);
        }
        // ensure the json data is a string
        if (data['authcode'] && !(typeof data['authcode'] === 'string' || data['authcode'] instanceof String)) {
            throw new Error("Expected the field `authcode` to be a primitive type in the JSON string but got " + data['authcode']);
        }
        // ensure the json data is a string
        if (data['batchno'] && !(typeof data['batchno'] === 'string' || data['batchno'] instanceof String)) {
            throw new Error("Expected the field `batchno` to be a primitive type in the JSON string but got " + data['batchno']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['maskedpan'] && !(typeof data['maskedpan'] === 'string' || data['maskedpan'] instanceof String)) {
            throw new Error("Expected the field `maskedpan` to be a primitive type in the JSON string but got " + data['maskedpan']);
        }
        // ensure the json data is a string
        if (data['result'] && !(typeof data['result'] === 'string' || data['result'] instanceof String)) {
            throw new Error("Expected the field `result` to be a primitive type in the JSON string but got " + data['result']);
        }
        // ensure the json data is a string
        if (data['trans_status'] && !(typeof data['trans_status'] === 'string' || data['trans_status'] instanceof String)) {
            throw new Error("Expected the field `trans_status` to be a primitive type in the JSON string but got " + data['trans_status']);
        }
        // ensure the json data is a string
        if (data['trans_type'] && !(typeof data['trans_type'] === 'string' || data['trans_type'] instanceof String)) {
            throw new Error("Expected the field `trans_type` to be a primitive type in the JSON string but got " + data['trans_type']);
        }

        return true;
    }


}



/**
 * The amount of the transaction in decimal currency format.
 * @member {String} amount
 */
AuthReference.prototype['amount'] = undefined;

/**
 * The amount of the transaction in integer/request format.
 * @member {Number} amount_value
 */
AuthReference.prototype['amount_value'] = undefined;

/**
 * A reference number provided by the acquiring services.
 * @member {String} atrn
 */
AuthReference.prototype['atrn'] = undefined;

/**
 * The authorisation code of the transaction returned by the acquirer or card issuer.
 * @member {String} authcode
 */
AuthReference.prototype['authcode'] = undefined;

/**
 * A batch number which the transaction has been end of day batched towards.
 * @member {String} batchno
 */
AuthReference.prototype['batchno'] = undefined;

/**
 * The currency of the transaction in ISO 4217 code format.
 * @member {String} currency
 */
AuthReference.prototype['currency'] = undefined;

/**
 * The date and time of the transaction.
 * @member {Date} datetime
 */
AuthReference.prototype['datetime'] = undefined;

/**
 * The identifier of the transaction used to process the transaction.
 * @member {String} identifier
 */
AuthReference.prototype['identifier'] = undefined;

/**
 * A masking of the card number which was used to process the tranasction.
 * @member {String} maskedpan
 */
AuthReference.prototype['maskedpan'] = undefined;

/**
 * The merchant id of the transaction result.
 * @member {Number} merchantid
 */
AuthReference.prototype['merchantid'] = undefined;

/**
 * The result of the transaction.
 * @member {String} result
 */
AuthReference.prototype['result'] = undefined;

/**
 * The current status of the transaction through it's lifecycle.
 * @member {String} trans_status
 */
AuthReference.prototype['trans_status'] = undefined;

/**
 * The type of transaction that was processed.
 * @member {String} trans_type
 */
AuthReference.prototype['trans_type'] = undefined;

/**
 * The transaction number of the transaction.
 * @member {Number} transno
 */
AuthReference.prototype['transno'] = undefined;






export default AuthReference;

