trigger RCustomerTrigger on RCustomer__c (before insert, before update, after insert, after update, before delete) {
    
    if(trigger.isBefore && trigger.isInsert ) {
    	RCustomerTriggerHandler.beforeinsertHandler(trigger.new); 
	}

    if(trigger.isBefore && trigger.isUpdate ) {
    	RCustomerTriggerHandler.beforeupdateHandler(trigger.new);
    }
    
    if(trigger.isAfter && trigger.isInsert ) {
    	//RCustomerTriggerHandler.afterinsertHandler(trigger.new); 
	}

    if(trigger.isAfter && trigger.isUpdate ) {
    	RCustomerTriggerHandler.afterupdateHandler(trigger.old);
    }
    
    if(trigger.isBefore && trigger.isDelete ) {
		RCustomerTriggerHandler.beforedeleteHandler(trigger.old);
    }
}