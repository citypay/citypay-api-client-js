# Citypay Api Client.CardHolderAccountApi

All URIs are relative to *https://api.citypay.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountCardDeleteRequest**](CardHolderAccountApi.md#accountCardDeleteRequest) | **DELETE** /v6/account/{accountid}/card/{cardId} | Card Deletion
[**accountCardRegisterRequest**](CardHolderAccountApi.md#accountCardRegisterRequest) | **POST** /v6/account/{accountid}/register | Card Registration
[**accountCardStatusRequest**](CardHolderAccountApi.md#accountCardStatusRequest) | **POST** /v6/account/{accountid}/card/{cardId}/status | Card Status
[**accountChangeContactRequest**](CardHolderAccountApi.md#accountChangeContactRequest) | **POST** /v6/account/{accountid}/contact | Contact Details Update
[**accountCreate**](CardHolderAccountApi.md#accountCreate) | **POST** /v6/account/create | Account Create
[**accountDeleteRequest**](CardHolderAccountApi.md#accountDeleteRequest) | **DELETE** /v6/account/{accountid} | Account Deletion
[**accountExistsRequest**](CardHolderAccountApi.md#accountExistsRequest) | **GET** /v6/account-exists/{accountid} | Account Exists
[**accountRetrieveRequest**](CardHolderAccountApi.md#accountRetrieveRequest) | **GET** /v6/account/{accountid} | Account Retrieval
[**accountStatusRequest**](CardHolderAccountApi.md#accountStatusRequest) | **POST** /v6/account/{accountid}/status | Account Status
[**chargeRequest**](CardHolderAccountApi.md#chargeRequest) | **POST** /v6/charge | Charge



## accountCardDeleteRequest

> Acknowledgement accountCardDeleteRequest(accountid, card_id, opts)

Card Deletion

Deletes a card from the account. The card will be marked for deletion before a subsequent purge will clear the card permanently. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
let card_id = "card_id_example"; // String | The id of the card that is presented by a call to retrieve a card holder account.
let opts = {
  'force': true // Boolean | Requests that the item is forced immediately.
};
apiInstance.accountCardDeleteRequest(accountid, card_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 
 **card_id** | **String**| The id of the card that is presented by a call to retrieve a card holder account. | 
 **force** | **Boolean**| Requests that the item is forced immediately. | [optional] 

### Return type

[**Acknowledgement**](Acknowledgement.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## accountCardRegisterRequest

> CardHolderAccount accountCardRegisterRequest(accountid, register_card)

Card Registration

Allows for a card to be registered for the account. The card will be added for future  processing and will be available as a tokenised value for future processing.  The card will be validated for  0. Being a valid card number (luhn check) 0. Having a valid expiry date 0. Being a valid bin value. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
let register_card = new CityPay.RegisterCard(); // RegisterCard | 
apiInstance.accountCardRegisterRequest(accountid, register_card).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 
 **register_card** | [**RegisterCard**](RegisterCard.md)|  | 

### Return type

[**CardHolderAccount**](CardHolderAccount.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## accountCardStatusRequest

> Acknowledgement accountCardStatusRequest(accountid, card_id, card_status)

Card Status

Updates the status of a card for processing. The following values are available  | Status | Description |  |--------|-------------| | Active | The card is active for processing and can be used for charging against with a valid token | | Inactive | The card is inactive for processing and cannot be used for processing, it will require reactivation before being used to charge | | Expired | The card has expired either due to the expiry date no longer being valid or due to a replacement card being issued | 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
let card_id = "card_id_example"; // String | The id of the card that is presented by a call to retrieve a card holder account.
let card_status = new CityPay.CardStatus(); // CardStatus | 
apiInstance.accountCardStatusRequest(accountid, card_id, card_status).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 
 **card_id** | **String**| The id of the card that is presented by a call to retrieve a card holder account. | 
 **card_status** | [**CardStatus**](CardStatus.md)|  | 

### Return type

[**Acknowledgement**](Acknowledgement.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## accountChangeContactRequest

> CardHolderAccount accountChangeContactRequest(accountid, contact_details)

Contact Details Update

Allows for the ability to change the contact details for an account.

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
let contact_details = new CityPay.ContactDetails(); // ContactDetails | 
apiInstance.accountChangeContactRequest(accountid, contact_details).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 
 **contact_details** | [**ContactDetails**](ContactDetails.md)|  | 

### Return type

[**CardHolderAccount**](CardHolderAccount.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## accountCreate

> CardHolderAccount accountCreate(account_create)

Account Create

Creates a new card holder account and initialises the account ready for adding cards.

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let account_create = new CityPay.AccountCreate(); // AccountCreate | 
apiInstance.accountCreate(account_create).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_create** | [**AccountCreate**](AccountCreate.md)|  | 

### Return type

[**CardHolderAccount**](CardHolderAccount.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## accountDeleteRequest

> Acknowledgement accountDeleteRequest(accountid)

Account Deletion

Allows for the deletion of an account. The account will marked for deletion and subsequent purging. No further transactions will be alowed to be processed or actioned against this account. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
apiInstance.accountDeleteRequest(accountid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 

### Return type

[**Acknowledgement**](Acknowledgement.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## accountExistsRequest

> Exists accountExistsRequest(accountid)

Account Exists

Checks that an account exists and is active by providing the account id as a url parameter. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
apiInstance.accountExistsRequest(accountid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 

### Return type

[**Exists**](Exists.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## accountRetrieveRequest

> CardHolderAccount accountRetrieveRequest(accountid)

Account Retrieval

Allows for the retrieval of a card holder account for the given &#x60;id&#x60;. Should duplicate accounts exist for the same &#x60;id&#x60;, the first account created with that &#x60;id&#x60; will be returned.  The account can be used for tokenisation processing by listing all cards assigned to the account. The returned cards will include all &#x60;active&#x60;, &#x60;inactive&#x60; and &#x60;expired&#x60; cards. This can be used to  enable a card holder to view their wallet and make constructive choices on which card to use. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
apiInstance.accountRetrieveRequest(accountid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 

### Return type

[**CardHolderAccount**](CardHolderAccount.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml


## accountStatusRequest

> Acknowledgement accountStatusRequest(accountid, account_status)

Account Status

Updates the status of an account. An account can have the following statuses applied  | Status | Description | |--------|-------------| | Active | The account is active for processing | | Disabled | The account has been disabled and cannot be used for processing. The account will require reactivation to continue procesing | 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let accountid = "accountid_example"; // String | The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
let account_status = new CityPay.AccountStatus(); // AccountStatus | 
apiInstance.accountStatusRequest(accountid, account_status).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountid** | **String**| The account id that refers to the customer&#39;s account no. This value will have been provided when setting up the card holder account. | 
 **account_status** | [**AccountStatus**](AccountStatus.md)|  | 

### Return type

[**Acknowledgement**](Acknowledgement.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml


## chargeRequest

> Decision chargeRequest(charge_request)

Charge

A charge process obtains an authorisation using a tokenised value which represents a stored card  on a card holder account.  A card must previously be registered by calling &#x60;/account-register-card&#x60; with the card details  or retrieved using &#x60;/account-retrieve&#x60;  Tokens are generated whenever a previously registered list of cards are retrieved. Each token has, by design a  relatively short time to live of 30 minutes. This is both to safe guard the merchant and card holder from  replay attacks. Tokens are also restricted to your account, preventing malicious actors from stealing details for use elsewhere.    If a token is reused after it has expired it will be rejected and a new token will be required.   Tokenisation can be used for   - repeat authorisations on a previously stored card - easy authorisations just requiring CSC values to be entered - can be used for credential on file style payments - can require full 3-D Secure authentication to retain the liability shift - wallet style usage    _Should an account be used with 3DSv2, the card holder name should also be stored alongside the card as this is a required field with both Visa and MasterCard for risk analysis._. 

### Example

```javascript
import CityPay from 'citypay-api';
let client = new CityPay.ApiClient({
    "sandbox": true,
    "client_id": process.env.CP_CLIENT_ID,
    "licence_key": process.env.CP_LICENCE_KEY
})

let apiInstance = new CityPay.CardHolderAccountApi();
let charge_request = new CityPay.ChargeRequest(); // ChargeRequest | 
apiInstance.chargeRequest(charge_request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **charge_request** | [**ChargeRequest**](ChargeRequest.md)|  | 

### Return type

[**Decision**](Decision.md)

### Authorization

[cp-api-key](../README.md#cp-api-key)

### HTTP request headers

- **Content-Type**: application/json, text/xml
- **Accept**: application/json, text/xml

