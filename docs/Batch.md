# Citypay Api Client.Batch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_date** | **Date** | The date that the file was created in ISO-8601 format. | 
**batch_status** | **String** | The status of the batch. Possible values are:    - CANCELLED. The file has been cancelled by an administrator or server process.  - COMPLETE. The file has passed through the processing cycle and is determined as being complete further information should be obtained on the results of the processing - ERROR_IN_PROCESSING. Errors have occurred in the processing that has deemed that processing can not continue. - INITIALISED. The file has been initialised and no action has yet been performed - LOCKED. The file has been locked for processing - QUEUED. The file has been queued for processing yet no processing has yet been performed - UNKNOWN. The file is of an unknown status, that is the file can either not be determined by the information requested of the file has not yet been received.  | 
**batch_id** | **Number** | The batch id requested. | [optional] 


