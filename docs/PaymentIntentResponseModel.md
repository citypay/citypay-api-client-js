# Citypay Api Client.PaymentIntentResponseModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **String** | An identifier of the intent. | 
**merchantid** | **Number** | The merchant id of the intent. | 
**payment_intent_id** | **String** | The id of the intent. | 
**adjustments** | [**Adjustments**](Adjustments.md) |  | [optional] 
**amount** | **Number** | An amount of the intent. | [optional] 
**created** | **Date** | A date time of when the intent was created. | [optional] 
**currency** | **String** | The currency of the intent. | [optional] 
**due** | **Date** | A due date of the intent. | [optional] 
**expires** | **Date** | An expiration date of the intent. | [optional] 
**external_ref** | **String** | An external reference of the intent. | [optional] 
**external_ref_source** | **String** | An external reference source of the intent. | [optional] 
**intent_status** | **String** | A status of the intent such as &#x60;unknown&#x60;, &#x60;open&#x60;, &#x60;requires_payment_method&#x60;, &#x60;requires_confirmation&#x60;, &#x60;requires_confirmation&#x60;, &#x60;requires_action&#x60;, &#x60;processing&#x60;, &#x60;succeeded&#x60;, &#x60;cancelled&#x60;, &#x60;requires_capture&#x60;, &#x60;failed&#x60;, &#x60;expired&#x60;, &#x60;requires_refund&#x60;, &#x60;refunded&#x60;. | [optional] 
**payment_type** | **String** | A type of the intent such as &#x60;None&#x60;, &#x60;Single&#x60;, &#x60;Subscription&#x60;. | [optional] 
**transactions** | [**AuthReference**](AuthReference.md) |  | [optional] 


