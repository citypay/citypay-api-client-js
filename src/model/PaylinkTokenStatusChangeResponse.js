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
import PaylinkTokenStatus from './PaylinkTokenStatus';

/**
 * The PaylinkTokenStatusChangeResponse model module.
 * @module model/PaylinkTokenStatusChangeResponse
 */
class PaylinkTokenStatusChangeResponse {
    /**
     * Constructs a new <code>PaylinkTokenStatusChangeResponse</code>.
     * @alias module:model/PaylinkTokenStatusChangeResponse
     * @param tokens {Array.<module:model/PaylinkTokenStatus>} 
     */
    constructor(tokens) { 
        
        PaylinkTokenStatusChangeResponse.initialize(this, tokens);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tokens) { 
        obj['tokens'] = tokens;
    }

    /**
     * Constructs a <code>PaylinkTokenStatusChangeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaylinkTokenStatusChangeResponse} obj Optional instance to populate.
     * @return {module:model/PaylinkTokenStatusChangeResponse} The populated <code>PaylinkTokenStatusChangeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaylinkTokenStatusChangeResponse();

            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], [PaylinkTokenStatus]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('nextToken')) {
                obj['nextToken'] = ApiClient.convertToType(data['nextToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaylinkTokenStatusChangeResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaylinkTokenStatusChangeResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaylinkTokenStatusChangeResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['tokens']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tokens'])) {
                throw new Error("Expected the field `tokens` to be an array in the JSON data but got " + data['tokens']);
            }
            // validate the optional field `tokens` (array)
            for (const item of data['tokens']) {
                PaylinkTokenStatus.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nextToken'] && !(typeof data['nextToken'] === 'string' || data['nextToken'] instanceof String)) {
            throw new Error("Expected the field `nextToken` to be a primitive type in the JSON string but got " + data['nextToken']);
        }

        return true;
    }


}

PaylinkTokenStatusChangeResponse.RequiredProperties = ["tokens"];

/**
 * @member {Array.<module:model/PaylinkTokenStatus>} tokens
 */
PaylinkTokenStatusChangeResponse.prototype['tokens'] = undefined;

/**
 * The count of items returned in this page.
 * @member {Number} count
 */
PaylinkTokenStatusChangeResponse.prototype['count'] = undefined;

/**
 * The max results requested in this page.
 * @member {Number} maxResults
 */
PaylinkTokenStatusChangeResponse.prototype['maxResults'] = undefined;

/**
 * A token that identifies the starting point of the page of results to be returned. An empty value indicates the start of the dataset. When supplied, it is validated and used to fetch the subsequent page of results. This token is typically obtained from the response of a previous pagination request.
 * @member {String} nextToken
 */
PaylinkTokenStatusChangeResponse.prototype['nextToken'] = undefined;






export default PaylinkTokenStatusChangeResponse;

