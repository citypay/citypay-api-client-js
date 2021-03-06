# citypay-api

Citypay Api Client - JavaScript client for citypay-api

This CityPay API is a HTTP RESTful payment API used for direct server to server transactional processing. It
provides a number of payment mechanisms including: Internet, MOTO, Continuous Authority transaction processing,
3-D Secure decision handling using RFA Secure, Authorisation, Refunding, Pre-Authorisation, Cancellation/Voids and
Completion processing. The API is also capable of tokinsed payments using Card Holder Accounts.

## Compliance and Security
<aside class=\"notice\">
  Before we begin a reminder that your application will need to adhere to PCI-DSS standards to operate safely
  and to meet requirements set out by Visa and MasterCard and the PCI Security Standards Council including:
</aside>

* Data must be collected using TLS version 1.2 using [strong cryptography](#enabled-tls-ciphers). We will not accept calls to our API at
  lower grade encryption levels. We regularly scan our TLS endpoints for vulnerabilities and perform TLS assessments
  as part of our compliance program.
* The application must not store sensitive card holder data (CHD) such as the card security code (CSC) or
  primary access number (PAN)
* The application must not display the full card number on receipts, it is recommended to mask the PAN
  and show the last 4 digits. The API will return this for you for ease of receipt creation
* If you are developing a website, you will be required to perform regular scans on the network where you host the
  application to meet your compliance obligations
* You will be required to be PCI Compliant and the application must adhere to the security standard. Further information
  is available from [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/)
* The API verifies that the request is for a valid account and originates from a trusted source using the remote IP
  address. Our application firewalls analyse data that may be an attempt to break a large number of security common
  security vulnerabilities.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 6.0.12
- Package version: 1.0.7
- Build date: 2020-10-22T10:37:45.703Z[GMT]
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://citypay.com/customer-centre/technical-support.html](https://citypay.com/customer-centre/technical-support.html)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install citypay-api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your citypay-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/citypay/citypay-api-client-js
then install it via:

```shell
    npm install citypay/citypay-api-client-js --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import CityPay from 'citypay-api';

let auth_request = new CityPay.AuthRequest();
auth_request.identifier = "example1";

new CityPay.PaymentProcessingApi().authorisationRequest(auth_request).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
}, (error) => {
    console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api.citypay.com/v6*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Citypay Api Client.CardHolderAccountApi* | [**accountCardDeleteRequest**](docs/CardHolderAccountApi.md#accountCardDeleteRequest) | **DELETE** /account/{accountid}/card/{cardId} | Card Deletion
*Citypay Api Client.CardHolderAccountApi* | [**accountCardRegisterRequest**](docs/CardHolderAccountApi.md#accountCardRegisterRequest) | **POST** /account/{accountid}/register | Card Registration
*Citypay Api Client.CardHolderAccountApi* | [**accountCardStatusRequest**](docs/CardHolderAccountApi.md#accountCardStatusRequest) | **POST** /account/{accountid}/card/{cardId}/status | Card Status
*Citypay Api Client.CardHolderAccountApi* | [**accountChangeContactRequest**](docs/CardHolderAccountApi.md#accountChangeContactRequest) | **POST** /account/{accountid}/contact | Contact Details Update
*Citypay Api Client.CardHolderAccountApi* | [**accountCreate**](docs/CardHolderAccountApi.md#accountCreate) | **POST** /account/create | Account Create
*Citypay Api Client.CardHolderAccountApi* | [**accountDeleteRequest**](docs/CardHolderAccountApi.md#accountDeleteRequest) | **DELETE** /account/{accountid} | Account Deletion
*Citypay Api Client.CardHolderAccountApi* | [**accountExistsRequest**](docs/CardHolderAccountApi.md#accountExistsRequest) | **GET** /account-exists/{accountid} | Account Exists
*Citypay Api Client.CardHolderAccountApi* | [**accountRetrieveRequest**](docs/CardHolderAccountApi.md#accountRetrieveRequest) | **GET** /account/{accountid} | Account Retrieval
*Citypay Api Client.CardHolderAccountApi* | [**accountStatusRequest**](docs/CardHolderAccountApi.md#accountStatusRequest) | **POST** /account/{accountid}/status | Account Status
*Citypay Api Client.CardHolderAccountApi* | [**chargeRequest**](docs/CardHolderAccountApi.md#chargeRequest) | **POST** /charge | Charge
*Citypay Api Client.OperationalApi* | [**listMerchantsRequest**](docs/OperationalApi.md#listMerchantsRequest) | **GET** /merchants/{clientid} | List Merchants Request
*Citypay Api Client.OperationalApi* | [**pingRequest**](docs/OperationalApi.md#pingRequest) | **POST** /ping | Ping Request
*Citypay Api Client.PaymentProcessingApi* | [**authorisationRequest**](docs/PaymentProcessingApi.md#authorisationRequest) | **POST** /authorise | Authorisation
*Citypay Api Client.PaymentProcessingApi* | [**cResRequest**](docs/PaymentProcessingApi.md#cResRequest) | **POST** /cres | CRes
*Citypay Api Client.PaymentProcessingApi* | [**captureRequest**](docs/PaymentProcessingApi.md#captureRequest) | **POST** /capture | Capture
*Citypay Api Client.PaymentProcessingApi* | [**paResRequest**](docs/PaymentProcessingApi.md#paResRequest) | **POST** /pares | PaRes
*Citypay Api Client.PaymentProcessingApi* | [**refundRequest**](docs/PaymentProcessingApi.md#refundRequest) | **POST** /refund | Refund
*Citypay Api Client.PaymentProcessingApi* | [**retrievalRequest**](docs/PaymentProcessingApi.md#retrievalRequest) | **POST** /retrieve | Retrieval
*Citypay Api Client.PaymentProcessingApi* | [**voidRequest**](docs/PaymentProcessingApi.md#voidRequest) | **POST** /void | Void


## Documentation for Models

 - [Citypay Api Client.AccountCreate](docs/AccountCreate.md)
 - [Citypay Api Client.AccountStatus](docs/AccountStatus.md)
 - [Citypay Api Client.Acknowledgement](docs/Acknowledgement.md)
 - [Citypay Api Client.AirlineAdvice](docs/AirlineAdvice.md)
 - [Citypay Api Client.AirlineSegment](docs/AirlineSegment.md)
 - [Citypay Api Client.AuthReference](docs/AuthReference.md)
 - [Citypay Api Client.AuthReferences](docs/AuthReferences.md)
 - [Citypay Api Client.AuthRequest](docs/AuthRequest.md)
 - [Citypay Api Client.AuthResponse](docs/AuthResponse.md)
 - [Citypay Api Client.AuthenRequired](docs/AuthenRequired.md)
 - [Citypay Api Client.CResAuthRequest](docs/CResAuthRequest.md)
 - [Citypay Api Client.CaptureRequest](docs/CaptureRequest.md)
 - [Citypay Api Client.Card](docs/Card.md)
 - [Citypay Api Client.CardHolderAccount](docs/CardHolderAccount.md)
 - [Citypay Api Client.CardStatus](docs/CardStatus.md)
 - [Citypay Api Client.ChargeRequest](docs/ChargeRequest.md)
 - [Citypay Api Client.ContactDetails](docs/ContactDetails.md)
 - [Citypay Api Client.Decision](docs/Decision.md)
 - [Citypay Api Client.Error](docs/Error.md)
 - [Citypay Api Client.Exists](docs/Exists.md)
 - [Citypay Api Client.ExternalMPI](docs/ExternalMPI.md)
 - [Citypay Api Client.ListMerchantsResponse](docs/ListMerchantsResponse.md)
 - [Citypay Api Client.MCC6012](docs/MCC6012.md)
 - [Citypay Api Client.Merchant](docs/Merchant.md)
 - [Citypay Api Client.PaResAuthRequest](docs/PaResAuthRequest.md)
 - [Citypay Api Client.Ping](docs/Ping.md)
 - [Citypay Api Client.RefundRequest](docs/RefundRequest.md)
 - [Citypay Api Client.RegisterCard](docs/RegisterCard.md)
 - [Citypay Api Client.RequestChallenged](docs/RequestChallenged.md)
 - [Citypay Api Client.RetrieveRequest](docs/RetrieveRequest.md)
 - [Citypay Api Client.ThreeDSecure](docs/ThreeDSecure.md)
 - [Citypay Api Client.VoidRequest](docs/VoidRequest.md)


## Documentation for Authorization



### cp-api-key


- **Type**: API key
- **API key parameter name**: cp-api-key
- **Location**: HTTP header

