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
import ContactDetails from './ContactDetails';

/**
 * The AccountCreate model module.
 * @module model/AccountCreate
 */
class AccountCreate {
    /**
     * Constructs a new <code>AccountCreate</code>.
     * @alias module:model/AccountCreate
     * @param account_id {String} A card holder account id used for uniquely identifying the account. This value will be used for future referencing of the account oand to link your system to this API. This value is immutable and never changes. 
     */
    constructor(account_id) { 
        
        AccountCreate.initialize(this, account_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, account_id) { 
        obj['account_id'] = account_id;
    }

    /**
     * Constructs a <code>AccountCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountCreate} obj Optional instance to populate.
     * @return {module:model/AccountCreate} The populated <code>AccountCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountCreate();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ContactDetails.constructFromObject(data['contact']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AccountCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['account_id'] && !(typeof data['account_id'] === 'string' || data['account_id'] instanceof String)) {
            throw new Error("Expected the field `account_id` to be a primitive type in the JSON string but got " + data['account_id']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          ContactDetails.validateJSON(data['contact']);
        }

        return true;
    }


}

AccountCreate.RequiredProperties = ["account_id"];

/**
 * A card holder account id used for uniquely identifying the account. This value will be used for future referencing of the account oand to link your system to this API. This value is immutable and never changes. 
 * @member {String} account_id
 */
AccountCreate.prototype['account_id'] = undefined;

/**
 * @member {module:model/ContactDetails} contact
 */
AccountCreate.prototype['contact'] = undefined;






export default AccountCreate;

