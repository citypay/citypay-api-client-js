# Citypay Api Client.BatchProcessingApi

All URIs are relative to *https://api.citypay.com/v6*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchProcessRequest**](BatchProcessingApi.md#batchProcessRequest) | **POST** /batch/process | Batch Process Request
[**checkBatchStatusRequest**](BatchProcessingApi.md#checkBatchStatusRequest) | **POST** /batch/status | CheckBatchStatus
[**getBatchReportRequest**](BatchProcessingApi.md#getBatchReportRequest) | **POST** /batch/retrieve | BatchReportRequest



## batchProcessRequest

> ProcessBatchResponse batchProcessRequest(process_batch_request)

Batch Process Request

A batch process request is used to start the batch process workflow by uploading batch data and initialising a new batch for processing. Once validated the batch will be queued for processing and further updates can be received by a subsequent call to retrieve the batch status. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.BatchProcessingApi();
let process_batch_request = new CityPay.ProcessBatchRequest(); // ProcessBatchRequest | 
apiInstance.batchProcessRequest(process_batch_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_batch_request** | [**ProcessBatchRequest**](ProcessBatchRequest.md)|  | 

### Return type

[**ProcessBatchResponse**](ProcessBatchResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## checkBatchStatusRequest

> CheckBatchStatusResponse checkBatchStatusRequest(check_batch_status)

CheckBatchStatus

The operation is used to retrieve the status of a batch process.

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.BatchProcessingApi();
let check_batch_status = new CityPay.CheckBatchStatus(); // CheckBatchStatus | 
apiInstance.checkBatchStatusRequest(check_batch_status).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_batch_status** | [**CheckBatchStatus**](CheckBatchStatus.md)|  | 

### Return type

[**CheckBatchStatusResponse**](CheckBatchStatusResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## getBatchReportRequest

> BatchReportResponseModel getBatchReportRequest(batch_report_request)

BatchReportRequest

The operation is used to retrieve a report of the result of a batch process.

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.BatchProcessingApi();
let batch_report_request = new CityPay.BatchReportRequest(); // BatchReportRequest | 
apiInstance.getBatchReportRequest(batch_report_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_report_request** | [**BatchReportRequest**](BatchReportRequest.md)|  | 

### Return type

[**BatchReportResponseModel**](BatchReportResponseModel.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml

