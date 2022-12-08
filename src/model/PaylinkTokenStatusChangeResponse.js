/**
 * CityPay Payment API
 *  This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.  ## Compliance and Security Your application will need to adhere to PCI-DSS standards to operate safely and to meet requirements set out by  Visa and MasterCard and the PCI Security Standards Council. These include  * Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities. 
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
            if (!data[property]) {
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
                PaylinkTokenStatus.validateJsonObject(item);
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
 * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
 * @member {String} nextToken
 */
PaylinkTokenStatusChangeResponse.prototype['nextToken'] = undefined;






export default PaylinkTokenStatusChangeResponse;

