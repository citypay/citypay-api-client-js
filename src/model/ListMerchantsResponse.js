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
import Merchant from './Merchant';

/**
 * The ListMerchantsResponse model module.
 * @module model/ListMerchantsResponse
 */
class ListMerchantsResponse {
    /**
     * Constructs a new <code>ListMerchantsResponse</code>.
     * @alias module:model/ListMerchantsResponse
     */
    constructor() { 
        
        ListMerchantsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMerchantsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMerchantsResponse} obj Optional instance to populate.
     * @return {module:model/ListMerchantsResponse} The populated <code>ListMerchantsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMerchantsResponse();

            if (data.hasOwnProperty('client_name')) {
                obj['client_name'] = ApiClient.convertToType(data['client_name'], 'String');
            }
            if (data.hasOwnProperty('clientid')) {
                obj['clientid'] = ApiClient.convertToType(data['clientid'], 'String');
            }
            if (data.hasOwnProperty('merchants')) {
                obj['merchants'] = ApiClient.convertToType(data['merchants'], [Merchant]);
            }
        }
        return obj;
    }


}

/**
 * The client name that was requested.
 * @member {String} client_name
 */
ListMerchantsResponse.prototype['client_name'] = undefined;

/**
 * The client id requested.
 * @member {String} clientid
 */
ListMerchantsResponse.prototype['clientid'] = undefined;

/**
 * @member {Array.<module:model/Merchant>} merchants
 */
ListMerchantsResponse.prototype['merchants'] = undefined;






export default ListMerchantsResponse;

