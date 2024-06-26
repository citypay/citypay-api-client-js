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

