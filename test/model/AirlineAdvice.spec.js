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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.citypay_api_client);
  }
}(this, function(expect, citypay_api_client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new citypay_api_client.AirlineAdvice();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AirlineAdvice', function() {
    it('should create an instance of AirlineAdvice', function() {
      // uncomment below and update the code to test AirlineAdvice
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be.a(citypay_api_client.AirlineAdvice);
    });

    it('should have the property carrier_name (base name: "carrier_name")', function() {
      // uncomment below and update the code to test the property carrier_name
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property number_in_party (base name: "number_in_party")', function() {
      // uncomment below and update the code to test the property number_in_party
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property segment1 (base name: "segment1")', function() {
      // uncomment below and update the code to test the property segment1
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property ticket_issue_city (base name: "ticket_issue_city")', function() {
      // uncomment below and update the code to test the property ticket_issue_city
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property ticket_issue_date (base name: "ticket_issue_date")', function() {
      // uncomment below and update the code to test the property ticket_issue_date
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property ticket_issue_name (base name: "ticket_issue_name")', function() {
      // uncomment below and update the code to test the property ticket_issue_name
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property ticket_no (base name: "ticket_no")', function() {
      // uncomment below and update the code to test the property ticket_no
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property transaction_type (base name: "transaction_type")', function() {
      // uncomment below and update the code to test the property transaction_type
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property conjunction_ticket_indicator (base name: "conjunction_ticket_indicator")', function() {
      // uncomment below and update the code to test the property conjunction_ticket_indicator
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property eticket_indicator (base name: "eticket_indicator")', function() {
      // uncomment below and update the code to test the property eticket_indicator
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property no_air_segments (base name: "no_air_segments")', function() {
      // uncomment below and update the code to test the property no_air_segments
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property original_ticket_no (base name: "original_ticket_no")', function() {
      // uncomment below and update the code to test the property original_ticket_no
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property passenger_name (base name: "passenger_name")', function() {
      // uncomment below and update the code to test the property passenger_name
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property segment2 (base name: "segment2")', function() {
      // uncomment below and update the code to test the property segment2
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property segment3 (base name: "segment3")', function() {
      // uncomment below and update the code to test the property segment3
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

    it('should have the property segment4 (base name: "segment4")', function() {
      // uncomment below and update the code to test the property segment4
      //var instane = new citypay_api_client.AirlineAdvice();
      //expect(instance).to.be();
    });

  });

}));
