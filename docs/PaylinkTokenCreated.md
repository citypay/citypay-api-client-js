# Citypay Api Client.PaylinkTokenCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique id of the request. | 
**result** | **Number** | The result field contains the result for the Paylink Token Request. 0 - indicates that an error was encountered while creating the token. 1 - which indicates that a Token was successfully created. | 
**token** | **String** | A token generated for the request used to refer to the transaction in consequential calls. | 
**attachments** | [**PaylinkAttachmentResult**](PaylinkAttachmentResult.md) |  | [optional] 
**bps** | **String** | true if BPS has been enabled on this token. | [optional] 
**date_created** | **Date** | Date and time the token was generated. | [optional] 
**errors** | [**[PaylinkErrorCode]**](PaylinkErrorCode.md) |  | [optional] 
**identifier** | **String** | The identifier as presented in the TokenRequest. | [optional] 
**mode** | **String** | Determines whether the token is &#x60;live&#x60; or &#x60;test&#x60;. | [optional] 
**qr_code** | **String** | A URL of a qrcode which can be used to refer to the token URL. | [optional] 
**server_version** | **String** | the version of the server performing the call. | [optional] 
**source** | **String** | The incoming IP address of the call. | [optional] 
**url** | **String** | The Paylink token URL used to checkout by the card holder. | [optional] 
**usc** | **String** | A UrlShortCode (USC) used for short links. | [optional] 


