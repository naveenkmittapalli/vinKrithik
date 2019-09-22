({
	getcontacts : function(component, event, helper) {
        var action = component.get("c.getcontactlist");
        
        action.setParams({
            accountid: component.get("v.recordId")
            
        });
        
        action.setCallback(this, function(response) { 
            var responseValue = action.getReturnValue();
            component.set("v.contactlist", responseValue);
        }, "SUCCESS");
        
        
        $A.enqueueAction(action, false);
		
	},
    redirect: function(component, event, helper) {
       var ev =event.getSource();
       var Id = ev.get('v.name');
        
       var navEvt = $A.get("e.force:navigateToSObject");
       navEvt.setParams({
       "recordId": Id,
       "slideDevName": "details"
       });
       navEvt.fire();

       //alert(Id);
    }
})