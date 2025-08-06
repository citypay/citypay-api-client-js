# Citypay Api Client.CardTokenisationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cp_card_token** | **String** | The tokenised card value. The token is encrypted with integrity checks and scoped to a client id only allowing for the card value to be used.  The value may be used up and until the expiry date of the card. | 
**last4digits** | **String** | The last 4 digits of the card. | [optional] 
**scheme** | **String** | The card scheme of the card. | [optional] 
**scheme_logo** | **String** | The url of the logo card scheme of the card. | [optional] 


