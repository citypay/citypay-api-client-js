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


import ApiClient from "../ApiClient";
import AuthResponse from '../model/AuthResponse';
import DirectPostRequest from '../model/DirectPostRequest';
import DirectTokenAuthRequest from '../model/DirectTokenAuthRequest';
import Error from '../model/Error';
import TokenisationResponseModel from '../model/TokenisationResponseModel';

/**
* DirectPostApi service.
* @module api/DirectPostApi
*/
export default class DirectPostApi {

    /**
    * Constructs a new DirectPostApi. 
    * @alias module:api/DirectPostApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Handles a CRes response from ACS, returning back the result of authorisation
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * @param {String} uuid An identifier used to track the CReq/CRes cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [cres] The CRES from the ACS.
     * @param {String} [three_ds_session_data] The session data from the ACS.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthResponse} and HTTP response
     */
    directCResAuthRequestWithHttpInfo(uuid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling directCResAuthRequest");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'cres': opts['cres'],
        'threeDSSessionData': opts['three_ds_session_data']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let returnType = AuthResponse;
      return this.apiClient.callApi(
        '/direct/cres/auth/{uuid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Handles a CRes response from ACS, returning back the result of authorisation
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * @param {String} uuid An identifier used to track the CReq/CRes cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cres The CRES from the ACS.
     * @param {String} opts.three_ds_session_data The session data from the ACS.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthResponse}
     */
    directCResAuthRequest(uuid, opts) {
      return this.directCResAuthRequestWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Handles a CRes response from ACS, returning back a token for future authorisation
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * @param {String} uuid An identifier used to track the CReq/CRes cycle.
     * @param {Object} opts Optional parameters
     * @param {String} [cres] The CRES from the ACS.
     * @param {String} [three_ds_session_data] The session data from the ACS.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenisationResponseModel} and HTTP response
     */
    directCResTokeniseRequestWithHttpInfo(uuid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling directCResTokeniseRequest");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'cres': opts['cres'],
        'threeDSSessionData': opts['three_ds_session_data']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let returnType = TokenisationResponseModel;
      return this.apiClient.callApi(
        '/direct/cres/tokenise/{uuid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Handles a CRes response from ACS, returning back a token for future authorisation
     * Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid `threeDSSessionData` value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a `Direct Post` integration who wish to handle the challenge flow themselves. 
     * @param {String} uuid An identifier used to track the CReq/CRes cycle.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cres The CRES from the ACS.
     * @param {String} opts.three_ds_session_data The session data from the ACS.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenisationResponseModel}
     */
    directCResTokeniseRequest(uuid, opts) {
      return this.directCResTokeniseRequestWithHttpInfo(uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Direct Post Auth Request
     * Used to initiate a direct post request transaction flow. 
     * @param {module:model/DirectPostRequest} direct_post_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthResponse} and HTTP response
     */
    directPostAuthRequestWithHttpInfo(direct_post_request) {
      let postBody = direct_post_request;
      // verify the required parameter 'direct_post_request' is set
      if (direct_post_request === undefined || direct_post_request === null) {
        throw new Error("Missing the required parameter 'direct_post_request' when calling directPostAuthRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cp-domain-key', 'cp-api-key'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'application/x-www-form-urlencoded', 'text/xml'];
      let returnType = AuthResponse;
      return this.apiClient.callApi(
        '/direct/auth', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Direct Post Auth Request
     * Used to initiate a direct post request transaction flow. 
     * @param {module:model/DirectPostRequest} direct_post_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthResponse}
     */
    directPostAuthRequest(direct_post_request) {
      return this.directPostAuthRequestWithHttpInfo(direct_post_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Direct Post Tokenise Request
     * Used to initiate a direct post request transaction flow. 
     * @param {module:model/DirectPostRequest} direct_post_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthResponse} and HTTP response
     */
    directPostTokeniseRequestWithHttpInfo(direct_post_request) {
      let postBody = direct_post_request;
      // verify the required parameter 'direct_post_request' is set
      if (direct_post_request === undefined || direct_post_request === null) {
        throw new Error("Missing the required parameter 'direct_post_request' when calling directPostTokeniseRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cp-domain-key', 'cp-api-key'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'application/x-www-form-urlencoded', 'text/xml'];
      let returnType = AuthResponse;
      return this.apiClient.callApi(
        '/direct/tokenise', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Direct Post Tokenise Request
     * Used to initiate a direct post request transaction flow. 
     * @param {module:model/DirectPostRequest} direct_post_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthResponse}
     */
    directPostTokeniseRequest(direct_post_request) {
      return this.directPostTokeniseRequestWithHttpInfo(direct_post_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Direct Post Token Request
     * Perform a request for authorisation for a previously generated token. This flow will return an authorisation response stating that the transaction was approved or declined. 
     * @param {module:model/DirectTokenAuthRequest} direct_token_auth_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthResponse} and HTTP response
     */
    tokenRequestWithHttpInfo(direct_token_auth_request) {
      let postBody = direct_token_auth_request;
      // verify the required parameter 'direct_token_auth_request' is set
      if (direct_token_auth_request === undefined || direct_token_auth_request === null) {
        throw new Error("Missing the required parameter 'direct_token_auth_request' when calling tokenRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cp-domain-key', 'cp-api-key'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'text/xml'];
      let accepts = ['application/json', 'application/xml', 'application/x-www-form-urlencoded', 'text/xml'];
      let returnType = AuthResponse;
      return this.apiClient.callApi(
        '/direct/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Direct Post Token Request
     * Perform a request for authorisation for a previously generated token. This flow will return an authorisation response stating that the transaction was approved or declined. 
     * @param {module:model/DirectTokenAuthRequest} direct_token_auth_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthResponse}
     */
    tokenRequest(direct_token_auth_request) {
      return this.tokenRequestWithHttpInfo(direct_token_auth_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
