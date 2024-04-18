# Citypay Api Client.RemittanceData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_created** | **Date** | Represents the date and time when the remittance was processed. This timestamp follows the ISO 8601 format for datetime representation. | [optional] 
**net_amount** | **Number** | Represents the net amount after accounting for refunds. This is calculated as SalesAmount - RefundAmount and expressed in the smallest currency unit. | [optional] 
**refund_amount** | **Number** | The total amount refunded to customers. | [optional] 
**refund_count** | **Number** | The total number of refund transactions processed. This figure helps in understanding the frequency of refunds relative to sales. | [optional] 
**sales_amount** | **Number** | The total monetary amount of sales transactions. | [optional] 
**sales_count** | **Number** | Indicates the total number of sales transactions that occurred. This count provides insight into the volume of sales. | [optional] 


