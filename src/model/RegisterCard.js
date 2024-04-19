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
 * The RegisterCard model module.
 * @module model/RegisterCard
 */
class RegisterCard {
    /**
     * Constructs a new <code>RegisterCard</code>.
     * @alias module:model/RegisterCard
     * @param cardnumber {String} The primary number of the card.
     * @param expmonth {Number} The expiry month of the card.
     * @param expyear {Number} The expiry year of the card.
     */
    constructor(cardnumber, expmonth, expyear) { 
        
        RegisterCard.initialize(this, cardnumber, expmonth, expyear);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cardnumber, expmonth, expyear) { 
        obj['cardnumber'] = cardnumber;
        obj['expmonth'] = expmonth;
        obj['expyear'] = expyear;
    }

    /**
     * Constructs a <code>RegisterCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterCard} obj Optional instance to populate.
     * @return {module:model/RegisterCard} The populated <code>RegisterCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterCard();

            if (data.hasOwnProperty('cardnumber')) {
                obj['cardnumber'] = ApiClient.convertToType(data['cardnumber'], 'String');
            }
            if (data.hasOwnProperty('expmonth')) {
                obj['expmonth'] = ApiClient.convertToType(data['expmonth'], 'Number');
            }
            if (data.hasOwnProperty('expyear')) {
                obj['expyear'] = ApiClient.convertToType(data['expyear'], 'Number');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('name_on_card')) {
                obj['name_on_card'] = ApiClient.convertToType(data['name_on_card'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RegisterCard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RegisterCard</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RegisterCard.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cardnumber'] && !(typeof data['cardnumber'] === 'string' || data['cardnumber'] instanceof String)) {
            throw new Error("Expected the field `cardnumber` to be a primitive type in the JSON string but got " + data['cardnumber']);
        }
        // ensure the json data is a string
        if (data['name_on_card'] && !(typeof data['name_on_card'] === 'string' || data['name_on_card'] instanceof String)) {
            throw new Error("Expected the field `name_on_card` to be a primitive type in the JSON string but got " + data['name_on_card']);
        }

        return true;
    }


}

RegisterCard.RequiredProperties = ["cardnumber", "expmonth", "expyear"];

/**
 * The primary number of the card.
 * @member {String} cardnumber
 */
RegisterCard.prototype['cardnumber'] = undefined;

/**
 * The expiry month of the card.
 * @member {Number} expmonth
 */
RegisterCard.prototype['expmonth'] = undefined;

/**
 * The expiry year of the card.
 * @member {Number} expyear
 */
RegisterCard.prototype['expyear'] = undefined;

/**
 * Determines whether the card should be the new default card.
 * @member {Boolean} default
 */
RegisterCard.prototype['default'] = undefined;

/**
 * The card holder name as it appears on the card. The value is required if the account is to be used for 3dsv2 processing, otherwise it is optional.
 * @member {String} name_on_card
 */
RegisterCard.prototype['name_on_card'] = undefined;






export default RegisterCard;

