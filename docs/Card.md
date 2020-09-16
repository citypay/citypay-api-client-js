# Citypay Api Client.Card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin_commercial** | **Boolean** | Defines whether the card is a commercial card. | [optional] 
**bin_corporate** | **Boolean** | Defines whether the card is a corporate business card. | [optional] 
**bin_country_issued** | **String** | The determined country where the card was issued. | [optional] 
**bin_credit** | **Boolean** | Defines whether the card is a credit card. | [optional] 
**bin_currency** | **String** | The default currency determined for the card. | [optional] 
**bin_debit** | **Boolean** | Defines whether the card is a debit card. | [optional] 
**bin_description** | **String** | A description of the bin on the card to identify what type of product the card is. | [optional] 
**bin_eu** | **Boolean** | Defines whether the card is regulated within the EU. | [optional] 
**card_id** | **String** | The id of the card that is returned. Should be used for referencing the card when perform any changes. | [optional] 
**card_status** | **String** | The status of the card such, valid values are  - ACTIVE the card is active for processing  - INACTIVE the card is not active for processing  - EXPIRED for cards that have passed their expiry date.  | [optional] 
**_default** | **Boolean** | Determines if the card is the default card for the account and should be regarded as the first option to be used for processing. | [optional] 
**expmonth** | **Number** | The expiry month of the card. | [optional] 
**expyear** | **Number** | The expiry year of the card. | [optional] 
**label** | **String** | A label which identifies this card. | [optional] 
**label2** | **String** | A label which also provides the expiry date of the card. | [optional] 
**last4digits** | **String** | The last 4 digits of the card to aid in identification. | [optional] 
**scheme** | **String** | The scheme that issued the card. | [optional] 
**token** | **String** | A token that can be used to process against the card. | [optional] 


