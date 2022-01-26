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


import ApiClient from "../ApiClient";
import Acknowledgement from '../model/Acknowledgement';
import AclCheckRequest from '../model/AclCheckRequest';
import AclCheckResponseModel from '../model/AclCheckResponseModel';
import Error from '../model/Error';
import ListMerchantsResponse from '../model/ListMerchantsResponse';
import Ping from '../model/Ping';

/**
* Operational service.
* @module api/OperationalApi
*/
export default class OperationalApi {

    /**
    * Constructs a new OperationalApi. 
    * @alias module:api/OperationalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * ACL Check Request
     * Allows the checking of IP addresses against configured ACLs. Requests can perform a lookup of addresses in subnets and services such as AWS or Azure to check that those addresses are listed in the ACLs. 
     * @param {module:model/AclCheckRequest} acl_check_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AclCheckResponseModel} and HTTP response
     */
    aclCheckRequestWithHttpInfo(acl_check_request) {
      let postBody = acl_check_request;
      // verify the required parameter 'acl_check_request' is set
      if (acl_check_request === undefined || acl_check_request === null) {
        throw new Error("Missing the required parameter 'acl_check_request' when calling aclCheckRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cp-api-key'];
      let contentTypes = ['application/json', 'text/xml'];
      let accepts = ['application/json', 'text/xml'];
      let returnType = AclCheckResponseModel;
      return this.apiClient.callApi(
        '/acl/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * ACL Check Request
     * Allows the checking of IP addresses against configured ACLs. Requests can perform a lookup of addresses in subnets and services such as AWS or Azure to check that those addresses are listed in the ACLs. 
     * @param {module:model/AclCheckRequest} acl_check_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AclCheckResponseModel}
     */
    aclCheckRequest(acl_check_request) {
      return this.aclCheckRequestWithHttpInfo(acl_check_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Merchants Request
     * An operational request to list current merchants for a client.  ### Sorting  Sorting can be performed by include a query parameter i.e. `/merchants/?sort=merchantid`  Fields that can be sorted are `merchantid` or `name`. 
     * @param {String} clientid The client id to return merchants for, specifying \"default\" will use the value in your api key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMerchantsResponse} and HTTP response
     */
    listMerchantsRequestWithHttpInfo(clientid) {
      let postBody = null;
      // verify the required parameter 'clientid' is set
      if (clientid === undefined || clientid === null) {
        throw new Error("Missing the required parameter 'clientid' when calling listMerchantsRequest");
      }

      let pathParams = {
        'clientid': clientid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cp-api-key'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml'];
      let returnType = ListMerchantsResponse;
      return this.apiClient.callApi(
        '/merchants/{clientid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Merchants Request
     * An operational request to list current merchants for a client.  ### Sorting  Sorting can be performed by include a query parameter i.e. `/merchants/?sort=merchantid`  Fields that can be sorted are `merchantid` or `name`. 
     * @param {String} clientid The client id to return merchants for, specifying \"default\" will use the value in your api key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMerchantsResponse}
     */
    listMerchantsRequest(clientid) {
      return this.listMerchantsRequestWithHttpInfo(clientid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Ping Request
     * A ping request which performs a connection and authentication test to the CityPay API server. The request will return a standard Acknowledgement with a response code `044` to signify a successful ping.  The ping call is useful to confirm that you will be able to access  the API from behind any firewalls and that the permission model is granting access from your source. 
     * @param {module:model/Ping} ping 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Acknowledgement} and HTTP response
     */
    pingRequestWithHttpInfo(ping) {
      let postBody = ping;
      // verify the required parameter 'ping' is set
      if (ping === undefined || ping === null) {
        throw new Error("Missing the required parameter 'ping' when calling pingRequest");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cp-api-key'];
      let contentTypes = ['application/json', 'text/xml'];
      let accepts = ['application/json', 'text/xml'];
      let returnType = Acknowledgement;
      return this.apiClient.callApi(
        '/ping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Ping Request
     * A ping request which performs a connection and authentication test to the CityPay API server. The request will return a standard Acknowledgement with a response code `044` to signify a successful ping.  The ping call is useful to confirm that you will be able to access  the API from behind any firewalls and that the permission model is granting access from your source. 
     * @param {module:model/Ping} ping 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Acknowledgement}
     */
    pingRequest(ping) {
      return this.pingRequestWithHttpInfo(ping)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
