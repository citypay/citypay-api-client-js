/**
 * CityPay Payment API
 *  Welcome to the CityPay API, a robust HTTP API payment solution designed for seamless server-to-server  transactional processing. Our API facilitates a wide array of payment operations, catering to diverse business needs.  Whether you're integrating Internet payments, handling Mail Order/Telephone Order (MOTO) transactions, managing  Subscriptions with Recurring and Continuous Authority payments, or navigating the complexities of 3-D Secure  authentication, our API is equipped to support your requirements. Additionally, we offer functionalities for  Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids, and Completion processing, alongside the capability  for tokenised payments.  ## Compliance and Security Overview <aside class=\"notice\">   Ensuring the security of payment transactions and compliance with industry standards is paramount. Our API is    designed with stringent security measures and compliance protocols to safeguard sensitive information and meet    the rigorous requirements of Visa, MasterCard, and the PCI Security Standards Council. </aside>  ### Key Compliance and Security Measures  * **TLS Encryption**: All data transmissions must utilise TLS version 1.2 or higher, employing [strong cryptography](#enabled-tls-ciphers). Our infrastructure strictly enforces this requirement to maintain the integrity and confidentiality of data in transit. We conduct regular scans and assessments of our TLS endpoints to identify and mitigate vulnerabilities. * **Data Storage Prohibitions**: Storing sensitive cardholder data (CHD), such as the card security code (CSC) or primary account number (PAN), is strictly prohibited. Our API is designed to minimize your exposure to sensitive data, thereby reducing your compliance burden. * **Data Masking**: For consumer protection and compliance, full card numbers must not be displayed on receipts or any customer-facing materials. Our API automatically masks PANs, displaying only the last four digits to facilitate safe receipt generation. * **Network Scans**: If your application is web-based, regular scans of your hosting environment are mandatory to identify and rectify potential vulnerabilities. This proactive measure is crucial for maintaining a secure and compliant online presence. * **PCI Compliance**: Adherence to PCI DSS standards is not optional; it's a requirement for operating securely and legally in the payments ecosystem. For detailed information on compliance requirements and resources, please visit the PCI Security Standards Council website [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/). * **Request Validation**: Our API includes mechanisms to verify the legitimacy of each request, ensuring it pertains to a valid account and originates from a trusted source. We leverage remote IP address verification alongside sophisticated application firewall technologies to thwart a wide array of common security threats.  ## Getting Started Before integrating with the CityPay API, ensure your application and development practices align with the outlined compliance and security measures. This preparatory step is crucial for a smooth integration process and the long-term success of your payment processing operations.  For further details on API endpoints, request/response formats, and code examples, proceed to the subsequent sections of our documentation. Our aim is to provide you with all the necessary tools and information to integrate our payment processing capabilities seamlessly into your application.  Thank you for choosing CityPay API. We look forward to supporting your payment processing needs with our secure, compliant, and versatile API solution. 
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
    // instance = new Citypay Api Client.PaymentIntent();
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

  describe('PaymentIntent', function() {
    it('should create an instance of PaymentIntent', function() {
      // uncomment below and update the code to test PaymentIntent
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be.a(Citypay Api Client.PaymentIntent);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property avs_postcode_policy (base name: "avs_postcode_policy")', function() {
      // uncomment below and update the code to test the property avs_postcode_policy
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property bill_to (base name: "bill_to")', function() {
      // uncomment below and update the code to test the property bill_to
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property csc (base name: "csc")', function() {
      // uncomment below and update the code to test the property csc
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property csc_policy (base name: "csc_policy")', function() {
      // uncomment below and update the code to test the property csc_policy
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property duplicate_policy (base name: "duplicate_policy")', function() {
      // uncomment below and update the code to test the property duplicate_policy
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property match_avsa (base name: "match_avsa")', function() {
      // uncomment below and update the code to test the property match_avsa
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property ship_to (base name: "ship_to")', function() {
      // uncomment below and update the code to test the property ship_to
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property trans_info (base name: "trans_info")', function() {
      // uncomment below and update the code to test the property trans_info
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property trans_type (base name: "trans_type")', function() {
      // uncomment below and update the code to test the property trans_type
      //var // instance = new Citypay Api Client.PaymentIntent();
      //expect(instance).to.be();
    });

  });

}));
