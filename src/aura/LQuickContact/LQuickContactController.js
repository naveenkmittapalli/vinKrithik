({
	addContact : function(component, event, helper) {
        var action = component.get('c.createContact');
        
		var acId = component.get('v.accntId');
        console.log('Account Id '+ component.get('v.accntId'));
        
        action.setParams ( {
            con: component.get("v.newcontact"),
            AccountId : component.get("v.accntId"),                    
        });
        action.setCallback (this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {  
                
            }
            else
                if(state === "ERROR") {                    
                }
        });
        $A.enqueueAction(action);
		
	}
})