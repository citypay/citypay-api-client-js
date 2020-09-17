/**
 * CityPay Payment API
 *  This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.  ## Compliance and Security <aside class=\"notice\">   Before we begin a reminder that your application will need to adhere to PCI-DSS standards to operate safely   and to meet requirements set out by Visa and MasterCard and the PCI Security Standards Council including: </aside>  * Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities. 
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
 * The ContactDetails model module.
 * @module model/ContactDetails
 */
class ContactDetails {
    /**
     * Constructs a new <code>ContactDetails</code>.
     * @alias module:model/ContactDetails
     */
    constructor() { 
        
        ContactDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactDetails} obj Optional instance to populate.
     * @return {module:model/ContactDetails} The populated <code>ContactDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactDetails();

            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('address3')) {
                obj['address3'] = ApiClient.convertToType(data['address3'], 'String');
            }
            if (data.hasOwnProperty('area')) {
                obj['area'] = ApiClient.convertToType(data['area'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('mobile_no')) {
                obj['mobile_no'] = ApiClient.convertToType(data['mobile_no'], 'String');
            }
            if (data.hasOwnProperty('postcode')) {
                obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
            }
            if (data.hasOwnProperty('telephone_no')) {
                obj['telephone_no'] = ApiClient.convertToType(data['telephone_no'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The first line of the address for the card holder.
 * @member {String} address1
 */
ContactDetails.prototype['address1'] = undefined;

/**
 * The second line of the address for the card holder.
 * @member {String} address2
 */
ContactDetails.prototype['address2'] = undefined;

/**
 * The third line of the address for the card holder.
 * @member {String} address3
 */
ContactDetails.prototype['address3'] = undefined;

/**
 * The area such as city, department, parish for the card holder.
 * @member {String} area
 */
ContactDetails.prototype['area'] = undefined;

/**
 * The company name for the card holder if the contact is a corporate contact.
 * @member {String} company
 */
ContactDetails.prototype['company'] = undefined;

/**
 * The country code in ISO 3166 format. The country value may be used for fraud analysis and for   acceptance of the transaction. 
 * @member {String} country
 */
ContactDetails.prototype['country'] = undefined;

/**
 * An email address for the card holder which may be used for correspondence.
 * @member {String} email
 */
ContactDetails.prototype['email'] = undefined;

/**
 * The first name  of the card holder.
 * @member {String} firstname
 */
ContactDetails.prototype['firstname'] = undefined;

/**
 * The last name or surname of the card holder.
 * @member {String} lastname
 */
ContactDetails.prototype['lastname'] = undefined;

/**
 * A mobile number for the card holder the mobile number is often required by delivery companies to ensure they are able to be in contact when required.
 * @member {String} mobile_no
 */
ContactDetails.prototype['mobile_no'] = undefined;

/**
 * The postcode or zip code of the address which may be used for fraud analysis.
 * @member {String} postcode
 */
ContactDetails.prototype['postcode'] = undefined;

/**
 * A telephone number for the card holder.
 * @member {String} telephone_no
 */
ContactDetails.prototype['telephone_no'] = undefined;

/**
 * A title for the card holder such as Mr, Mrs, Ms, M. Mme. etc.
 * @member {String} title
 */
ContactDetails.prototype['title'] = undefined;






export default ContactDetails;

