({
	goto : function(component, event, helper) {
        console.log('I am In controller goto function');
        
        component.find("navigationService").navigate({ 
    	type: "standard__webPage", 
    	attributes: { 
        "url": 'http://salesforce.com'
    } 
	});
		
	},
    
    
    navigate : function (component, event, helper){
        console.log('event get fired from SK_AccListView Component');
        var selectedAccountId = 'DONE';
        console.log('**********selectedAccountId:'+selectedAccountId);
        var myEvent = $A.get("e.c:passevttovf");
	    myEvent.setParams({
                accountIdPassedFromEvent : selectedAccountId
            });
        console.log('firing event from component controller');
	    myEvent.fire();
    },
})