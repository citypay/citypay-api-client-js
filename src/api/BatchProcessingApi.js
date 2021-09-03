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
import BatchReportRequest from '../model/BatchReportRequest';
import BatchReportResponseModel from '../model/BatchReportResponseModel';
import CheckBatchStatus from '../model/CheckBatchStatus';
import CheckBatchStatusResponse from '../model/CheckBatchStatusResponse';
import Error from '../model/Error';
import ProcessBatchRequest from '../model/ProcessBatchRequest';
import ProcessBatchResponse from '../model/ProcessBatchResponse';

/**
* BatchProcessing service.
* @module api/BatchProcessingApi
*/
export default class BatchProcessingApi {

    /**
    * Constructs a new BatchProcessingApi. 
    * @alias module:api/BatchProcessingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Batch Process Request
     * A batch process request is used to start the batch process workflow by uploading batch data and initialising a new batch for processing. Once validated the batch will be queued for processing and further updates can be received by a subsequent call to retrieve the batch status. 
     * @param {module:model/ProcessBatchRequest} process_batch_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProcessBatchResponse} and HTTP response
     */
    batchProcessRequestWithHttpInfo(process_batch_request) {
      let postBody = process_batch_request;
      // verify the required parameter 'process_batch_request' is set
      if (process_batch_request === undefined || process_batch_request === null) {
        throw new Error("Missing the required parameter 'process_batch_request' when calling batchProcessRequest");
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
      let returnType = ProcessBatchResponse;
      return this.apiClient.callApi(
        '/batch/process', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Batch Process Request
     * A batch process request is used to start the batch process workflow by uploading batch data and initialising a new batch for processing. Once validated the batch will be queued for processing and further updates can be received by a subsequent call to retrieve the batch status. 
     * @param {module:model/ProcessBatchRequest} process_batch_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProcessBatchResponse}
     */
    batchProcessRequest(process_batch_request) {
      return this.batchProcessRequestWithHttpInfo(process_batch_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * CheckBatchStatus
     * The operation is used to retrieve the status of a batch process.
     * @param {module:model/CheckBatchStatus} check_batch_status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CheckBatchStatusResponse} and HTTP response
     */
    checkBatchStatusRequestWithHttpInfo(check_batch_status) {
      let postBody = check_batch_status;
      // verify the required parameter 'check_batch_status' is set
      if (check_batch_status === undefined || check_batch_status === null) {
        throw new Error("Missing the required parameter 'check_batch_status' when calling checkBatchStatusRequest");
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
      let returnType = CheckBatchStatusResponse;
      return this.apiClient.callApi(
        '/batch/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * CheckBatchStatus
     * The operation is used to retrieve the status of a batch process.
     * @param {module:model/CheckBatchStatus} check_batch_status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CheckBatchStatusResponse}
     */
    checkBatchStatusRequest(check_batch_status) {
      return this.checkBatchStatusRequestWithHttpInfo(check_batch_status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * BatchReportRequest
     * The operation is used to retrieve a report of the result of a batch process.
     * @param {module:model/BatchReportRequest} batch_report_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchReportResponseModel} and HTTP response
     */
    getBatchReportRequestWithHttpInfo(batch_report_request) {
      let postBody = batch_report_request;
      // verify the required parameter 'batch_report_request' is set
      if (batch_report_request === undefined || batch_report_request === null) {
        throw new Error("Missing the required parameter 'batch_report_request' when calling getBatchReportRequest");
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
      let returnType = BatchReportResponseModel;
      return this.apiClient.callApi(
        '/batch/retrieve', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * BatchReportRequest
     * The operation is used to retrieve a report of the result of a batch process.
     * @param {module:model/BatchReportRequest} batch_report_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchReportResponseModel}
     */
    getBatchReportRequest(batch_report_request) {
      return this.getBatchReportRequestWithHttpInfo(batch_report_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
