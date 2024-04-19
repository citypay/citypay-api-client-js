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
import BatchTransactionReportRequest from '../model/BatchTransactionReportRequest';
import BatchTransactionReportResponse from '../model/BatchTransactionReportResponse';
import Error from '../model/Error';
import MerchantBatchReportResponse from '../model/MerchantBatchReportResponse';
import MerchantBatchRequest from '../model/MerchantBatchRequest';
import MerchantBatchResponse from '../model/MerchantBatchResponse';
import RemittanceReportRequest from '../model/RemittanceReportRequest';
import RemittanceReportResponse from '../model/RemittanceReportResponse';
import RemittedClientData from '../model/RemittedClientData';

/**
* ReportingApi service.
* @module api/ReportingApi
*/
export default class ReportingApi {

    /**
    * Constructs a new ReportingApi. 
    * @alias module:api/ReportingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Batch Transaction Report Request
     * Retrieves transactions available on a given batch.
     * @param {Number} merchantid A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account.
     * @param {String} batch_no The batch number that is being requested.
     * @param {module:model/BatchTransactionReportRequest} batch_transaction_report_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchTransactionReportResponse} and HTTP response
     */
    batchedTransactionReportRequestWithHttpInfo(merchantid, batch_no, batch_transaction_report_request) {
      let postBody = batch_transaction_report_request;
      // verify the required parameter 'merchantid' is set
      if (merchantid === undefined || merchantid === null) {
        throw new Error("Missing the required parameter 'merchantid' when calling batchedTransactionReportRequest");
      }
      // verify the required parameter 'batch_no' is set
      if (batch_no === undefined || batch_no === null) {
        throw new Error("Missing the required parameter 'batch_no' when calling batchedTransactionReportRequest");
      }
      // verify the required parameter 'batch_transaction_report_request' is set
      if (batch_transaction_report_request === undefined || batch_transaction_report_request === null) {
        throw new Error("Missing the required parameter 'batch_transaction_report_request' when calling batchedTransactionReportRequest");
      }

      let pathParams = {
        'merchantid': merchantid,
        'batch_no': batch_no
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
      let returnType = BatchTransactionReportResponse;
      return this.apiClient.callApi(
        '/v6/merchant-batch/{merchantid}/{batch_no}/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Batch Transaction Report Request
     * Retrieves transactions available on a given batch.
     * @param {Number} merchantid A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account.
     * @param {String} batch_no The batch number that is being requested.
     * @param {module:model/BatchTransactionReportRequest} batch_transaction_report_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchTransactionReportResponse}
     */
    batchedTransactionReportRequest(merchantid, batch_no, batch_transaction_report_request) {
      return this.batchedTransactionReportRequestWithHttpInfo(merchantid, batch_no, batch_transaction_report_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Merchant Batch Report Request
     * Retrieves a report of merchant batches within a specified date range.  Batches, which aggregate daily processing activities, are typically generated at `00:00` each day.  These batches play a crucial role in the settlement of funds by summarising daily transactions. 
     * @param {module:model/MerchantBatchRequest} merchant_batch_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerchantBatchReportResponse} and HTTP response
     */
    merchantBatchReportRequestWithHttpInfo(merchant_batch_request) {
      let postBody = merchant_batch_request;
      // verify the required parameter 'merchant_batch_request' is set
      if (merchant_batch_request === undefined || merchant_batch_request === null) {
        throw new Error("Missing the required parameter 'merchant_batch_request' when calling merchantBatchReportRequest");
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
      let returnType = MerchantBatchReportResponse;
      return this.apiClient.callApi(
        '/v6/merchant-batch/report', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Merchant Batch Report Request
     * Retrieves a report of merchant batches within a specified date range.  Batches, which aggregate daily processing activities, are typically generated at `00:00` each day.  These batches play a crucial role in the settlement of funds by summarising daily transactions. 
     * @param {module:model/MerchantBatchRequest} merchant_batch_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerchantBatchReportResponse}
     */
    merchantBatchReportRequest(merchant_batch_request) {
      return this.merchantBatchReportRequestWithHttpInfo(merchant_batch_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Merchant Batch Request
     * Retrieves a report of merchant a merchant batch for a specified batch number.
     * @param {Number} merchantid A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account.
     * @param {String} batch_no The batch number that is being requested.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerchantBatchResponse} and HTTP response
     */
    merchantBatchRequestWithHttpInfo(merchantid, batch_no) {
      let postBody = null;
      // verify the required parameter 'merchantid' is set
      if (merchantid === undefined || merchantid === null) {
        throw new Error("Missing the required parameter 'merchantid' when calling merchantBatchRequest");
      }
      // verify the required parameter 'batch_no' is set
      if (batch_no === undefined || batch_no === null) {
        throw new Error("Missing the required parameter 'batch_no' when calling merchantBatchRequest");
      }

      let pathParams = {
        'merchantid': merchantid,
        'batch_no': batch_no
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
      let returnType = MerchantBatchResponse;
      return this.apiClient.callApi(
        '/v6/merchant-batch/{merchantid}/{batch_no}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Merchant Batch Request
     * Retrieves a report of merchant a merchant batch for a specified batch number.
     * @param {Number} merchantid A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account.
     * @param {String} batch_no The batch number that is being requested.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerchantBatchResponse}
     */
    merchantBatchRequest(merchantid, batch_no) {
      return this.merchantBatchRequestWithHttpInfo(merchantid, batch_no)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remittance Report Request
     * Fetches remittance reports for financial transactions within a specified date range, covering all client-related activities. This report consolidates all batches disbursed to a client, with each remittance summarising the aggregation of batches leading up to settlement. Additionally, the net remittance amount presented in the final settlement will reflect any deductions made by the acquirer. 
     * @param {String} clientid A client Id for which data is requested.
     * @param {module:model/RemittanceReportRequest} remittance_report_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemittanceReportResponse} and HTTP response
     */
    remittanceRangeReportWithHttpInfo(clientid, remittance_report_request) {
      let postBody = remittance_report_request;
      // verify the required parameter 'clientid' is set
      if (clientid === undefined || clientid === null) {
        throw new Error("Missing the required parameter 'clientid' when calling remittanceRangeReport");
      }
      // verify the required parameter 'remittance_report_request' is set
      if (remittance_report_request === undefined || remittance_report_request === null) {
        throw new Error("Missing the required parameter 'remittance_report_request' when calling remittanceRangeReport");
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
      let contentTypes = ['application/json', 'text/xml'];
      let accepts = ['application/json', 'text/xml'];
      let returnType = RemittanceReportResponse;
      return this.apiClient.callApi(
        '/v6/remittance/report/{clientid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remittance Report Request
     * Fetches remittance reports for financial transactions within a specified date range, covering all client-related activities. This report consolidates all batches disbursed to a client, with each remittance summarising the aggregation of batches leading up to settlement. Additionally, the net remittance amount presented in the final settlement will reflect any deductions made by the acquirer. 
     * @param {String} clientid A client Id for which data is requested.
     * @param {module:model/RemittanceReportRequest} remittance_report_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemittanceReportResponse}
     */
    remittanceRangeReport(clientid, remittance_report_request) {
      return this.remittanceRangeReportWithHttpInfo(clientid, remittance_report_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remittance Date Report Request
     * Fetches remittance reports for financial transactions for a given date,  covering all client-related activities. This report consolidates all batches disbursed to a  client, with each remittance summarising the aggregation of batches leading up to settlement.  Additionally, the net remittance amount presented in the final settlement will reflect any  deductions made by the acquirer.  The process also supports the notion of *today* deferring the date to today's date or *latest* reflecting the latest remittance date available. 
     * @param {String} clientid A client Id for which data is requested.
     * @param {String} date Date (YYYY-MM-DD) to filter the request for.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemittedClientData} and HTTP response
     */
    remittanceReportRequestWithHttpInfo(clientid, date) {
      let postBody = null;
      // verify the required parameter 'clientid' is set
      if (clientid === undefined || clientid === null) {
        throw new Error("Missing the required parameter 'clientid' when calling remittanceReportRequest");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling remittanceReportRequest");
      }

      let pathParams = {
        'clientid': clientid,
        'date': date
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
      let returnType = RemittedClientData;
      return this.apiClient.callApi(
        '/v6/remittance/report/{clientid}/{date}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remittance Date Report Request
     * Fetches remittance reports for financial transactions for a given date,  covering all client-related activities. This report consolidates all batches disbursed to a  client, with each remittance summarising the aggregation of batches leading up to settlement.  Additionally, the net remittance amount presented in the final settlement will reflect any  deductions made by the acquirer.  The process also supports the notion of *today* deferring the date to today's date or *latest* reflecting the latest remittance date available. 
     * @param {String} clientid A client Id for which data is requested.
     * @param {String} date Date (YYYY-MM-DD) to filter the request for.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemittedClientData}
     */
    remittanceReportRequest(clientid, date) {
      return this.remittanceReportRequestWithHttpInfo(clientid, date)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
