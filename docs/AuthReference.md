# Citypay Api Client.AuthReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | The amount of the transaction in decimal currency format. | [optional] 
**amount_value** | **Number** | The amount of the transaction in integer/request format. | [optional] 
**atrn** | **String** | A reference number provided by the acquiring services. | [optional] 
**authcode** | **String** | The authorisation code of the transaction returned by the acquirer or card issuer. | [optional] 
**batchno** | **String** | A batch number which the transaction has been end of day batched towards. | [optional] 
**currency** | **String** | The currency of the transaction in ISO 4217 code format. | [optional] 
**datetime** | **Date** | The date and time of the transaction. | [optional] 
**identifier** | **String** | The identifier of the transaction used to process the transaction. | [optional] 
**maskedpan** | **String** | A masking of the card number which was used to process the tranasction. | [optional] 
**merchantid** | **Number** | The merchant id of the transaction result. | [optional] 
**result** | **String** | The result of the transaction. | [optional] 
**trans_status** | **String** | The current status of the transaction through it&#39;s lifecycle. | [optional] 
**trans_type** | **String** | The type of transaction that was processed. | [optional] 
**transno** | **Number** | The transaction number of the transaction. | [optional] 


