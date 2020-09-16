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
 * The Card model module.
 * @module model/Card
 * @version 1.0.0
 */
class Card {
    /**
     * Constructs a new <code>Card</code>.
     * @alias module:model/Card
     */
    constructor() { 
        
        Card.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Card} obj Optional instance to populate.
     * @return {module:model/Card} The populated <code>Card</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Card();

            if (data.hasOwnProperty('bin_commercial')) {
                obj['bin_commercial'] = ApiClient.convertToType(data['bin_commercial'], 'Boolean');
            }
            if (data.hasOwnProperty('bin_corporate')) {
                obj['bin_corporate'] = ApiClient.convertToType(data['bin_corporate'], 'Boolean');
            }
            if (data.hasOwnProperty('bin_country_issued')) {
                obj['bin_country_issued'] = ApiClient.convertToType(data['bin_country_issued'], 'String');
            }
            if (data.hasOwnProperty('bin_credit')) {
                obj['bin_credit'] = ApiClient.convertToType(data['bin_credit'], 'Boolean');
            }
            if (data.hasOwnProperty('bin_currency')) {
                obj['bin_currency'] = ApiClient.convertToType(data['bin_currency'], 'String');
            }
            if (data.hasOwnProperty('bin_debit')) {
                obj['bin_debit'] = ApiClient.convertToType(data['bin_debit'], 'Boolean');
            }
            if (data.hasOwnProperty('bin_description')) {
                obj['bin_description'] = ApiClient.convertToType(data['bin_description'], 'String');
            }
            if (data.hasOwnProperty('bin_eu')) {
                obj['bin_eu'] = ApiClient.convertToType(data['bin_eu'], 'Boolean');
            }
            if (data.hasOwnProperty('card_id')) {
                obj['card_id'] = ApiClient.convertToType(data['card_id'], 'String');
            }
            if (data.hasOwnProperty('card_status')) {
                obj['card_status'] = ApiClient.convertToType(data['card_status'], 'String');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('expmonth')) {
                obj['expmonth'] = ApiClient.convertToType(data['expmonth'], 'Number');
            }
            if (data.hasOwnProperty('expyear')) {
                obj['expyear'] = ApiClient.convertToType(data['expyear'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('label2')) {
                obj['label2'] = ApiClient.convertToType(data['label2'], 'String');
            }
            if (data.hasOwnProperty('last4digits')) {
                obj['last4digits'] = ApiClient.convertToType(data['last4digits'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Defines whether the card is a commercial card.
 * @member {Boolean} bin_commercial
 */
Card.prototype['bin_commercial'] = undefined;

/**
 * Defines whether the card is a corporate business card.
 * @member {Boolean} bin_corporate
 */
Card.prototype['bin_corporate'] = undefined;

/**
 * The determined country where the card was issued.
 * @member {String} bin_country_issued
 */
Card.prototype['bin_country_issued'] = undefined;

/**
 * Defines whether the card is a credit card.
 * @member {Boolean} bin_credit
 */
Card.prototype['bin_credit'] = undefined;

/**
 * The default currency determined for the card.
 * @member {String} bin_currency
 */
Card.prototype['bin_currency'] = undefined;

/**
 * Defines whether the card is a debit card.
 * @member {Boolean} bin_debit
 */
Card.prototype['bin_debit'] = undefined;

/**
 * A description of the bin on the card to identify what type of product the card is.
 * @member {String} bin_description
 */
Card.prototype['bin_description'] = undefined;

/**
 * Defines whether the card is regulated within the EU.
 * @member {Boolean} bin_eu
 */
Card.prototype['bin_eu'] = undefined;

/**
 * The id of the card that is returned. Should be used for referencing the card when perform any changes.
 * @member {String} card_id
 */
Card.prototype['card_id'] = undefined;

/**
 * The status of the card such, valid values are  - ACTIVE the card is active for processing  - INACTIVE the card is not active for processing  - EXPIRED for cards that have passed their expiry date. 
 * @member {String} card_status
 */
Card.prototype['card_status'] = undefined;

/**
 * Determines if the card is the default card for the account and should be regarded as the first option to be used for processing.
 * @member {Boolean} default
 */
Card.prototype['default'] = undefined;

/**
 * The expiry month of the card.
 * @member {Number} expmonth
 */
Card.prototype['expmonth'] = undefined;

/**
 * The expiry year of the card.
 * @member {Number} expyear
 */
Card.prototype['expyear'] = undefined;

/**
 * A label which identifies this card.
 * @member {String} label
 */
Card.prototype['label'] = undefined;

/**
 * A label which also provides the expiry date of the card.
 * @member {String} label2
 */
Card.prototype['label2'] = undefined;

/**
 * The last 4 digits of the card to aid in identification.
 * @member {String} last4digits
 */
Card.prototype['last4digits'] = undefined;

/**
 * The scheme that issued the card.
 * @member {String} scheme
 */
Card.prototype['scheme'] = undefined;

/**
 * A token that can be used to process against the card.
 * @member {String} token
 */
Card.prototype['token'] = undefined;






export default Card;

