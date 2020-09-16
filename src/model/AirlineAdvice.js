/**
 * CityPay Payment API
 *  This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing, 3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.  ## Compliance and Security <aside class=\"notice\">   Before we begin a reminder that your application will need to adhere to PCI-DSS standards to operate safely   and to meet requirements set out by Visa and MasterCard and the PCI Security Standards Council including: </aside>  * Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at   lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments   as part of our compliance program. * The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or   primary access number (PAN) * The application must not display the full card number on receipts, it is recommended to mask the PAN   and show the last 4 digits. The API will return this for you for ease of receipt creation * If you are developing a website, you will be required to perform regular scans on the network where you host the   application to meet your compliance obligations * You will be required to be PCI Compliant and the application must adhere to the security standard. Further information   is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/) * The API verifies that the request is for a valid account and originates from a trusted source using the remote IP   address. Our application firewalls analyse data that may be an attempt to break a large number of security common   security vulnerabilities. 
 *
 * The version of the OpenAPI document: dev
 * Contact: support@citypay.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AirlineSegment from './AirlineSegment';

/**
 * The AirlineAdvice model module.
 * @module model/AirlineAdvice
 * @version 1.0.0
 */
class AirlineAdvice {
    /**
     * Constructs a new <code>AirlineAdvice</code>.
     * @alias module:model/AirlineAdvice
     * @param carrier_name {String} The name of the airline carrier that generated the tickets for airline travel.
     * @param number_in_party {Number} The number of people in the party.
     * @param segment1 {module:model/AirlineSegment} 
     * @param ticket_issue_city {String} The name of the city town or village where the transaction took place.
     * @param ticket_issue_date {Date} The date the ticket was issued in ISO Date format (yyyy-MM-dd).
     * @param ticket_issue_name {String} The name of the agency generating the ticket.
     * @param ticket_no {String} This must be a valid ticket number, i.e. numeric (the first 3 digits must represent the valid IATA plate carrier code). The final check digit should be validated prior to submission. On credit charges, this field should contain the number of the original ticket, and not of a replacement. 
     * @param transaction_type {String} This field contains the Transaction Type code assigned to this transaction. Valid codes include:   - `TKT` = Ticket Purchase  - `REF` = Refund  - `EXC` = Exchange Ticket  - `MSC` = Miscellaneous (non-Ticket Purchase- and non-Exchange Ticket-related transactions only). 
     */
    constructor(carrier_name, number_in_party, segment1, ticket_issue_city, ticket_issue_date, ticket_issue_name, ticket_no, transaction_type) { 
        
        AirlineAdvice.initialize(this, carrier_name, number_in_party, segment1, ticket_issue_city, ticket_issue_date, ticket_issue_name, ticket_no, transaction_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, carrier_name, number_in_party, segment1, ticket_issue_city, ticket_issue_date, ticket_issue_name, ticket_no, transaction_type) { 
        obj['carrier_name'] = carrier_name;
        obj['number_in_party'] = number_in_party;
        obj['segment1'] = segment1;
        obj['ticket_issue_city'] = ticket_issue_city;
        obj['ticket_issue_date'] = ticket_issue_date;
        obj['ticket_issue_name'] = ticket_issue_name;
        obj['ticket_no'] = ticket_no;
        obj['transaction_type'] = transaction_type;
    }

    /**
     * Constructs a <code>AirlineAdvice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AirlineAdvice} obj Optional instance to populate.
     * @return {module:model/AirlineAdvice} The populated <code>AirlineAdvice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AirlineAdvice();

            if (data.hasOwnProperty('carrier_name')) {
                obj['carrier_name'] = ApiClient.convertToType(data['carrier_name'], 'String');
            }
            if (data.hasOwnProperty('number_in_party')) {
                obj['number_in_party'] = ApiClient.convertToType(data['number_in_party'], 'Number');
            }
            if (data.hasOwnProperty('segment1')) {
                obj['segment1'] = AirlineSegment.constructFromObject(data['segment1']);
            }
            if (data.hasOwnProperty('ticket_issue_city')) {
                obj['ticket_issue_city'] = ApiClient.convertToType(data['ticket_issue_city'], 'String');
            }
            if (data.hasOwnProperty('ticket_issue_date')) {
                obj['ticket_issue_date'] = ApiClient.convertToType(data['ticket_issue_date'], 'Date');
            }
            if (data.hasOwnProperty('ticket_issue_name')) {
                obj['ticket_issue_name'] = ApiClient.convertToType(data['ticket_issue_name'], 'String');
            }
            if (data.hasOwnProperty('ticket_no')) {
                obj['ticket_no'] = ApiClient.convertToType(data['ticket_no'], 'String');
            }
            if (data.hasOwnProperty('transaction_type')) {
                obj['transaction_type'] = ApiClient.convertToType(data['transaction_type'], 'String');
            }
            if (data.hasOwnProperty('conjunction_ticket_indicator')) {
                obj['conjunction_ticket_indicator'] = ApiClient.convertToType(data['conjunction_ticket_indicator'], 'Boolean');
            }
            if (data.hasOwnProperty('eticket_indicator')) {
                obj['eticket_indicator'] = ApiClient.convertToType(data['eticket_indicator'], 'Boolean');
            }
            if (data.hasOwnProperty('no_air_segments')) {
                obj['no_air_segments'] = ApiClient.convertToType(data['no_air_segments'], 'Number');
            }
            if (data.hasOwnProperty('original_ticket_no')) {
                obj['original_ticket_no'] = ApiClient.convertToType(data['original_ticket_no'], 'String');
            }
            if (data.hasOwnProperty('passenger_name')) {
                obj['passenger_name'] = ApiClient.convertToType(data['passenger_name'], 'String');
            }
            if (data.hasOwnProperty('segment2')) {
                obj['segment2'] = AirlineSegment.constructFromObject(data['segment2']);
            }
            if (data.hasOwnProperty('segment3')) {
                obj['segment3'] = AirlineSegment.constructFromObject(data['segment3']);
            }
            if (data.hasOwnProperty('segment4')) {
                obj['segment4'] = AirlineSegment.constructFromObject(data['segment4']);
            }
        }
        return obj;
    }


}

/**
 * The name of the airline carrier that generated the tickets for airline travel.
 * @member {String} carrier_name
 */
AirlineAdvice.prototype['carrier_name'] = undefined;

/**
 * The number of people in the party.
 * @member {Number} number_in_party
 */
AirlineAdvice.prototype['number_in_party'] = undefined;

/**
 * @member {module:model/AirlineSegment} segment1
 */
AirlineAdvice.prototype['segment1'] = undefined;

/**
 * The name of the city town or village where the transaction took place.
 * @member {String} ticket_issue_city
 */
AirlineAdvice.prototype['ticket_issue_city'] = undefined;

/**
 * The date the ticket was issued in ISO Date format (yyyy-MM-dd).
 * @member {Date} ticket_issue_date
 */
AirlineAdvice.prototype['ticket_issue_date'] = undefined;

/**
 * The name of the agency generating the ticket.
 * @member {String} ticket_issue_name
 */
AirlineAdvice.prototype['ticket_issue_name'] = undefined;

/**
 * This must be a valid ticket number, i.e. numeric (the first 3 digits must represent the valid IATA plate carrier code). The final check digit should be validated prior to submission. On credit charges, this field should contain the number of the original ticket, and not of a replacement. 
 * @member {String} ticket_no
 */
AirlineAdvice.prototype['ticket_no'] = undefined;

/**
 * This field contains the Transaction Type code assigned to this transaction. Valid codes include:   - `TKT` = Ticket Purchase  - `REF` = Refund  - `EXC` = Exchange Ticket  - `MSC` = Miscellaneous (non-Ticket Purchase- and non-Exchange Ticket-related transactions only). 
 * @member {String} transaction_type
 */
AirlineAdvice.prototype['transaction_type'] = undefined;

/**
 * true if a conjunction ticket (with additional coupons) was issued for an itinerary with more than four segments. Defaults to false. 
 * @member {Boolean} conjunction_ticket_indicator
 */
AirlineAdvice.prototype['conjunction_ticket_indicator'] = undefined;

/**
 * The Electronic Ticket Indicator, a code that indicates if an electronic ticket was issued.  Defaults to true.
 * @member {Boolean} eticket_indicator
 */
AirlineAdvice.prototype['eticket_indicator'] = undefined;

/**
 * A value that indicates the number of air travel segments included on this ticket. Valid entries include the numerals “0” through “4”. Required only if the transaction type is TKT or EXC. 
 * @member {Number} no_air_segments
 */
AirlineAdvice.prototype['no_air_segments'] = undefined;

/**
 * Required if transaction type is EXC.
 * @member {String} original_ticket_no
 */
AirlineAdvice.prototype['original_ticket_no'] = undefined;

/**
 * The name of the passenger when the traveller is not the card member that purchased the ticket. Required only if the transaction type is TKT or EXC.
 * @member {String} passenger_name
 */
AirlineAdvice.prototype['passenger_name'] = undefined;

/**
 * @member {module:model/AirlineSegment} segment2
 */
AirlineAdvice.prototype['segment2'] = undefined;

/**
 * @member {module:model/AirlineSegment} segment3
 */
AirlineAdvice.prototype['segment3'] = undefined;

/**
 * @member {module:model/AirlineSegment} segment4
 */
AirlineAdvice.prototype['segment4'] = undefined;






export default AirlineAdvice;

