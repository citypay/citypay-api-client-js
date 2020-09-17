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
 * The RequestChallenged model module.
 * @module model/RequestChallenged
 */
class RequestChallenged {
    /**
     * Constructs a new <code>RequestChallenged</code>.
     * @alias module:model/RequestChallenged
     */
    constructor() { 
        
        RequestChallenged.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestChallenged</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestChallenged} obj Optional instance to populate.
     * @return {module:model/RequestChallenged} The populated <code>RequestChallenged</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestChallenged();

            if (data.hasOwnProperty('acs_url')) {
                obj['acs_url'] = ApiClient.convertToType(data['acs_url'], 'String');
            }
            if (data.hasOwnProperty('creq')) {
                obj['creq'] = ApiClient.convertToType(data['creq'], 'String');
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
            if (data.hasOwnProperty('threedserver_trans_id')) {
                obj['threedserver_trans_id'] = ApiClient.convertToType(data['threedserver_trans_id'], 'String');
            }
            if (data.hasOwnProperty('transno')) {
                obj['transno'] = ApiClient.convertToType(data['transno'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The url of the Access Control Server (ACS) to forward the user to. 
 * @member {String} acs_url
 */
RequestChallenged.prototype['acs_url'] = undefined;

/**
 * The challenge request data which is encoded for usage by the ACS.
 * @member {String} creq
 */
RequestChallenged.prototype['creq'] = undefined;

/**
 * The merchant id that processed this transaction.
 * @member {Number} merchantid
 */
RequestChallenged.prototype['merchantid'] = undefined;

/**
 * The 3DSv2 trans id reference for the challenge process.
 * @member {String} threedserver_trans_id
 */
RequestChallenged.prototype['threedserver_trans_id'] = undefined;

/**
 * The transaction number for the challenge, ordered incrementally from 1 for every merchant_id. 
 * @member {Number} transno
 */
RequestChallenged.prototype['transno'] = undefined;






export default RequestChallenged;

