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


import ApiClient from "../ApiClient";
import AccountCreate from '../model/AccountCreate';
import AccountStatus from '../model/AccountStatus';
import Acknowledgement from '../model/Acknowledgement';
import CardHolderAccount from '../model/CardHolderAccount';
import CardStatus from '../model/CardStatus';
import ChargeRequest from '../model/ChargeRequest';
import ContactDetails from '../model/ContactDetails';
import Decision from '../model/Decision';
import Error from '../model/Error';
import RegisterCard from '../model/RegisterCard';

/**
* CardHolderAccount service.
* @module api/CardHolderAccountApi
* @version 1.0.0
*/
export default class CardHolderAccountApi {

    /**
    * Constructs a new CardHolderAccountApi. 
    * @alias module:api/CardHolderAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Card Deletion
     * Deletes a card from the account. The card will be marked for deletion before a subsequent purge will clear the card permanently. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {String} card_id The id of the card that is presented by a call to retrieve a card holder account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Acknowledgement} and HTTP response
     */
    accountCardDeleteRequestWithHttpInfo(accountid, card_id) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling accountCardDeleteRequest");
      }
      // verify the required parameter 'card_id' is set
      if (card_id === undefined || card_id === null) {
        throw new Error("Missing the required parameter 'card_id' when calling accountCardDeleteRequest");
      }

      let pathParams = {
        'accountid': accountid,
        'cardId': card_id
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
      let returnType = Acknowledgement;
      return this.apiClient.callApi(
        '/account/{accountid}/card/{cardId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Card Deletion
     * Deletes a card from the account. The card will be marked for deletion before a subsequent purge will clear the card permanently. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {String} card_id The id of the card that is presented by a call to retrieve a card holder account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Acknowledgement}
     */
    accountCardDeleteRequest(accountid, card_id) {
      return this.accountCardDeleteRequestWithHttpInfo(accountid, card_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Card Registration
     * Allows for a card to be registered for the account. The card will be added for future  processing and will be available as a tokenised value for future processing.  The card will be validated for  0. Being a valid card number (luhn check) 0. Having a valid expiry date 0. Being a valid bin value. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {module:model/RegisterCard} register_card 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CardHolderAccount} and HTTP response
     */
    accountCardRegisterRequestWithHttpInfo(accountid, register_card) {
      let postBody = register_card;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling accountCardRegisterRequest");
      }
      // verify the required parameter 'register_card' is set
      if (register_card === undefined || register_card === null) {
        throw new Error("Missing the required parameter 'register_card' when calling accountCardRegisterRequest");
      }

      let pathParams = {
        'accountid': accountid
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
      let returnType = CardHolderAccount;
      return this.apiClient.callApi(
        '/account/{accountid}/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Card Registration
     * Allows for a card to be registered for the account. The card will be added for future  processing and will be available as a tokenised value for future processing.  The card will be validated for  0. Being a valid card number (luhn check) 0. Having a valid expiry date 0. Being a valid bin value. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {module:model/RegisterCard} register_card 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CardHolderAccount}
     */
    accountCardRegisterRequest(accountid, register_card) {
      return this.accountCardRegisterRequestWithHttpInfo(accountid, register_card)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Card Status
     * Updates the status of a card for processing. The following values are available  | Status | Description |  |--------|-------------| | Active | The card is active for processing and can be used for charging against with a valid token | | Inactive | The card is inactive for processing and cannot be used for processing, it will require reactivation before being used to charge | | Expired | The card has expired either due to the expiry date no longer being valid or due to a replacement card being issued | 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {String} card_id The id of the card that is presented by a call to retrieve a card holder account.
     * @param {module:model/CardStatus} card_status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Acknowledgement} and HTTP response
     */
    accountCardStatusRequestWithHttpInfo(accountid, card_id, card_status) {
      let postBody = card_status;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling accountCardStatusRequest");
      }
      // verify the required parameter 'card_id' is set
      if (card_id === undefined || card_id === null) {
        throw new Error("Missing the required parameter 'card_id' when calling accountCardStatusRequest");
      }
      // verify the required parameter 'card_status' is set
      if (card_status === undefined || card_status === null) {
        throw new Error("Missing the required parameter 'card_status' when calling accountCardStatusRequest");
      }

      let pathParams = {
        'accountid': accountid,
        'cardId': card_id
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
      let returnType = Acknowledgement;
      return this.apiClient.callApi(
        '/account/{accountid}/card/{cardId}/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Card Status
     * Updates the status of a card for processing. The following values are available  | Status | Description |  |--------|-------------| | Active | The card is active for processing and can be used for charging against with a valid token | | Inactive | The card is inactive for processing and cannot be used for processing, it will require reactivation before being used to charge | | Expired | The card has expired either due to the expiry date no longer being valid or due to a replacement card being issued | 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {String} card_id The id of the card that is presented by a call to retrieve a card holder account.
     * @param {module:model/CardStatus} card_status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Acknowledgement}
     */
    accountCardStatusRequest(accountid, card_id, card_status) {
      return this.accountCardStatusRequestWithHttpInfo(accountid, card_id, card_status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Contact Details Update
     * Allows for the ability to change the contact details for an account.
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {module:model/ContactDetails} contact_details 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CardHolderAccount} and HTTP response
     */
    accountChangeContactRequestWithHttpInfo(accountid, contact_details) {
      let postBody = contact_details;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling accountChangeContactRequest");
      }
      // verify the required parameter 'contact_details' is set
      if (contact_details === undefined || contact_details === null) {
        throw new Error("Missing the required parameter 'contact_details' when calling accountChangeContactRequest");
      }

      let pathParams = {
        'accountid': accountid
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
      let returnType = CardHolderAccount;
      return this.apiClient.callApi(
        '/account/{accountid}/contact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Contact Details Update
     * Allows for the ability to change the contact details for an account.
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {module:model/ContactDetails} contact_details 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CardHolderAccount}
     */
    accountChangeContactRequest(accountid, contact_details) {
      return this.accountChangeContactRequestWithHttpInfo(accountid, contact_details)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Account Create
     * Creates a new card holder account and initialises the account ready for adding cards.
     * @param {module:model/AccountCreate} account_create 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CardHolderAccount} and HTTP response
     */
    accountCreateWithHttpInfo(account_create) {
      let postBody = account_create;
      // verify the required parameter 'account_create' is set
      if (account_create === undefined || account_create === null) {
        throw new Error("Missing the required parameter 'account_create' when calling accountCreate");
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
      let returnType = CardHolderAccount;
      return this.apiClient.callApi(
        '/account/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Account Create
     * Creates a new card holder account and initialises the account ready for adding cards.
     * @param {module:model/AccountCreate} account_create 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CardHolderAccount}
     */
    accountCreate(account_create) {
      return this.accountCreateWithHttpInfo(account_create)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Account Deletion
     * Allows for the deletion of an account. The account will marked for deletion and subsequent purging. No further transactions will be alowed to be processed or actioned against this account. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Acknowledgement} and HTTP response
     */
    accountDeleteRequestWithHttpInfo(accountid) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling accountDeleteRequest");
      }

      let pathParams = {
        'accountid': accountid
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
      let returnType = Acknowledgement;
      return this.apiClient.callApi(
        '/account/{accountid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Account Deletion
     * Allows for the deletion of an account. The account will marked for deletion and subsequent purging. No further transactions will be alowed to be processed or actioned against this account. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Acknowledgement}
     */
    accountDeleteRequest(accountid) {
      return this.accountDeleteRequestWithHttpInfo(accountid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Account Retrieval
     * Allows for the retrieval of a card holder account for the given `id`. Should duplicate accounts exist for the same `id`, the first account created with that `id` will be returned.  The account can be used for tokenisation processing by listing all cards assigned to the account. The returned cards will include all `active`, `inactive` and `expired` cards. This can be used to  enable a card holder to view their wallet and make constructive choices on which card to use. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CardHolderAccount} and HTTP response
     */
    accountRetrieveRequestWithHttpInfo(accountid) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling accountRetrieveRequest");
      }

      let pathParams = {
        'accountid': accountid
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
      let returnType = CardHolderAccount;
      return this.apiClient.callApi(
        '/account/{accountid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Account Retrieval
     * Allows for the retrieval of a card holder account for the given `id`. Should duplicate accounts exist for the same `id`, the first account created with that `id` will be returned.  The account can be used for tokenisation processing by listing all cards assigned to the account. The returned cards will include all `active`, `inactive` and `expired` cards. This can be used to  enable a card holder to view their wallet and make constructive choices on which card to use. 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CardHolderAccount}
     */
    accountRetrieveRequest(accountid) {
      return this.accountRetrieveRequestWithHttpInfo(accountid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Account Status
     * Updates the status of an account. An account can have the following statuses applied  | Status | Description | |--------|-------------| | Active | The account is active for processing | | Disabled | The account has been disabled and cannot be used for processing. The account will require reactivation to continue procesing | 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {module:model/AccountStatus} account_status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Acknowledgement} and HTTP response
     */
    accountStatusRequestWithHttpInfo(accountid, account_status) {
      let postBody = account_status;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling accountStatusRequest");
      }
      // verify the required parameter 'account_status' is set
      if (account_status === undefined || account_status === null) {
        throw new Error("Missing the required parameter 'account_status' when calling accountStatusRequest");
      }

      let pathParams = {
        'accountid': accountid
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
      let returnType = Acknowledgement;
      return this.apiClient.callApi(
        '/account/{accountid}/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Account Status
     * Updates the status of an account. An account can have the following statuses applied  | Status | Description | |--------|-------------| | Active | The account is active for processing | | Disabled | The account has been disabled and cannot be used for processing. The account will require reactivation to continue procesing | 
     * @param {String} accountid The account id that refers to the customer's account no. This value will have been provided when setting up the card holder account.
     * @param {module:model/AccountStatus} account_status 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Acknowledgement}
     */
    accountStatusRequest(accountid, account_status) {
      return this.accountStatusRequestWithHttpInfo(accountid, account_status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Charge
     * A charge process obtains an authorisation using a tokenised value which represents a stored card  on a card holder account.  A card must previously be registered by calling `/account-register-card` with the card details  or retrieved using `/account-retrieve`  Tokens are generated whenever a previously registered list of cards are retrieved. Each token has, by design a  relatively short time to live of 30 minutes. This is both to safe guard the merchant and card holder from  replay attacks. Tokens are also restricted to your account, preventing malicious actors from stealing details for use elsewhere.    If a token is reused after it has expired it will be rejected and a new token will be required.   Tokenisation can be used for   - repeat authorisations on a previously stored card - easy authorisations just requiring CSC values to be entered - can be used for credential on file style payments - can require full 3-D Secure authentication to retain the liability shift - wallet style usage. 
     * @param {module:model/ChargeRequest} charge_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Decision} and HTTP response
     */
    chargeRequestWithHttpInfo(charge_request) {
      let postBody = charge_request;
      // verify the required parameter 'charge_request' is set
      if (charge_request === undefined || charge_request === null) {
        throw new Error("Missing the required parameter 'charge_request' when calling chargeRequest");
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
      let returnType = Decision;
      return this.apiClient.callApi(
        '/charge', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Charge
     * A charge process obtains an authorisation using a tokenised value which represents a stored card  on a card holder account.  A card must previously be registered by calling `/account-register-card` with the card details  or retrieved using `/account-retrieve`  Tokens are generated whenever a previously registered list of cards are retrieved. Each token has, by design a  relatively short time to live of 30 minutes. This is both to safe guard the merchant and card holder from  replay attacks. Tokens are also restricted to your account, preventing malicious actors from stealing details for use elsewhere.    If a token is reused after it has expired it will be rejected and a new token will be required.   Tokenisation can be used for   - repeat authorisations on a previously stored card - easy authorisations just requiring CSC values to be entered - can be used for credential on file style payments - can require full 3-D Secure authentication to retain the liability shift - wallet style usage. 
     * @param {module:model/ChargeRequest} charge_request 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Decision}
     */
    chargeRequest(charge_request) {
      return this.chargeRequestWithHttpInfo(charge_request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
