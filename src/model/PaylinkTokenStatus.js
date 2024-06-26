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
import PaylinkStateEvent from './PaylinkStateEvent';

/**
 * The PaylinkTokenStatus model module.
 * @module model/PaylinkTokenStatus
 */
class PaylinkTokenStatus {
    /**
     * Constructs a new <code>PaylinkTokenStatus</code>.
     * @alias module:model/PaylinkTokenStatus
     */
    constructor() { 
        
        PaylinkTokenStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaylinkTokenStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaylinkTokenStatus} obj Optional instance to populate.
     * @return {module:model/PaylinkTokenStatus} The populated <code>PaylinkTokenStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaylinkTokenStatus();

            if (data.hasOwnProperty('amount_paid')) {
                obj['amount_paid'] = ApiClient.convertToType(data['amount_paid'], 'Number');
            }
            if (data.hasOwnProperty('auth_code')) {
                obj['auth_code'] = ApiClient.convertToType(data['auth_code'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = ApiClient.convertToType(data['card'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('is_attachment')) {
                obj['is_attachment'] = ApiClient.convertToType(data['is_attachment'], 'Boolean');
            }
            if (data.hasOwnProperty('is_cancelled')) {
                obj['is_cancelled'] = ApiClient.convertToType(data['is_cancelled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_closed')) {
                obj['is_closed'] = ApiClient.convertToType(data['is_closed'], 'Boolean');
            }
            if (data.hasOwnProperty('is_customer_receipt_email_sent')) {
                obj['is_customer_receipt_email_sent'] = ApiClient.convertToType(data['is_customer_receipt_email_sent'], 'Boolean');
            }
            if (data.hasOwnProperty('is_email_sent')) {
                obj['is_email_sent'] = ApiClient.convertToType(data['is_email_sent'], 'Boolean');
            }
            if (data.hasOwnProperty('is_expired')) {
                obj['is_expired'] = ApiClient.convertToType(data['is_expired'], 'Boolean');
            }
            if (data.hasOwnProperty('is_form_viewed')) {
                obj['is_form_viewed'] = ApiClient.convertToType(data['is_form_viewed'], 'Boolean');
            }
            if (data.hasOwnProperty('is_merchant_notification_email_sent')) {
                obj['is_merchant_notification_email_sent'] = ApiClient.convertToType(data['is_merchant_notification_email_sent'], 'Boolean');
            }
            if (data.hasOwnProperty('is_open_for_payment')) {
                obj['is_open_for_payment'] = ApiClient.convertToType(data['is_open_for_payment'], 'Boolean');
            }
            if (data.hasOwnProperty('is_paid')) {
                obj['is_paid'] = ApiClient.convertToType(data['is_paid'], 'Boolean');
            }
            if (data.hasOwnProperty('is_payment_attempted')) {
                obj['is_payment_attempted'] = ApiClient.convertToType(data['is_payment_attempted'], 'Boolean');
            }
            if (data.hasOwnProperty('is_postback_ok')) {
                obj['is_postback_ok'] = ApiClient.convertToType(data['is_postback_ok'], 'Boolean');
            }
            if (data.hasOwnProperty('is_request_challenged')) {
                obj['is_request_challenged'] = ApiClient.convertToType(data['is_request_challenged'], 'Boolean');
            }
            if (data.hasOwnProperty('is_sms_sent')) {
                obj['is_sms_sent'] = ApiClient.convertToType(data['is_sms_sent'], 'Boolean');
            }
            if (data.hasOwnProperty('is_validated')) {
                obj['is_validated'] = ApiClient.convertToType(data['is_validated'], 'Boolean');
            }
            if (data.hasOwnProperty('last_event_date_time')) {
                obj['last_event_date_time'] = ApiClient.convertToType(data['last_event_date_time'], 'Date');
            }
            if (data.hasOwnProperty('last_payment_result')) {
                obj['last_payment_result'] = ApiClient.convertToType(data['last_payment_result'], 'String');
            }
            if (data.hasOwnProperty('mid')) {
                obj['mid'] = ApiClient.convertToType(data['mid'], 'Number');
            }
            if (data.hasOwnProperty('payment_attempts_count')) {
                obj['payment_attempts_count'] = ApiClient.convertToType(data['payment_attempts_count'], 'Number');
            }
            if (data.hasOwnProperty('state_history')) {
                obj['state_history'] = ApiClient.convertToType(data['state_history'], [PaylinkStateEvent]);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('trans_no')) {
                obj['trans_no'] = ApiClient.convertToType(data['trans_no'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaylinkTokenStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaylinkTokenStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['auth_code'] && !(typeof data['auth_code'] === 'string' || data['auth_code'] instanceof String)) {
            throw new Error("Expected the field `auth_code` to be a primitive type in the JSON string but got " + data['auth_code']);
        }
        // ensure the json data is a string
        if (data['card'] && !(typeof data['card'] === 'string' || data['card'] instanceof String)) {
            throw new Error("Expected the field `card` to be a primitive type in the JSON string but got " + data['card']);
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['last_payment_result'] && !(typeof data['last_payment_result'] === 'string' || data['last_payment_result'] instanceof String)) {
            throw new Error("Expected the field `last_payment_result` to be a primitive type in the JSON string but got " + data['last_payment_result']);
        }
        if (data['state_history']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['state_history'])) {
                throw new Error("Expected the field `state_history` to be an array in the JSON data but got " + data['state_history']);
            }
            // validate the optional field `state_history` (array)
            for (const item of data['state_history']) {
                PaylinkStateEvent.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}



/**
 * the amount that has been paid against the session.
 * @member {Number} amount_paid
 */
PaylinkTokenStatus.prototype['amount_paid'] = undefined;

/**
 * an authorisation code if the transaction was processed and isPaid is true.
 * @member {String} auth_code
 */
PaylinkTokenStatus.prototype['auth_code'] = undefined;

/**
 * a description of the card that was used for payment if paid.
 * @member {String} card
 */
PaylinkTokenStatus.prototype['card'] = undefined;

/**
 * the date and time that the session was created.
 * @member {Date} created
 */
PaylinkTokenStatus.prototype['created'] = undefined;

/**
 * the date and time of the current status.
 * @member {Date} datetime
 */
PaylinkTokenStatus.prototype['datetime'] = undefined;

/**
 * the merchant identifier, to help identifying the token.
 * @member {String} identifier
 */
PaylinkTokenStatus.prototype['identifier'] = undefined;

/**
 * true if an attachment exists.
 * @member {Boolean} is_attachment
 */
PaylinkTokenStatus.prototype['is_attachment'] = undefined;

/**
 * true if the session was cancelled either by the user or by a system request.
 * @member {Boolean} is_cancelled
 */
PaylinkTokenStatus.prototype['is_cancelled'] = undefined;

/**
 * true if the token has been closed.
 * @member {Boolean} is_closed
 */
PaylinkTokenStatus.prototype['is_closed'] = undefined;

/**
 * true if a customer receipt has been sent.
 * @member {Boolean} is_customer_receipt_email_sent
 */
PaylinkTokenStatus.prototype['is_customer_receipt_email_sent'] = undefined;

/**
 * true if an email was sent.
 * @member {Boolean} is_email_sent
 */
PaylinkTokenStatus.prototype['is_email_sent'] = undefined;

/**
 * true if the session has expired.
 * @member {Boolean} is_expired
 */
PaylinkTokenStatus.prototype['is_expired'] = undefined;

/**
 * true if the form was ever displayed to the addressee.
 * @member {Boolean} is_form_viewed
 */
PaylinkTokenStatus.prototype['is_form_viewed'] = undefined;

/**
 * true if a merchant notification receipt was sent.
 * @member {Boolean} is_merchant_notification_email_sent
 */
PaylinkTokenStatus.prototype['is_merchant_notification_email_sent'] = undefined;

/**
 * true if the session is still open for payment or false if it has been closed.
 * @member {Boolean} is_open_for_payment
 */
PaylinkTokenStatus.prototype['is_open_for_payment'] = undefined;

/**
 * whether the session has been paid and therefore can be considered as complete.
 * @member {Boolean} is_paid
 */
PaylinkTokenStatus.prototype['is_paid'] = undefined;

/**
 * true if payment has been attempted.
 * @member {Boolean} is_payment_attempted
 */
PaylinkTokenStatus.prototype['is_payment_attempted'] = undefined;

/**
 * true if a post back was executed successfully.
 * @member {Boolean} is_postback_ok
 */
PaylinkTokenStatus.prototype['is_postback_ok'] = undefined;

/**
 * true if the request has been challenged using 3-D Secure.
 * @member {Boolean} is_request_challenged
 */
PaylinkTokenStatus.prototype['is_request_challenged'] = undefined;

/**
 * true if an SMS was sent.
 * @member {Boolean} is_sms_sent
 */
PaylinkTokenStatus.prototype['is_sms_sent'] = undefined;

/**
 * whether the token generation was successfully validated.
 * @member {Boolean} is_validated
 */
PaylinkTokenStatus.prototype['is_validated'] = undefined;

/**
 * the date and time that the session last had an event actioned against it.
 * @member {Date} last_event_date_time
 */
PaylinkTokenStatus.prototype['last_event_date_time'] = undefined;

/**
 * the result of the last payment if one exists.
 * @member {String} last_payment_result
 */
PaylinkTokenStatus.prototype['last_payment_result'] = undefined;

/**
 * identifies the merchant account.
 * @member {Number} mid
 */
PaylinkTokenStatus.prototype['mid'] = undefined;

/**
 * the number of attempts made to pay.
 * @member {Number} payment_attempts_count
 */
PaylinkTokenStatus.prototype['payment_attempts_count'] = undefined;

/**
 * @member {Array.<module:model/PaylinkStateEvent>} state_history
 */
PaylinkTokenStatus.prototype['state_history'] = undefined;

/**
 * the token value which uniquely identifies the session.
 * @member {String} token
 */
PaylinkTokenStatus.prototype['token'] = undefined;

/**
 * a transaction number if the transacstion was processed and isPaid is true.
 * @member {Number} trans_no
 */
PaylinkTokenStatus.prototype['trans_no'] = undefined;






export default PaylinkTokenStatus;

