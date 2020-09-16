# Citypay Api Client.VoidRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantid** | **Number** | Identifies the merchant account to perform the void for. | 
**identifier** | **String** | The identifier of the transaction to void. If an empty value is supplied then a &#x60;trans_no&#x60; value must be supplied. | [optional] 
**transno** | **Number** | The transaction number of the transaction to look up and void. If an empty value is supplied then an identifier value must be supplied. | [optional] 


