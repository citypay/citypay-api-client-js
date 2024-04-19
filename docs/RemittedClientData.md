# Citypay Api Client.RemittedClientData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batches** | [**[MerchantBatchResponse]**](MerchantBatchResponse.md) |  | 
**remittances** | [**[RemittanceData]**](RemittanceData.md) |  | 
**clientid** | **String** | The client id that the remittance data is for. | [optional] 
**date** | **Date** | The date of the remittance. | [optional] 
**date_created** | **Date** | The date time that the remittance was created. | [optional] 
**net_amount** | **Number** | Represents the net amount after accounting for refunds. This is calculated as SalesAmount - RefundAmount and expressed in the smallest currency unit. | [optional] 
**processed_amount** | **Number** | The total monetary amount processed consisting of sale and refund transactions. | [optional] 
**processed_count** | **Number** | Indicates the total number of sales and refund transactions that occurred. This count provides insight into the volume of processing. | [optional] 
**refund_amount** | **Number** | The total amount refunded to customers. | [optional] 
**refund_count** | **Number** | The total number of refund transactions processed. This figure helps in understanding the frequency of refunds relative to sales. | [optional] 
**sales_amount** | **Number** | The total monetary amount of sales transactions. | [optional] 
**sales_count** | **Number** | Indicates the total number of sales transactions that occurred. This count provides insight into the volume of sales. | [optional] 
**settlement_implementation** | **String** | The name of the implementation. | [optional] 
**uuid** | **String** | The uuid of the settlement file processed on. | [optional] 


