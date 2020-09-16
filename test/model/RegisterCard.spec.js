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
    instance = new citypay_api_client.RegisterCard();
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

  describe('RegisterCard', function() {
    it('should create an instance of RegisterCard', function() {
      // uncomment below and update the code to test RegisterCard
      //var instane = new citypay_api_client.RegisterCard();
      //expect(instance).to.be.a(citypay_api_client.RegisterCard);
    });

    it('should have the property cardnumber (base name: "cardnumber")', function() {
      // uncomment below and update the code to test the property cardnumber
      //var instane = new citypay_api_client.RegisterCard();
      //expect(instance).to.be();
    });

    it('should have the property expmonth (base name: "expmonth")', function() {
      // uncomment below and update the code to test the property expmonth
      //var instane = new citypay_api_client.RegisterCard();
      //expect(instance).to.be();
    });

    it('should have the property expyear (base name: "expyear")', function() {
      // uncomment below and update the code to test the property expyear
      //var instane = new citypay_api_client.RegisterCard();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new citypay_api_client.RegisterCard();
      //expect(instance).to.be();
    });

  });

}));
