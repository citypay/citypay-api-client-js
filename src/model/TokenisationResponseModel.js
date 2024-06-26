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
 * The TokenisationResponseModel model module.
 * @module model/TokenisationResponseModel
 */
class TokenisationResponseModel {
    /**
     * Constructs a new <code>TokenisationResponseModel</code>.
     * @alias module:model/TokenisationResponseModel
     */
    constructor() { 
        
        TokenisationResponseModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenisationResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenisationResponseModel} obj Optional instance to populate.
     * @return {module:model/TokenisationResponseModel} The populated <code>TokenisationResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenisationResponseModel();

            if (data.hasOwnProperty('authen_result')) {
                obj['authen_result'] = ApiClient.convertToType(data['authen_result'], 'String');
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
            if (data.hasOwnProperty('eci')) {
                obj['eci'] = ApiClient.convertToType(data['eci'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('maskedpan')) {
                obj['maskedpan'] = ApiClient.convertToType(data['maskedpan'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
            if (data.hasOwnProperty('sig_id')) {
                obj['sig_id'] = ApiClient.convertToType(data['sig_id'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenisationResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenisationResponseModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['authen_result'] && !(typeof data['authen_result'] === 'string' || data['authen_result'] instanceof String)) {
            throw new Error("Expected the field `authen_result` to be a primitive type in the JSON string but got " + data['authen_result']);
        }
        // ensure the json data is a string
        if (data['bin_description'] && !(typeof data['bin_description'] === 'string' || data['bin_description'] instanceof String)) {
            throw new Error("Expected the field `bin_description` to be a primitive type in the JSON string but got " + data['bin_description']);
        }
        // ensure the json data is a string
        if (data['eci'] && !(typeof data['eci'] === 'string' || data['eci'] instanceof String)) {
            throw new Error("Expected the field `eci` to be a primitive type in the JSON string but got " + data['eci']);
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
        if (data['scheme'] && !(typeof data['scheme'] === 'string' || data['scheme'] instanceof String)) {
            throw new Error("Expected the field `scheme` to be a primitive type in the JSON string but got " + data['scheme']);
        }
        // ensure the json data is a string
        if (data['sig_id'] && !(typeof data['sig_id'] === 'string' || data['sig_id'] instanceof String)) {
            throw new Error("Expected the field `sig_id` to be a primitive type in the JSON string but got " + data['sig_id']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}



/**
 * The result of any authentication using 3d_secure authorisation against ecommerce transactions. Values are:  <table> <tr> <th>Value</th> <th>Description</th> </tr> <tr> <td>Y</td> <td>Authentication Successful. The Cardholder's password was successfully validated.</td> </tr> <tr> <td>N</td> <td>Authentication Failed. Customer failed or cancelled authentication, transaction denied.</td> </tr> <tr> <td>A</td> <td>Attempts Processing Performed Authentication could not be completed but a proof of authentication attempt (CAVV) was generated.</td> </tr> <tr> <td>U</td> <td>Authentication Could Not Be Performed Authentication could not be completed, due to technical or other problem.</td> </tr> </table> 
 * @member {String} authen_result
 */
TokenisationResponseModel.prototype['authen_result'] = undefined;

/**
 * Determines whether the bin range was found to be a commercial or business card.
 * @member {Boolean} bin_commercial
 */
TokenisationResponseModel.prototype['bin_commercial'] = undefined;

/**
 * Determines whether the bin range was found to be a debit card. If false the card was considered as a credit card.
 * @member {Boolean} bin_debit
 */
TokenisationResponseModel.prototype['bin_debit'] = undefined;

/**
 * A description of the bin range found for the card.
 * @member {String} bin_description
 */
TokenisationResponseModel.prototype['bin_description'] = undefined;

/**
 * An Electronic Commerce Indicator (ECI) used to identify the result of authentication using 3DSecure. 
 * @member {String} eci
 */
TokenisationResponseModel.prototype['eci'] = undefined;

/**
 * The identifier provided within the request.
 * @member {String} identifier
 */
TokenisationResponseModel.prototype['identifier'] = undefined;

/**
 * A masked value of the card number used for processing displaying limited values that can be used on a receipt. 
 * @member {String} maskedpan
 */
TokenisationResponseModel.prototype['maskedpan'] = undefined;

/**
 * The name of the card scheme of the transaction that processed the transaction such as Visa or MasterCard. 
 * @member {String} scheme
 */
TokenisationResponseModel.prototype['scheme'] = undefined;

/**
 * A Base58 encoded SHA-256 digest generated from the token value Base58 decoded and appended with the nonce value UTF-8 decoded.
 * @member {String} sig_id
 */
TokenisationResponseModel.prototype['sig_id'] = undefined;

/**
 * The token used for presentment to authorisation later in the processing flow.
 * @member {String} token
 */
TokenisationResponseModel.prototype['token'] = undefined;






export default TokenisationResponseModel;

