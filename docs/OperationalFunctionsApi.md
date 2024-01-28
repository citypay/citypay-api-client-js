# Citypay Api Client.OperationalFunctionsApi

All URIs are relative to *https://api.citypay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aclCheckRequest**](OperationalFunctionsApi.md#aclCheckRequest) | **POST** /v6/acl/check | ACL Check Request
[**domainKeyCheckRequest**](OperationalFunctionsApi.md#domainKeyCheckRequest) | **POST** /dk/check | Domain Key Check Request
[**domainKeyGenRequest**](OperationalFunctionsApi.md#domainKeyGenRequest) | **POST** /dk/gen | Domain Key Generation Request
[**listMerchantsRequest**](OperationalFunctionsApi.md#listMerchantsRequest) | **GET** /v6/merchants/{clientid} | List Merchants Request
[**pingRequest**](OperationalFunctionsApi.md#pingRequest) | **POST** /v6/ping | Ping Request



## aclCheckRequest

> AclCheckResponseModel aclCheckRequest(acl_check_request)

ACL Check Request

Allows the checking of IP addresses against configured ACLs. Requests can perform a lookup of addresses in subnets and
services such as AWS or Azure to check that those addresses are listed in the ACLs.


### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.OperationalFunctionsApi();
let acl_check_request = new CityPay.AclCheckRequest(); // AclCheckRequest | 
apiInstance.aclCheckRequest(acl_check_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acl_check_request** | [**AclCheckRequest**](AclCheckRequest.md)|  | 

### Return type

[**AclCheckResponseModel**](AclCheckResponseModel.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## domainKeyCheckRequest

> DomainKeyResponse domainKeyCheckRequest(domain_key_check_request)

Domain Key Check Request

Checks the contents of a `domain key`. Can be used for operational processes to ensure that the properties of a 
domain key meet their expectations.


### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.OperationalFunctionsApi();
let domain_key_check_request = new CityPay.DomainKeyCheckRequest(); // DomainKeyCheckRequest | 
apiInstance.domainKeyCheckRequest(domain_key_check_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain_key_check_request** | [**DomainKeyCheckRequest**](DomainKeyCheckRequest.md)|  | 

### Return type

[**DomainKeyResponse**](DomainKeyResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## domainKeyGenRequest

> DomainKeyResponse domainKeyGenRequest(domain_key_request)

Domain Key Generation Request

Generates a domain key based on the permissions of the calling `api-key`. Domain keys can be used in _Direct Post_ and
`XHR` calls to the API services.


### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.OperationalFunctionsApi();
let domain_key_request = new CityPay.DomainKeyRequest(); // DomainKeyRequest | 
apiInstance.domainKeyGenRequest(domain_key_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain_key_request** | [**DomainKeyRequest**](DomainKeyRequest.md)|  | 

### Return type

[**DomainKeyResponse**](DomainKeyResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## listMerchantsRequest

> ListMerchantsResponse listMerchantsRequest(clientid)

List Merchants Request

An operational request to list current merchants for a client.

### Sorting

Sorting can be performed by include a query parameter i.e. `/merchants/?sort=merchantid`

Fields that can be sorted are `merchantid` or `name`.


### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.OperationalFunctionsApi();
let clientid = "clientid_example"; // String | The client id to return merchants for, specifying \"default\" will use the value in your api key.
apiInstance.listMerchantsRequest(clientid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientid** | **String**| The client id to return merchants for, specifying \&quot;default\&quot; will use the value in your api key. | 

### Return type

[**ListMerchantsResponse**](ListMerchantsResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## pingRequest

> Acknowledgement pingRequest(ping)

Ping Request

A ping request which performs a connection and authentication test to the CityPay API server. The request
will return a standard Acknowledgement with a response code `044` to signify a successful
ping.

The ping call is useful to confirm that you will be able to access 
the API from behind any firewalls and that the permission
model is granting access from your source.


### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})
// Configure API key authorization: cp-domain-key
let cp-domain-key = defaultClient.authentications['cp-domain-key'];
cp-domain-key.apiKey = 'YOUR API KEY';
//cp-domain-key.apiKeyPrefix = 'Token';

let apiInstance = new CityPay.OperationalFunctionsApi();
let ping = new CityPay.Ping(); // Ping | 
apiInstance.pingRequest(ping).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ping** | [**Ping**](Ping.md)|  | 

### Return type

[**Acknowledgement**](Acknowledgement.md)

### Authorization

[cp-domain-key](../README.md#cp-domain-key), [cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, text/xml
- **Accept**: application/x-www-form-urlencoded, application/json, text/xml

