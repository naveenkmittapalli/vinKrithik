({
	genMap : function(component, event, helper) {
        var map = [];
        for(var i=0; i<100 ; i++) {
            map.push({key:i,
                      value:'Test'+i});            
        }
        component.set("v.varMap", map);		
	},
    
    doInit : function(component, event, helper) {        
        var action = component.get('c.getContacts');
        var recId = component.get("v.recordId");
        console.log('ID being passed is '+recId);
        action.setParams ( {
            accountId: recId,
            Phone : 'Mobile'
        });
        action.setCallback (this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var contacts = response.getReturnValue();
                component.set("v.contactList", contacts);          	
            }
            else
                if(state === "ERROR") {
                    
                }
        });
        $A.enqueueAction(action);
	},
    
    doRedirect : function(component, event, helper) {
        var eventSource  = event.getSource();
        var cId = eventSource.get('v.value');
        var sName = component.get("v.sObjectName");
        alert("sName");
        
        var navEvt = $A.get("e.force:navigateToSObject");
    	navEvt.setParams({
        "recordId": cId,
        "slideDevName": "related"
    	});
    	navEvt.fire();
        //alert(cId);
    }
})