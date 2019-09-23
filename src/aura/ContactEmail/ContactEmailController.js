({
	EmailContactText : function(component, event, helper) {
        //alert('In the Email Button');
        var action = component.get("c.contactsendmailtext");
        
        action.setParams({
            contactid: component.get("v.recordId")
            
        });
        
        action.setCallback(this, function(response) { 
            
        }, "SUCCESS");
        
        
        $A.enqueueAction(action, false);
		
	},
    EmailContactHTML : function(component, event, helper) {
        //alert('In the Email Button');
        var action = component.get("c.contactsendmailhtml");
        
        action.setParams({
            contactid: component.get("v.recordId")         
        });   
        action.setCallback(this, function(response) {        
        }, "SUCCESS");   
        $A.enqueueAction(action, false);
		
	},
})