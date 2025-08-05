# Citypay Api Client.PaymentIntentApi

All URIs are relative to *https://api.citypay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentIntent**](PaymentIntentApi.md#createPaymentIntent) | **POST** /v6/intent/create | Create a Payment Intent
[**getPaymentIntent**](PaymentIntentApi.md#getPaymentIntent) | **POST** /v6/intent/retrieve | Retrieves a Payment Intent



## createPaymentIntent

> PaymentIntentReference createPaymentIntent(payment_intent_request_model)

Create a Payment Intent

This endpoint initiates the creation of a payment intent, which is a precursor to processing a payment. A payment intent
captures the details of a prospective payment transaction, including the payment amount, currency, and associated
billing and shipping information.


### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.PaymentIntentApi();
let payment_intent_request_model = new CityPay.PaymentIntentRequestModel(); // PaymentIntentRequestModel | 
apiInstance.createPaymentIntent(payment_intent_request_model).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_intent_request_model** | [**PaymentIntentRequestModel**](PaymentIntentRequestModel.md)|  | 

### Return type

[**PaymentIntentReference**](PaymentIntentReference.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## getPaymentIntent

> PaymentIntentResponseModel getPaymentIntent(find_payment_intent_request)

Retrieves a Payment Intent

Obtains a payment intent.

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.PaymentIntentApi();
let find_payment_intent_request = new CityPay.FindPaymentIntentRequest(); // FindPaymentIntentRequest | 
apiInstance.getPaymentIntent(find_payment_intent_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find_payment_intent_request** | [**FindPaymentIntentRequest**](FindPaymentIntentRequest.md)|  | 

### Return type

[**PaymentIntentResponseModel**](PaymentIntentResponseModel.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml

