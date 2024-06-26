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
import PaylinkAttachmentRequest from './PaylinkAttachmentRequest';
import PaylinkEmailNotificationPath from './PaylinkEmailNotificationPath';
import PaylinkSMSNotificationPath from './PaylinkSMSNotificationPath';
import PaylinkTokenRequestModel from './PaylinkTokenRequestModel';

/**
 * The PaylinkBillPaymentTokenRequest model module.
 * @module model/PaylinkBillPaymentTokenRequest
 */
class PaylinkBillPaymentTokenRequest {
    /**
     * Constructs a new <code>PaylinkBillPaymentTokenRequest</code>.
     * @alias module:model/PaylinkBillPaymentTokenRequest
     * @param request {module:model/PaylinkTokenRequestModel} 
     */
    constructor(request) { 
        
        PaylinkBillPaymentTokenRequest.initialize(this, request);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request) { 
        obj['request'] = request;
    }

    /**
     * Constructs a <code>PaylinkBillPaymentTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaylinkBillPaymentTokenRequest} obj Optional instance to populate.
     * @return {module:model/PaylinkBillPaymentTokenRequest} The populated <code>PaylinkBillPaymentTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaylinkBillPaymentTokenRequest();

            if (data.hasOwnProperty('request')) {
                obj['request'] = PaylinkTokenRequestModel.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('addressee')) {
                obj['addressee'] = ApiClient.convertToType(data['addressee'], 'String');
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [PaylinkAttachmentRequest]);
            }
            if (data.hasOwnProperty('descriptor')) {
                obj['descriptor'] = ApiClient.convertToType(data['descriptor'], 'String');
            }
            if (data.hasOwnProperty('due')) {
                obj['due'] = ApiClient.convertToType(data['due'], 'Date');
            }
            if (data.hasOwnProperty('email_notification_path')) {
                obj['email_notification_path'] = PaylinkEmailNotificationPath.constructFromObject(data['email_notification_path']);
            }
            if (data.hasOwnProperty('memo')) {
                obj['memo'] = ApiClient.convertToType(data['memo'], 'String');
            }
            if (data.hasOwnProperty('sms_notification_path')) {
                obj['sms_notification_path'] = PaylinkSMSNotificationPath.constructFromObject(data['sms_notification_path']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaylinkBillPaymentTokenRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaylinkBillPaymentTokenRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaylinkBillPaymentTokenRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `request`
        if (data['request']) { // data not null
          PaylinkTokenRequestModel.validateJSON(data['request']);
        }
        // ensure the json data is a string
        if (data['addressee'] && !(typeof data['addressee'] === 'string' || data['addressee'] instanceof String)) {
            throw new Error("Expected the field `addressee` to be a primitive type in the JSON string but got " + data['addressee']);
        }
        if (data['attachments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attachments'])) {
                throw new Error("Expected the field `attachments` to be an array in the JSON data but got " + data['attachments']);
            }
            // validate the optional field `attachments` (array)
            for (const item of data['attachments']) {
                PaylinkAttachmentRequest.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['descriptor'] && !(typeof data['descriptor'] === 'string' || data['descriptor'] instanceof String)) {
            throw new Error("Expected the field `descriptor` to be a primitive type in the JSON string but got " + data['descriptor']);
        }
        // validate the optional field `email_notification_path`
        if (data['email_notification_path']) { // data not null
          PaylinkEmailNotificationPath.validateJSON(data['email_notification_path']);
        }
        // ensure the json data is a string
        if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
            throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
        }
        // validate the optional field `sms_notification_path`
        if (data['sms_notification_path']) { // data not null
          PaylinkSMSNotificationPath.validateJSON(data['sms_notification_path']);
        }

        return true;
    }


}

PaylinkBillPaymentTokenRequest.RequiredProperties = ["request"];

/**
 * @member {module:model/PaylinkTokenRequestModel} request
 */
PaylinkBillPaymentTokenRequest.prototype['request'] = undefined;

/**
 * Who the bill payment request intended for. This should be a readable name such as a person or company.
 * @member {String} addressee
 */
PaylinkBillPaymentTokenRequest.prototype['addressee'] = undefined;

/**
 * @member {Array.<module:model/PaylinkAttachmentRequest>} attachments
 */
PaylinkBillPaymentTokenRequest.prototype['attachments'] = undefined;

/**
 * A descriptor for the bill payment used to describe what the payment request is for for instance \"Invoice\".  The descriptor can be used as descriptive text on emails or the payment page. For instance an invoice may have a button saying \"View Invoice\" or an email may say \"to pay your Invoice online\". 
 * @member {String} descriptor
 */
PaylinkBillPaymentTokenRequest.prototype['descriptor'] = undefined;

/**
 * A date that the invoice is due. This can be displayed on the payment page.
 * @member {Date} due
 */
PaylinkBillPaymentTokenRequest.prototype['due'] = undefined;

/**
 * @member {module:model/PaylinkEmailNotificationPath} email_notification_path
 */
PaylinkBillPaymentTokenRequest.prototype['email_notification_path'] = undefined;

/**
 * A memo that can be added to the payment page and email to provide to the customer.
 * @member {String} memo
 */
PaylinkBillPaymentTokenRequest.prototype['memo'] = undefined;

/**
 * @member {module:model/PaylinkSMSNotificationPath} sms_notification_path
 */
PaylinkBillPaymentTokenRequest.prototype['sms_notification_path'] = undefined;






export default PaylinkBillPaymentTokenRequest;

