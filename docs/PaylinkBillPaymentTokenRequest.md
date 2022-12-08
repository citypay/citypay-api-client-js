# Citypay Api Client.PaylinkBillPaymentTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request** | [**PaylinkTokenRequestModel**](PaylinkTokenRequestModel.md) |  | 
**addressee** | **String** | Who the bill payment request intended for. This should be a readable name such as a person or company. | [optional] 
**attachments** | [**[PaylinkAttachmentRequest]**](PaylinkAttachmentRequest.md) |  | [optional] 
**descriptor** | **String** | A descriptor for the bill payment used to describe what the payment request is for for instance \&quot;Invoice\&quot;.  The descriptor can be used as descriptive text on emails or the payment page. For instance an invoice may have a button saying \&quot;View Invoice\&quot; or an email may say \&quot;to pay your Invoice online\&quot;.  | [optional] 
**due** | **Date** | A date that the invoice is due. This can be displayed on the payment page. | [optional] 
**email_notification_path** | [**PaylinkEmailNotificationPath**](PaylinkEmailNotificationPath.md) |  | [optional] 
**memo** | **String** | A memo that can be added to the payment page and email to provide to the customer. | [optional] 
**sms_notification_path** | [**PaylinkSMSNotificationPath**](PaylinkSMSNotificationPath.md) |  | [optional] 


