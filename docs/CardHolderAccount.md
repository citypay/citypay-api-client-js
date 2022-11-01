# Citypay Api Client.CardHolderAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **String** | The account id of the card holder account provided by the merchant which uniquely identifies the account.  | 
**contact** | [**ContactDetails**](ContactDetails.md) |  | 
**cards** | [**[Card]**](Card.md) |  | [optional] 
**date_created** | **Date** | The date and time the account was created. | [optional] 
**default_card_id** | **String** | The id of the default card. | [optional] 
**default_card_index** | **Number** | The index in the array of the default card. | [optional] 
**last_modified** | **Date** | The date and time the account was last modified. | [optional] 
**status** | **String** | Defines the status of the account for processing valid values are   - ACTIVE for active accounts that are able to process   - DISABLED for accounts that are currently disabled for processing.  | [optional] 
**unique_id** | **String** | A unique id of the card holder account which uniquely identifies the stored account. This value is not searchable. | [optional] 


