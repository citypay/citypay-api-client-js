# Citypay Api Client.ReportingApi

All URIs are relative to *https://api.citypay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchedTransactionReportRequest**](ReportingApi.md#batchedTransactionReportRequest) | **POST** /v6/merchant-batch/{merchantid}/{batch_no}/transactions | Batch Transaction Report Request
[**merchantBatchReportRequest**](ReportingApi.md#merchantBatchReportRequest) | **POST** /v6/merchant-batch/report | Merchant Batch Report Request
[**merchantBatchRequest**](ReportingApi.md#merchantBatchRequest) | **GET** /v6/merchant-batch/{merchantid}/{batch_no} | Merchant Batch Request
[**remittanceRangeReport**](ReportingApi.md#remittanceRangeReport) | **POST** /v6/remittance/report/{clientid} | Remittance Report Request
[**remittanceReportRequest**](ReportingApi.md#remittanceReportRequest) | **GET** /v6/remittance/report/{clientid}/{date} | Remittance Date Report Request



## batchedTransactionReportRequest

> BatchTransactionReportResponse batchedTransactionReportRequest(merchantid, batch_no, batch_transaction_report_request)

Batch Transaction Report Request

Retrieves transactions available on a given batch.

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.ReportingApi();
let merchantid = 56; // Number | A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account.
let batch_no = "batch_no_example"; // String | The batch number that is being requested.
let batch_transaction_report_request = new CityPay.BatchTransactionReportRequest(); // BatchTransactionReportRequest | 
apiInstance.batchedTransactionReportRequest(merchantid, batch_no, batch_transaction_report_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantid** | **Number**| A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account. | 
 **batch_no** | **String**| The batch number that is being requested. | 
 **batch_transaction_report_request** | [**BatchTransactionReportRequest**](BatchTransactionReportRequest.md)|  | 

### Return type

[**BatchTransactionReportResponse**](BatchTransactionReportResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## merchantBatchReportRequest

> MerchantBatchReportResponse merchantBatchReportRequest(merchant_batch_report_request)

Merchant Batch Report Request

Retrieves a report of merchant batches within a specified date range.  Batches, which aggregate daily processing activities, are typically generated at &#x60;00:00&#x60; each day.  These batches play a crucial role in the settlement of funds by summarising daily transactions. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.ReportingApi();
let merchant_batch_report_request = new CityPay.MerchantBatchReportRequest(); // MerchantBatchReportRequest | 
apiInstance.merchantBatchReportRequest(merchant_batch_report_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_batch_report_request** | [**MerchantBatchReportRequest**](MerchantBatchReportRequest.md)|  | 

### Return type

[**MerchantBatchReportResponse**](MerchantBatchReportResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## merchantBatchRequest

> MerchantBatchResponse merchantBatchRequest(merchantid, batch_no)

Merchant Batch Request

Retrieves a report of merchant a merchant batch for a specified batch number.

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.ReportingApi();
let merchantid = 56; // Number | A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account.
let batch_no = "batch_no_example"; // String | The batch number that is being requested.
apiInstance.merchantBatchRequest(merchantid, batch_no).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantid** | **Number**| A merchant ID (MID) for which data is requested. This field allows for filtering of the request by a specific merchant account. | 
 **batch_no** | **String**| The batch number that is being requested. | 

### Return type

[**MerchantBatchResponse**](MerchantBatchResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## remittanceRangeReport

> RemittanceReportResponse remittanceRangeReport(clientid, remittance_report_request)

Remittance Report Request

Fetches remittance reports for financial transactions within a specified date range, covering all client-related activities. This report consolidates all batches disbursed to a client, with each remittance summarising the aggregation of batches leading up to settlement. Additionally, the net remittance amount presented in the final settlement will reflect any deductions made by the acquirer. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.ReportingApi();
let clientid = "clientid_example"; // String | A client Id for which data is requested.
let remittance_report_request = new CityPay.RemittanceReportRequest(); // RemittanceReportRequest | 
apiInstance.remittanceRangeReport(clientid, remittance_report_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientid** | **String**| A client Id for which data is requested. | 
 **remittance_report_request** | [**RemittanceReportRequest**](RemittanceReportRequest.md)|  | 

### Return type

[**RemittanceReportResponse**](RemittanceReportResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## remittanceReportRequest

> RemittedClientData remittanceReportRequest(clientid, date)

Remittance Date Report Request

Fetches remittance reports for financial transactions for a given date,  covering all client-related activities. This report consolidates all batches disbursed to a  client, with each remittance summarising the aggregation of batches leading up to settlement.  Additionally, the net remittance amount presented in the final settlement will reflect any  deductions made by the acquirer.  The process also supports the notion of *today* deferring the date to today&#39;s date or *latest* reflecting the latest remittance date available. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.ReportingApi();
let clientid = "clientid_example"; // String | A client Id for which data is requested.
let date = "date_example"; // String | Date (YYYY-MM-DD) to filter the request for.
apiInstance.remittanceReportRequest(clientid, date).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientid** | **String**| A client Id for which data is requested. | 
 **date** | **String**| Date (YYYY-MM-DD) to filter the request for. | 

### Return type

[**RemittedClientData**](RemittedClientData.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml

