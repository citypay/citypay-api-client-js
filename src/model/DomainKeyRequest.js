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

/**
 * The DomainKeyRequest model module.
 * @module model/DomainKeyRequest
 */
class DomainKeyRequest {
    /**
     * Constructs a new <code>DomainKeyRequest</code>.
     * @alias module:model/DomainKeyRequest
     * @param domain {Array.<String>} 
     * @param merchantid {Number} The merchant id the domain key is to be used for. 
     */
    constructor(domain, merchantid) { 
        
        DomainKeyRequest.initialize(this, domain, merchantid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, domain, merchantid) { 
        obj['domain'] = domain;
        obj['merchantid'] = merchantid;
    }

    /**
     * Constructs a <code>DomainKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainKeyRequest} obj Optional instance to populate.
     * @return {module:model/DomainKeyRequest} The populated <code>DomainKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainKeyRequest();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], ['String']);
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
            if (data.hasOwnProperty('live')) {
                obj['live'] = ApiClient.convertToType(data['live'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DomainKeyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DomainKeyRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DomainKeyRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['domain'])) {
            throw new Error("Expected the field `domain` to be an array in the JSON data but got " + data['domain']);
        }

        return true;
    }


}

DomainKeyRequest.RequiredProperties = ["domain", "merchantid"];

/**
 * @member {Array.<String>} domain
 */
DomainKeyRequest.prototype['domain'] = undefined;

/**
 * The merchant id the domain key is to be used for. 
 * @member {Number} merchantid
 */
DomainKeyRequest.prototype['merchantid'] = undefined;

/**
 * Specifies if the key is to be used for production. Defaults to false. 
 * @member {Boolean} live
 */
DomainKeyRequest.prototype['live'] = undefined;






export default DomainKeyRequest;

