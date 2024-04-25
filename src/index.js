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


import ApiClient from './ApiClient';
import ApiKey from "./model/ApiKey";
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
import Batch from './model/Batch';
import BatchReportRequest from './model/BatchReportRequest';
import BatchReportResponseModel from './model/BatchReportResponseModel';
import BatchTransaction from './model/BatchTransaction';
import BatchTransactionReportRequest from './model/BatchTransactionReportRequest';
import BatchTransactionReportResponse from './model/BatchTransactionReportResponse';
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
import DirectPostRequest from './model/DirectPostRequest';
import DirectTokenAuthRequest from './model/DirectTokenAuthRequest';
import DomainKeyCheckRequest from './model/DomainKeyCheckRequest';
import DomainKeyRequest from './model/DomainKeyRequest';
import DomainKeyResponse from './model/DomainKeyResponse';
import Error from './model/Error';
import EventDataModel from './model/EventDataModel';
import Exists from './model/Exists';
import ExternalMPI from './model/ExternalMPI';
import ListMerchantsResponse from './model/ListMerchantsResponse';
import MCC6012 from './model/MCC6012';
import Merchant from './model/Merchant';
import MerchantBatchReportRequest from './model/MerchantBatchReportRequest';
import MerchantBatchReportResponse from './model/MerchantBatchReportResponse';
import MerchantBatchResponse from './model/MerchantBatchResponse';
import NetSummaryResponse from './model/NetSummaryResponse';
import PaResAuthRequest from './model/PaResAuthRequest';
import PaylinkAddress from './model/PaylinkAddress';
import PaylinkAdjustmentRequest from './model/PaylinkAdjustmentRequest';
import PaylinkAttachmentRequest from './model/PaylinkAttachmentRequest';
import PaylinkAttachmentResult from './model/PaylinkAttachmentResult';
import PaylinkBillPaymentTokenRequest from './model/PaylinkBillPaymentTokenRequest';
import PaylinkCardHolder from './model/PaylinkCardHolder';
import PaylinkCart from './model/PaylinkCart';
import PaylinkCartItemModel from './model/PaylinkCartItemModel';
import PaylinkConfig from './model/PaylinkConfig';
import PaylinkCustomParam from './model/PaylinkCustomParam';
import PaylinkEmailNotificationPath from './model/PaylinkEmailNotificationPath';
import PaylinkErrorCode from './model/PaylinkErrorCode';
import PaylinkFieldGuardModel from './model/PaylinkFieldGuardModel';
import PaylinkPartPayments from './model/PaylinkPartPayments';
import PaylinkResendNotificationRequest from './model/PaylinkResendNotificationRequest';
import PaylinkSMSNotificationPath from './model/PaylinkSMSNotificationPath';
import PaylinkStateEvent from './model/PaylinkStateEvent';
import PaylinkTokenCreated from './model/PaylinkTokenCreated';
import PaylinkTokenRequestModel from './model/PaylinkTokenRequestModel';
import PaylinkTokenStatus from './model/PaylinkTokenStatus';
import PaylinkTokenStatusChangeRequest from './model/PaylinkTokenStatusChangeRequest';
import PaylinkTokenStatusChangeResponse from './model/PaylinkTokenStatusChangeResponse';
import PaylinkUI from './model/PaylinkUI';
import PaymentIntent from './model/PaymentIntent';
import PaymentIntentReference from './model/PaymentIntentReference';
import Ping from './model/Ping';
import ProcessBatchRequest from './model/ProcessBatchRequest';
import ProcessBatchResponse from './model/ProcessBatchResponse';
import RefundRequest from './model/RefundRequest';
import RegisterCard from './model/RegisterCard';
import RemittanceData from './model/RemittanceData';
import RemittanceReportRequest from './model/RemittanceReportRequest';
import RemittanceReportResponse from './model/RemittanceReportResponse';
import RemittedClientData from './model/RemittedClientData';
import RequestChallenged from './model/RequestChallenged';
import RetrieveRequest from './model/RetrieveRequest';
import ThreeDSecure from './model/ThreeDSecure';
import TokenisationResponseModel from './model/TokenisationResponseModel';
import VoidRequest from './model/VoidRequest';
import AuthorisationAndPaymentApi from './api/AuthorisationAndPaymentApi';
import BatchProcessingApi from './api/BatchProcessingApi';
import CardHolderAccountApi from './api/CardHolderAccountApi';
import DirectPostApi from './api/DirectPostApi';
import OperationalFunctionsApi from './api/OperationalFunctionsApi';
import PaylinkApi from './api/PaylinkApi';
import ReportingApi from './api/ReportingApi';


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
     * The BatchTransactionReportRequest model constructor.
     * @property {module:model/BatchTransactionReportRequest}
     */
    BatchTransactionReportRequest,

    /**
     * The BatchTransactionReportResponse model constructor.
     * @property {module:model/BatchTransactionReportResponse}
     */
    BatchTransactionReportResponse,

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
     * The DirectPostRequest model constructor.
     * @property {module:model/DirectPostRequest}
     */
    DirectPostRequest,

    /**
     * The DirectTokenAuthRequest model constructor.
     * @property {module:model/DirectTokenAuthRequest}
     */
    DirectTokenAuthRequest,

    /**
     * The DomainKeyCheckRequest model constructor.
     * @property {module:model/DomainKeyCheckRequest}
     */
    DomainKeyCheckRequest,

    /**
     * The DomainKeyRequest model constructor.
     * @property {module:model/DomainKeyRequest}
     */
    DomainKeyRequest,

    /**
     * The DomainKeyResponse model constructor.
     * @property {module:model/DomainKeyResponse}
     */
    DomainKeyResponse,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The EventDataModel model constructor.
     * @property {module:model/EventDataModel}
     */
    EventDataModel,

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
     * The MerchantBatchReportRequest model constructor.
     * @property {module:model/MerchantBatchReportRequest}
     */
    MerchantBatchReportRequest,

    /**
     * The MerchantBatchReportResponse model constructor.
     * @property {module:model/MerchantBatchReportResponse}
     */
    MerchantBatchReportResponse,

    /**
     * The MerchantBatchResponse model constructor.
     * @property {module:model/MerchantBatchResponse}
     */
    MerchantBatchResponse,

    /**
     * The NetSummaryResponse model constructor.
     * @property {module:model/NetSummaryResponse}
     */
    NetSummaryResponse,

    /**
     * The PaResAuthRequest model constructor.
     * @property {module:model/PaResAuthRequest}
     */
    PaResAuthRequest,

    /**
     * The PaylinkAddress model constructor.
     * @property {module:model/PaylinkAddress}
     */
    PaylinkAddress,

    /**
     * The PaylinkAdjustmentRequest model constructor.
     * @property {module:model/PaylinkAdjustmentRequest}
     */
    PaylinkAdjustmentRequest,

    /**
     * The PaylinkAttachmentRequest model constructor.
     * @property {module:model/PaylinkAttachmentRequest}
     */
    PaylinkAttachmentRequest,

    /**
     * The PaylinkAttachmentResult model constructor.
     * @property {module:model/PaylinkAttachmentResult}
     */
    PaylinkAttachmentResult,

    /**
     * The PaylinkBillPaymentTokenRequest model constructor.
     * @property {module:model/PaylinkBillPaymentTokenRequest}
     */
    PaylinkBillPaymentTokenRequest,

    /**
     * The PaylinkCardHolder model constructor.
     * @property {module:model/PaylinkCardHolder}
     */
    PaylinkCardHolder,

    /**
     * The PaylinkCart model constructor.
     * @property {module:model/PaylinkCart}
     */
    PaylinkCart,

    /**
     * The PaylinkCartItemModel model constructor.
     * @property {module:model/PaylinkCartItemModel}
     */
    PaylinkCartItemModel,

    /**
     * The PaylinkConfig model constructor.
     * @property {module:model/PaylinkConfig}
     */
    PaylinkConfig,

    /**
     * The PaylinkCustomParam model constructor.
     * @property {module:model/PaylinkCustomParam}
     */
    PaylinkCustomParam,

    /**
     * The PaylinkEmailNotificationPath model constructor.
     * @property {module:model/PaylinkEmailNotificationPath}
     */
    PaylinkEmailNotificationPath,

    /**
     * The PaylinkErrorCode model constructor.
     * @property {module:model/PaylinkErrorCode}
     */
    PaylinkErrorCode,

    /**
     * The PaylinkFieldGuardModel model constructor.
     * @property {module:model/PaylinkFieldGuardModel}
     */
    PaylinkFieldGuardModel,

    /**
     * The PaylinkPartPayments model constructor.
     * @property {module:model/PaylinkPartPayments}
     */
    PaylinkPartPayments,

    /**
     * The PaylinkResendNotificationRequest model constructor.
     * @property {module:model/PaylinkResendNotificationRequest}
     */
    PaylinkResendNotificationRequest,

    /**
     * The PaylinkSMSNotificationPath model constructor.
     * @property {module:model/PaylinkSMSNotificationPath}
     */
    PaylinkSMSNotificationPath,

    /**
     * The PaylinkStateEvent model constructor.
     * @property {module:model/PaylinkStateEvent}
     */
    PaylinkStateEvent,

    /**
     * The PaylinkTokenCreated model constructor.
     * @property {module:model/PaylinkTokenCreated}
     */
    PaylinkTokenCreated,

    /**
     * The PaylinkTokenRequestModel model constructor.
     * @property {module:model/PaylinkTokenRequestModel}
     */
    PaylinkTokenRequestModel,

    /**
     * The PaylinkTokenStatus model constructor.
     * @property {module:model/PaylinkTokenStatus}
     */
    PaylinkTokenStatus,

    /**
     * The PaylinkTokenStatusChangeRequest model constructor.
     * @property {module:model/PaylinkTokenStatusChangeRequest}
     */
    PaylinkTokenStatusChangeRequest,

    /**
     * The PaylinkTokenStatusChangeResponse model constructor.
     * @property {module:model/PaylinkTokenStatusChangeResponse}
     */
    PaylinkTokenStatusChangeResponse,

    /**
     * The PaylinkUI model constructor.
     * @property {module:model/PaylinkUI}
     */
    PaylinkUI,

    /**
     * The PaymentIntent model constructor.
     * @property {module:model/PaymentIntent}
     */
    PaymentIntent,

    /**
     * The PaymentIntentReference model constructor.
     * @property {module:model/PaymentIntentReference}
     */
    PaymentIntentReference,

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
     * The RemittanceData model constructor.
     * @property {module:model/RemittanceData}
     */
    RemittanceData,

    /**
     * The RemittanceReportRequest model constructor.
     * @property {module:model/RemittanceReportRequest}
     */
    RemittanceReportRequest,

    /**
     * The RemittanceReportResponse model constructor.
     * @property {module:model/RemittanceReportResponse}
     */
    RemittanceReportResponse,

    /**
     * The RemittedClientData model constructor.
     * @property {module:model/RemittedClientData}
     */
    RemittedClientData,

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
     * The TokenisationResponseModel model constructor.
     * @property {module:model/TokenisationResponseModel}
     */
    TokenisationResponseModel,

    /**
     * The VoidRequest model constructor.
     * @property {module:model/VoidRequest}
     */
    VoidRequest,

    /**
    * The AuthorisationAndPaymentApi service constructor.
    * @property {module:api/AuthorisationAndPaymentApi}
    */
    AuthorisationAndPaymentApi,

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
    * The DirectPostApi service constructor.
    * @property {module:api/DirectPostApi}
    */
    DirectPostApi,

    /**
    * The OperationalFunctionsApi service constructor.
    * @property {module:api/OperationalFunctionsApi}
    */
    OperationalFunctionsApi,

    /**
    * The PaylinkApi service constructor.
    * @property {module:api/PaylinkApi}
    */
    PaylinkApi,

    /**
    * The ReportingApi service constructor.
    * @property {module:api/ReportingApi}
    */
    ReportingApi
};
