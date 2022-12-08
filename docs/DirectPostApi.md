# Citypay Api Client.DirectPostApi

All URIs are relative to *https://api.citypay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directCResAuthRequest**](DirectPostApi.md#directCResAuthRequest) | **POST** /direct/cres/auth/{uuid} | Handles a CRes response from ACS, returning back the result of authorisation
[**directCResTokeniseRequest**](DirectPostApi.md#directCResTokeniseRequest) | **POST** /direct/cres/tokenise/{uuid} | Handles a CRes response from ACS, returning back a token for future authorisation
[**directPostAuthRequest**](DirectPostApi.md#directPostAuthRequest) | **POST** /direct/auth | Direct Post Auth Request
[**directPostTokeniseRequest**](DirectPostApi.md#directPostTokeniseRequest) | **POST** /direct/tokenise | Direct Post Tokenise Request
[**tokenRequest**](DirectPostApi.md#tokenRequest) | **POST** /direct/token | Direct Post Token Request



## directCResAuthRequest

> AuthResponse directCResAuthRequest(uuid, opts)

Handles a CRes response from ACS, returning back the result of authorisation

Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid &#x60;threeDSSessionData&#x60; value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a &#x60;Direct Post&#x60; integration who wish to handle the challenge flow themselves. 

### Example

```javascript
import CityPay from 'citypay-api';

let apiInstance = new CityPay.DirectPostApi();
let uuid = "uuid_example"; // String | An identifier used to track the CReq/CRes cycle.
let opts = {
  'cres': "cres_example", // String | The CRES from the ACS.
  'three_ds_session_data': "three_ds_session_data_example" // String | The session data from the ACS.
};
apiInstance.directCResAuthRequest(uuid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| An identifier used to track the CReq/CRes cycle. | 
 **cres** | **String**| The CRES from the ACS. | [optional] 
 **three_ds_session_data** | **String**| The session data from the ACS. | [optional] 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json, application/xml, application/x-www-form-urlencoded


## directCResTokeniseRequest

> TokenisationResponseModel directCResTokeniseRequest(uuid, opts)

Handles a CRes response from ACS, returning back a token for future authorisation

Used to post from an ACS during a ThreeDSecure direct flow process. The endpoint requires a valid &#x60;threeDSSessionData&#x60; value which defines the unique transaction through its workflow. This endpoint may be used by merchants wishing to perform a &#x60;Direct Post&#x60; integration who wish to handle the challenge flow themselves. 

### Example

```javascript
import CityPay from 'citypay-api';

let apiInstance = new CityPay.DirectPostApi();
let uuid = "uuid_example"; // String | An identifier used to track the CReq/CRes cycle.
let opts = {
  'cres': "cres_example", // String | The CRES from the ACS.
  'three_ds_session_data': "three_ds_session_data_example" // String | The session data from the ACS.
};
apiInstance.directCResTokeniseRequest(uuid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| An identifier used to track the CReq/CRes cycle. | 
 **cres** | **String**| The CRES from the ACS. | [optional] 
 **three_ds_session_data** | **String**| The session data from the ACS. | [optional] 

### Return type

[**TokenisationResponseModel**](TokenisationResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json, application/xml, application/x-www-form-urlencoded


## directPostAuthRequest

> AuthResponse directPostAuthRequest(direct_post_request)

Direct Post Auth Request

Used to initiate a direct post request transaction flow.  &lt;pre class&#x3D;\&quot;inline-code language-bash\&quot;&gt; &lt;code&gt; curl https://api.citypay.com/direct/auth?cp-domain-key&#x3D;n834ytqp84y... \\  -d \&quot;amount&#x3D;7500&amp;identifier&#x3D;example_trans&amp;cardnumber&#x3D;4000000000000002&amp;expmonth&#x3D;9&amp;expyear&#x3D;2028&amp;bill_to_postcode&#x3D;L1+7ZW &lt;/code&gt; &lt;/pre&gt;. 

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

let apiInstance = new CityPay.DirectPostApi();
let direct_post_request = new CityPay.DirectPostRequest(); // DirectPostRequest | 
apiInstance.directPostAuthRequest(direct_post_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direct_post_request** | [**DirectPostRequest**](DirectPostRequest.md)|  | 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key), [cp-domain-key](../README.md#cp-domain-key)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, text/xml
- **Accept**: application/json, application/xml, application/x-www-form-urlencoded, text/xml


## directPostTokeniseRequest

> AuthResponse directPostTokeniseRequest(direct_post_request)

Direct Post Tokenise Request

Used to initiate a direct post request transaction flow.  &lt;pre class&#x3D;\&quot;inline-code language-bash\&quot;&gt; &lt;code&gt; curl https://api.citypay.com/v6/direct?cp-domain-key&#x3D;n834ytqp84y... \\  -d \&quot;amount&#x3D;7500&amp;identifier&#x3D;example_trans&amp;cardnumber&#x3D;4000000000000002&amp;expmonth&#x3D;9&amp;expyear&#x3D;2028&amp;bill_to_postcode&#x3D;L1+7ZW &lt;/code&gt; &lt;/pre&gt;. 

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

let apiInstance = new CityPay.DirectPostApi();
let direct_post_request = new CityPay.DirectPostRequest(); // DirectPostRequest | 
apiInstance.directPostTokeniseRequest(direct_post_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direct_post_request** | [**DirectPostRequest**](DirectPostRequest.md)|  | 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key), [cp-domain-key](../README.md#cp-domain-key)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, text/xml
- **Accept**: application/json, application/xml, application/x-www-form-urlencoded, text/xml


## tokenRequest

> AuthResponse tokenRequest(direct_token_auth_request)

Direct Post Token Request

Perform a request for authorisation for a previously generated token. This flow will return an authorisation response stating that the transaction was approved or declined. 

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

let apiInstance = new CityPay.DirectPostApi();
let direct_token_auth_request = new CityPay.DirectTokenAuthRequest(); // DirectTokenAuthRequest | 
apiInstance.tokenRequest(direct_token_auth_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direct_token_auth_request** | [**DirectTokenAuthRequest**](DirectTokenAuthRequest.md)|  | 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

[cp-api-key](../README.md#cp-api-key), [cp-domain-key](../README.md#cp-domain-key)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, text/xml
- **Accept**: application/json, application/xml, application/x-www-form-urlencoded, text/xml

