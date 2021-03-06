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
import ThreeDSecure from './ThreeDSecure';

/**
 * The ChargeRequest model module.
 * @module model/ChargeRequest
 */
class ChargeRequest {
    /**
     * Constructs a new <code>ChargeRequest</code>.
     * @alias module:model/ChargeRequest
     * @param amount {Number} The amount to authorise in the lowest unit of currency with a variable length to a maximum of 12 digits. No decimal points are to be included and no divisional characters such as 1,024. The amount should be the total amount required for the transaction. For example with GBP £1,021.95 the amount value is 102195. 
     * @param identifier {String} The identifier of the transaction to process. The value should be a valid reference and may be used to perform  post processing actions and to aid in reconciliation of transactions.  The value should be a valid printable string with ASCII character ranges from 0x32 to 0x127.  The identifier is recommended to be distinct for each transaction such as a [random unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) this will aid in ensuring each transaction is identifiable.  When transactions are processed they are also checked for duplicate requests. Changing the identifier on a subsequent request will ensure that a transaction is considered as different. 
     * @param merchantid {Number} Identifies the merchant account to perform processing for.
     * @param token {String} A tokenised form of a card that belongs to a card holder's account and that has been previously registered. The token is time based and will only be active for a short duration. The value is therefore designed not to be stored remotely for future  use.  Tokens will start with ct and are resiliently tamper proof using HMacSHA-256. No sensitive card data is stored internally within the token.  Each card will contain a different token and the value may be different on any retrieval call.  The value can be presented for payment as a selection value to an end user in a web application. 
     */
    constructor(amount, identifier, merchantid, token) { 
        
        ChargeRequest.initialize(this, amount, identifier, merchantid, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, identifier, merchantid, token) { 
        obj['amount'] = amount;
        obj['identifier'] = identifier;
        obj['merchantid'] = merchantid;
        obj['token'] = token;
    }

    /**
     * Constructs a <code>ChargeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChargeRequest} obj Optional instance to populate.
     * @return {module:model/ChargeRequest} The populated <code>ChargeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargeRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('merchantid')) {
                obj['merchantid'] = ApiClient.convertToType(data['merchantid'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('avs_postcode_policy')) {
                obj['avs_postcode_policy'] = ApiClient.convertToType(data['avs_postcode_policy'], 'String');
            }
            if (data.hasOwnProperty('csc')) {
                obj['csc'] = ApiClient.convertToType(data['csc'], 'String');
            }
            if (data.hasOwnProperty('csc_policy')) {
                obj['csc_policy'] = ApiClient.convertToType(data['csc_policy'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('duplicate_policy')) {
                obj['duplicate_policy'] = ApiClient.convertToType(data['duplicate_policy'], 'String');
            }
            if (data.hasOwnProperty('match_avsa')) {
                obj['match_avsa'] = ApiClient.convertToType(data['match_avsa'], 'String');
            }
            if (data.hasOwnProperty('threedsecure')) {
                obj['threedsecure'] = ThreeDSecure.constructFromObject(data['threedsecure']);
            }
            if (data.hasOwnProperty('trans_info')) {
                obj['trans_info'] = ApiClient.convertToType(data['trans_info'], 'String');
            }
            if (data.hasOwnProperty('trans_type')) {
                obj['trans_type'] = ApiClient.convertToType(data['trans_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The amount to authorise in the lowest unit of currency with a variable length to a maximum of 12 digits. No decimal points are to be included and no divisional characters such as 1,024. The amount should be the total amount required for the transaction. For example with GBP £1,021.95 the amount value is 102195. 
 * @member {Number} amount
 */
ChargeRequest.prototype['amount'] = undefined;

/**
 * The identifier of the transaction to process. The value should be a valid reference and may be used to perform  post processing actions and to aid in reconciliation of transactions.  The value should be a valid printable string with ASCII character ranges from 0x32 to 0x127.  The identifier is recommended to be distinct for each transaction such as a [random unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) this will aid in ensuring each transaction is identifiable.  When transactions are processed they are also checked for duplicate requests. Changing the identifier on a subsequent request will ensure that a transaction is considered as different. 
 * @member {String} identifier
 */
ChargeRequest.prototype['identifier'] = undefined;

/**
 * Identifies the merchant account to perform processing for.
 * @member {Number} merchantid
 */
ChargeRequest.prototype['merchantid'] = undefined;

/**
 * A tokenised form of a card that belongs to a card holder's account and that has been previously registered. The token is time based and will only be active for a short duration. The value is therefore designed not to be stored remotely for future  use.  Tokens will start with ct and are resiliently tamper proof using HMacSHA-256. No sensitive card data is stored internally within the token.  Each card will contain a different token and the value may be different on any retrieval call.  The value can be presented for payment as a selection value to an end user in a web application. 
 * @member {String} token
 */
ChargeRequest.prototype['token'] = undefined;

/**
 * A policy value which determines whether an AVS postcode policy is enforced or bypassed.  Values are  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.  `1` for an enforced policy. Transactions that are enforced will be rejected if the AVS postcode numeric value does not match.  `2` to bypass. Transactions that are bypassed will be allowed through even if the postcode did not match.  `3` to ignore. Transactions that are ignored will bypass the result and not send postcode details for authorisation. 
 * @member {String} avs_postcode_policy
 */
ChargeRequest.prototype['avs_postcode_policy'] = undefined;

/**
 * The Card Security Code (CSC) (also known as CV2/CVV2) is normally found on the back of the card (American Express has it on the front). The value helps to identify posession of the card as it is not available within the chip or magnetic swipe.  When forwarding the CSC, please ensure the value is a string as some values start with 0 and this will be stripped out by any integer parsing.  The CSC number aids fraud prevention in Mail Order and Internet payments.   Business rules are available on your account to identify whether to accept or decline transactions based on mismatched results of the CSC.  The Payment Card Industry (PCI) requires that at no stage of a transaction should the CSC be stored. This applies to all entities handling card data. It should also not be used in any hashing process. CityPay do not store the value and have no method of retrieving the value once the transaction has been processed. For this reason, duplicate checking is unable to determine the CSC in its duplication check algorithm. 
 * @member {String} csc
 */
ChargeRequest.prototype['csc'] = undefined;

/**
 * A policy value which determines whether a CSC policy is enforced or bypassed.  Values are  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.  `1` for an enforced policy. Transactions that are enforced will be rejected if the CSC value does not match.  `2` to bypass. Transactions that are bypassed will be allowed through even if the CSC did not match.  `3` to ignore. Transactions that are ignored will bypass the result and not send the CSC details for authorisation. 
 * @member {String} csc_policy
 */
ChargeRequest.prototype['csc_policy'] = undefined;

/**
 * The processing currency for the transaction. Will default to the merchant account currency.
 * @member {String} currency
 */
ChargeRequest.prototype['currency'] = undefined;

/**
 * A policy value which determines whether a duplication policy is enforced or bypassed. A duplication check has a window of time set against your account within which it can action. If a previous transaction with matching values occurred within the window, any subsequent transaction will result in a T001 result.  Values are  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.  `1` for an enforced policy. Transactions that are enforced will be checked for duplication within the duplication window.  `2` to bypass. Transactions that are bypassed will not be checked for duplication within the duplication window.  `3` to ignore. Transactions that are ignored will have the same affect as bypass. 
 * @member {String} duplicate_policy
 */
ChargeRequest.prototype['duplicate_policy'] = undefined;

/**
 * A policy value which determines whether an AVS address policy is enforced, bypassed or ignored.   Values are  `0` for the default policy (default value if not supplied). Your default values are determined by your account manager on setup of the account.  `1` for an enforced policy. Transactions that are enforced will be rejected if the AVS address numeric value does not match.  `2` to bypass. Transactions that are bypassed will be allowed through even if the address did not match.  `3` to ignore. Transactions that are ignored will bypass the result and not send address numeric details for authorisation. 
 * @member {String} match_avsa
 */
ChargeRequest.prototype['match_avsa'] = undefined;

/**
 * @member {module:model/ThreeDSecure} threedsecure
 */
ChargeRequest.prototype['threedsecure'] = undefined;

/**
 * Further information that can be added to the transaction will display in reporting. Can be used for flexible values such as operator id.
 * @member {String} trans_info
 */
ChargeRequest.prototype['trans_info'] = undefined;

/**
 * The type of transaction being submitted. Normally this value is not required and your account manager may request that you set this field.
 * @member {String} trans_type
 */
ChargeRequest.prototype['trans_type'] = undefined;






export default ChargeRequest;

