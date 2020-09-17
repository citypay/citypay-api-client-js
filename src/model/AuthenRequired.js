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
 * The AuthenRequired model module.
 * @module model/AuthenRequired
 */
class AuthenRequired {
    /**
     * Constructs a new <code>AuthenRequired</code>.
     * @alias module:model/AuthenRequired
     */
    constructor() { 
        
        AuthenRequired.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthenRequired</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthenRequired} obj Optional instance to populate.
     * @return {module:model/AuthenRequired} The populated <code>AuthenRequired</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenRequired();

            if (data.hasOwnProperty('acs_url')) {
                obj['acs_url'] = ApiClient.convertToType(data['acs_url'], 'String');
            }
            if (data.hasOwnProperty('md')) {
                obj['md'] = ApiClient.convertToType(data['md'], 'String');
            }
            if (data.hasOwnProperty('pareq')) {
                obj['pareq'] = ApiClient.convertToType(data['pareq'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The url of the Access Control Server (ACS) to forward the user to. 
 * @member {String} acs_url
 */
AuthenRequired.prototype['acs_url'] = undefined;

/**
 * Merchant Data (MD) which should be sent to the ACS to establish and reference the authentication session. 
 * @member {String} md
 */
AuthenRequired.prototype['md'] = undefined;

/**
 * The Payer Authentication Request packet which should be `POSTed` to the Url of the ACS to establish the authentication session. Data should be sent untouched. 
 * @member {String} pareq
 */
AuthenRequired.prototype['pareq'] = undefined;






export default AuthenRequired;

