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

/**
 * The AirlineSegment model module.
 * @module model/AirlineSegment
 */
class AirlineSegment {
    /**
     * Constructs a new <code>AirlineSegment</code>.
     * @alias module:model/AirlineSegment
     * @param arrival_location_code {String} A standard airline routing code (airport code or location identifier) applicable to the arrival portion of this segment. 
     * @param carrier_code {String} This field contains the two character airline designator code (air carrier code or airline code) that corresponds to the airline carrier applicable for up to four flight segments of this trip itinerary. 
     * @param class_service_code {String} This field contains a code that corresponds to the fare class (A, B, C, D, Premium, Discounted, etc.) within the overall class of service (e.g., First Class, Business, Economy) applicable to this travel segment, as specified in the IATA Standard Code allocation table. 
     * @param departure_date {Date} The Departure Date for the travel segment in ISO Date Format (yyyy-MM-dd).
     * @param flight_number {String} This field contains the carrier-assigned Flight Number for this travel segment.
     */
    constructor(arrival_location_code, carrier_code, class_service_code, departure_date, flight_number) { 
        
        AirlineSegment.initialize(this, arrival_location_code, carrier_code, class_service_code, departure_date, flight_number);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, arrival_location_code, carrier_code, class_service_code, departure_date, flight_number) { 
        obj['arrival_location_code'] = arrival_location_code;
        obj['carrier_code'] = carrier_code;
        obj['class_service_code'] = class_service_code;
        obj['departure_date'] = departure_date;
        obj['flight_number'] = flight_number;
    }

    /**
     * Constructs a <code>AirlineSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AirlineSegment} obj Optional instance to populate.
     * @return {module:model/AirlineSegment} The populated <code>AirlineSegment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AirlineSegment();

            if (data.hasOwnProperty('arrival_location_code')) {
                obj['arrival_location_code'] = ApiClient.convertToType(data['arrival_location_code'], 'String');
            }
            if (data.hasOwnProperty('carrier_code')) {
                obj['carrier_code'] = ApiClient.convertToType(data['carrier_code'], 'String');
            }
            if (data.hasOwnProperty('class_service_code')) {
                obj['class_service_code'] = ApiClient.convertToType(data['class_service_code'], 'String');
            }
            if (data.hasOwnProperty('departure_date')) {
                obj['departure_date'] = ApiClient.convertToType(data['departure_date'], 'Date');
            }
            if (data.hasOwnProperty('flight_number')) {
                obj['flight_number'] = ApiClient.convertToType(data['flight_number'], 'String');
            }
            if (data.hasOwnProperty('departure_location_code')) {
                obj['departure_location_code'] = ApiClient.convertToType(data['departure_location_code'], 'String');
            }
            if (data.hasOwnProperty('segment_fare')) {
                obj['segment_fare'] = ApiClient.convertToType(data['segment_fare'], 'Number');
            }
            if (data.hasOwnProperty('stop_over_indicator')) {
                obj['stop_over_indicator'] = ApiClient.convertToType(data['stop_over_indicator'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A standard airline routing code (airport code or location identifier) applicable to the arrival portion of this segment. 
 * @member {String} arrival_location_code
 */
AirlineSegment.prototype['arrival_location_code'] = undefined;

/**
 * This field contains the two character airline designator code (air carrier code or airline code) that corresponds to the airline carrier applicable for up to four flight segments of this trip itinerary. 
 * @member {String} carrier_code
 */
AirlineSegment.prototype['carrier_code'] = undefined;

/**
 * This field contains a code that corresponds to the fare class (A, B, C, D, Premium, Discounted, etc.) within the overall class of service (e.g., First Class, Business, Economy) applicable to this travel segment, as specified in the IATA Standard Code allocation table. 
 * @member {String} class_service_code
 */
AirlineSegment.prototype['class_service_code'] = undefined;

/**
 * The Departure Date for the travel segment in ISO Date Format (yyyy-MM-dd).
 * @member {Date} departure_date
 */
AirlineSegment.prototype['departure_date'] = undefined;

/**
 * This field contains the carrier-assigned Flight Number for this travel segment.
 * @member {String} flight_number
 */
AirlineSegment.prototype['flight_number'] = undefined;

/**
 * A standard airline routing code (airport code or location identifier) applicable to the departure portion of this segment. 
 * @member {String} departure_location_code
 */
AirlineSegment.prototype['departure_location_code'] = undefined;

/**
 * This field contains the total Fare for this travel segment.
 * @member {Number} segment_fare
 */
AirlineSegment.prototype['segment_fare'] = undefined;

/**
 * O = Stopover allowed, X = Stopover not allowed.
 * @member {String} stop_over_indicator
 */
AirlineSegment.prototype['stop_over_indicator'] = undefined;






export default AirlineSegment;

