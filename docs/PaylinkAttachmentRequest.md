# Citypay Api Client.PaylinkAttachmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **String** | The name of the attachment normally taken from the filename. You should not include the filename path as appropriate. | 
**mime_type** | **String** | The mime type of the attachment as defined in [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html). Currently only &#x60;application/pdf&#x60; is supported. | 
**data** | **String** | base64 encoding of the file if less than 32kb in size. | [optional] 


