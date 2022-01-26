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


import ApiClient from './ApiClient';
import AccountCreate from './model/AccountCreate';
import AccountStatus from './model/AccountStatus';
import Acknowledgement from './model/Acknowledgement';
import AclCheckRequest from './model/AclCheckRequest';
import AclCheckResponseModel from './model/AclCheckResponseModel';
import AirlineAdvice from './model/AirlineAdvice';
import AirlineSegment from './model/AirlineSegment';
import AuthReference from './model/AuthReference';
import AuthReferences from './model/AuthReferences';
import AuthRequest from './model/AuthRequest';
import AuthResponse from './model/AuthResponse';
import AuthenRequired from './model/AuthenRequired';
import Batch from './model/Batch';
import BatchReportRequest from './model/BatchReportRequest';
import BatchReportResponseModel from './model/BatchReportResponseModel';
import BatchTransaction from './model/BatchTransaction';
import BatchTransactionResultModel from './model/BatchTransactionResultModel';
import Bin from './model/Bin';
import BinLookup from './model/BinLookup';
import CResAuthRequest from './model/CResAuthRequest';
import CaptureRequest from './model/CaptureRequest';
import Card from './model/Card';
import CardHolderAccount from './model/CardHolderAccount';
import CardStatus from './model/CardStatus';
import ChargeRequest from './model/ChargeRequest';
import CheckBatchStatus from './model/CheckBatchStatus';
import CheckBatchStatusResponse from './model/CheckBatchStatusResponse';
import ContactDetails from './model/ContactDetails';
import Decision from './model/Decision';
import Error from './model/Error';
import Exists from './model/Exists';
import ExternalMPI from './model/ExternalMPI';
import ListMerchantsResponse from './model/ListMerchantsResponse';
import MCC6012 from './model/MCC6012';
import Merchant from './model/Merchant';
import PaResAuthRequest from './model/PaResAuthRequest';
import Ping from './model/Ping';
import ProcessBatchRequest from './model/ProcessBatchRequest';
import ProcessBatchResponse from './model/ProcessBatchResponse';
import RefundRequest from './model/RefundRequest';
import RegisterCard from './model/RegisterCard';
import RequestChallenged from './model/RequestChallenged';
import RetrieveRequest from './model/RetrieveRequest';
import ThreeDSecure from './model/ThreeDSecure';
import VoidRequest from './model/VoidRequest';
import BatchProcessingApi from './api/BatchProcessingApi';
import CardHolderAccountApi from './api/CardHolderAccountApi';
import OperationalApi from './api/OperationalApi';
import PaymentProcessingApi from './api/PaymentProcessingApi';
import ApiKey from "./model/ApiKey";


/**
* JavaScript ECMAScript 6 client for the CityPay API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Citypay Api Client = require('index'); // See note below*.
* var xxxSvc = new Citypay Api Client.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Citypay Api Client.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Citypay Api Client.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Citypay Api Client.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
*/
export {

    ApiKey,

    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountCreate model constructor.
     * @property {module:model/AccountCreate}
     */
    AccountCreate,

    /**
     * The AccountStatus model constructor.
     * @property {module:model/AccountStatus}
     */
    AccountStatus,

    /**
     * The Acknowledgement model constructor.
     * @property {module:model/Acknowledgement}
     */
    Acknowledgement,

    /**
     * The AclCheckRequest model constructor.
     * @property {module:model/AclCheckRequest}
     */
    AclCheckRequest,

    /**
     * The AclCheckResponseModel model constructor.
     * @property {module:model/AclCheckResponseModel}
     */
    AclCheckResponseModel,

    /**
     * The AirlineAdvice model constructor.
     * @property {module:model/AirlineAdvice}
     */
    AirlineAdvice,

    /**
     * The AirlineSegment model constructor.
     * @property {module:model/AirlineSegment}
     */
    AirlineSegment,

    /**
     * The AuthReference model constructor.
     * @property {module:model/AuthReference}
     */
    AuthReference,

    /**
     * The AuthReferences model constructor.
     * @property {module:model/AuthReferences}
     */
    AuthReferences,

    /**
     * The AuthRequest model constructor.
     * @property {module:model/AuthRequest}
     */
    AuthRequest,

    /**
     * The AuthResponse model constructor.
     * @property {module:model/AuthResponse}
     */
    AuthResponse,

    /**
     * The AuthenRequired model constructor.
     * @property {module:model/AuthenRequired}
     */
    AuthenRequired,

    /**
     * The Batch model constructor.
     * @property {module:model/Batch}
     */
    Batch,

    /**
     * The BatchReportRequest model constructor.
     * @property {module:model/BatchReportRequest}
     */
    BatchReportRequest,

    /**
     * The BatchReportResponseModel model constructor.
     * @property {module:model/BatchReportResponseModel}
     */
    BatchReportResponseModel,

    /**
     * The BatchTransaction model constructor.
     * @property {module:model/BatchTransaction}
     */
    BatchTransaction,

    /**
     * The BatchTransactionResultModel model constructor.
     * @property {module:model/BatchTransactionResultModel}
     */
    BatchTransactionResultModel,

    /**
     * The Bin model constructor.
     * @property {module:model/Bin}
     */
    Bin,

    /**
     * The BinLookup model constructor.
     * @property {module:model/BinLookup}
     */
    BinLookup,

    /**
     * The CResAuthRequest model constructor.
     * @property {module:model/CResAuthRequest}
     */
    CResAuthRequest,

    /**
     * The CaptureRequest model constructor.
     * @property {module:model/CaptureRequest}
     */
    CaptureRequest,

    /**
     * The Card model constructor.
     * @property {module:model/Card}
     */
    Card,

    /**
     * The CardHolderAccount model constructor.
     * @property {module:model/CardHolderAccount}
     */
    CardHolderAccount,

    /**
     * The CardStatus model constructor.
     * @property {module:model/CardStatus}
     */
    CardStatus,

    /**
     * The ChargeRequest model constructor.
     * @property {module:model/ChargeRequest}
     */
    ChargeRequest,

    /**
     * The CheckBatchStatus model constructor.
     * @property {module:model/CheckBatchStatus}
     */
    CheckBatchStatus,

    /**
     * The CheckBatchStatusResponse model constructor.
     * @property {module:model/CheckBatchStatusResponse}
     */
    CheckBatchStatusResponse,

    /**
     * The ContactDetails model constructor.
     * @property {module:model/ContactDetails}
     */
    ContactDetails,

    /**
     * The Decision model constructor.
     * @property {module:model/Decision}
     */
    Decision,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Exists model constructor.
     * @property {module:model/Exists}
     */
    Exists,

    /**
     * The ExternalMPI model constructor.
     * @property {module:model/ExternalMPI}
     */
    ExternalMPI,

    /**
     * The ListMerchantsResponse model constructor.
     * @property {module:model/ListMerchantsResponse}
     */
    ListMerchantsResponse,

    /**
     * The MCC6012 model constructor.
     * @property {module:model/MCC6012}
     */
    MCC6012,

    /**
     * The Merchant model constructor.
     * @property {module:model/Merchant}
     */
    Merchant,

    /**
     * The PaResAuthRequest model constructor.
     * @property {module:model/PaResAuthRequest}
     */
    PaResAuthRequest,

    /**
     * The Ping model constructor.
     * @property {module:model/Ping}
     */
    Ping,

    /**
     * The ProcessBatchRequest model constructor.
     * @property {module:model/ProcessBatchRequest}
     */
    ProcessBatchRequest,

    /**
     * The ProcessBatchResponse model constructor.
     * @property {module:model/ProcessBatchResponse}
     */
    ProcessBatchResponse,

    /**
     * The RefundRequest model constructor.
     * @property {module:model/RefundRequest}
     */
    RefundRequest,

    /**
     * The RegisterCard model constructor.
     * @property {module:model/RegisterCard}
     */
    RegisterCard,

    /**
     * The RequestChallenged model constructor.
     * @property {module:model/RequestChallenged}
     */
    RequestChallenged,

    /**
     * The RetrieveRequest model constructor.
     * @property {module:model/RetrieveRequest}
     */
    RetrieveRequest,

    /**
     * The ThreeDSecure model constructor.
     * @property {module:model/ThreeDSecure}
     */
    ThreeDSecure,

    /**
     * The VoidRequest model constructor.
     * @property {module:model/VoidRequest}
     */
    VoidRequest,

    /**
    * The BatchProcessingApi service constructor.
    * @property {module:api/BatchProcessingApi}
    */
    BatchProcessingApi,

    /**
    * The CardHolderAccountApi service constructor.
    * @property {module:api/CardHolderAccountApi}
    */
    CardHolderAccountApi,

    /**
    * The OperationalApi service constructor.
    * @property {module:api/OperationalApi}
    */
    OperationalApi,

    /**
    * The PaymentProcessingApi service constructor.
    * @property {module:api/PaymentProcessingApi}
    */
    PaymentProcessingApi
};
