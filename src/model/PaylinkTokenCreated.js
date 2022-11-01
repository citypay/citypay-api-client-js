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
import PaylinkAttachmentResult from './PaylinkAttachmentResult';
import PaylinkErrorCode from './PaylinkErrorCode';

/**
 * The PaylinkTokenCreated model module.
 * @module model/PaylinkTokenCreated
 */
class PaylinkTokenCreated {
    /**
     * Constructs a new <code>PaylinkTokenCreated</code>.
     * @alias module:model/PaylinkTokenCreated
     * @param id {String} A unique id of the request.
     * @param result {Number} The result field contains the result for the Paylink Token Request. 0 - indicates that an error was encountered while creating the token. 1 - which indicates that a Token was successfully created.
     * @param token {String} A token generated for the request used to refer to the transaction in consequential calls.
     */
    constructor(id, result, token) { 
        
        PaylinkTokenCreated.initialize(this, id, result, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, result, token) { 
        obj['id'] = id;
        obj['result'] = result;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>PaylinkTokenCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaylinkTokenCreated} obj Optional instance to populate.
     * @return {module:model/PaylinkTokenCreated} The populated <code>PaylinkTokenCreated</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaylinkTokenCreated();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = PaylinkAttachmentResult.constructFromObject(data['attachments']);
            }
            if (data.hasOwnProperty('bps')) {
                obj['bps'] = ApiClient.convertToType(data['bps'], 'String');
            }
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'Date');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [PaylinkErrorCode]);
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('qr_code')) {
                obj['qr_code'] = ApiClient.convertToType(data['qr_code'], 'String');
            }
            if (data.hasOwnProperty('server_version')) {
                obj['server_version'] = ApiClient.convertToType(data['server_version'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('usc')) {
                obj['usc'] = ApiClient.convertToType(data['usc'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A unique id of the request.
 * @member {String} id
 */
PaylinkTokenCreated.prototype['id'] = undefined;

/**
 * The result field contains the result for the Paylink Token Request. 0 - indicates that an error was encountered while creating the token. 1 - which indicates that a Token was successfully created.
 * @member {Number} result
 */
PaylinkTokenCreated.prototype['result'] = undefined;

/**
 * A token generated for the request used to refer to the transaction in consequential calls.
 * @member {String} token
 */
PaylinkTokenCreated.prototype['token'] = undefined;

/**
 * @member {module:model/PaylinkAttachmentResult} attachments
 */
PaylinkTokenCreated.prototype['attachments'] = undefined;

/**
 * true if BPS has been enabled on this token.
 * @member {String} bps
 */
PaylinkTokenCreated.prototype['bps'] = undefined;

/**
 * Date and time the token was generated.
 * @member {Date} date_created
 */
PaylinkTokenCreated.prototype['date_created'] = undefined;

/**
 * @member {Array.<module:model/PaylinkErrorCode>} errors
 */
PaylinkTokenCreated.prototype['errors'] = undefined;

/**
 * The identifier as presented in the TokenRequest.
 * @member {String} identifier
 */
PaylinkTokenCreated.prototype['identifier'] = undefined;

/**
 * Determines whether the token is `live` or `test`.
 * @member {String} mode
 */
PaylinkTokenCreated.prototype['mode'] = undefined;

/**
 * A URL of a qrcode which can be used to refer to the token URL.
 * @member {String} qr_code
 */
PaylinkTokenCreated.prototype['qr_code'] = undefined;

/**
 * the version of the server performing the call.
 * @member {String} server_version
 */
PaylinkTokenCreated.prototype['server_version'] = undefined;

/**
 * The incoming IP address of the call.
 * @member {String} source
 */
PaylinkTokenCreated.prototype['source'] = undefined;

/**
 * The Paylink token URL used to checkout by the card holder.
 * @member {String} url
 */
PaylinkTokenCreated.prototype['url'] = undefined;

/**
 * A UrlShortCode (USC) used for short links.
 * @member {String} usc
 */
PaylinkTokenCreated.prototype['usc'] = undefined;






export default PaylinkTokenCreated;

