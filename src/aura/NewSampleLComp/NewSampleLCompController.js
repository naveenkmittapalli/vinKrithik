({
	doAdd : function(component, event, helper) {
        var num1 = component.get("v.wholeNumber");
        var num2 = component.get("v.percentage");
        component.set("v.result", parseInt(num1) + parseInt(num2))
        component.set("v.answer", true);
        //alert(parseInt(num1) + parseInt(num2));		
	},
    doSubtract : function(component, event, helper) {
        var num1 = component.get("v.wholeNumber");
        var num2 = component.get("v.percentage");
        component.set("v.result", parseInt(num1) - parseInt(num2))
        component.set("v.answer", true);	
	},
    doMultiply : function(component, event, helper) {
        var num1 = component.get("v.wholeNumber");
        var num2 = component.get("v.percentage");
        component.set("v.result", parseInt(num1) * parseInt(num2))
        component.set("v.answer", true);	
	},
    doDivide : function(component, event, helper) {
        var num1 = component.get("v.wholeNumber");
        var num2 = component.get("v.percentage");
        component.set("v.result", parseInt(num1) / parseInt(num2))
        component.set("v.answer", true);	
	},
    createMap : function(component, event, helper) {
        var m = [];
        for(var i=0; i <10 ; i++){
            m.push({key:i,
                      value: 'test'+i});
        }
        component.set('v.MapEx', m);
    },
    doInit : function(component, event, helper) {
        var action = component.get("c.getContacts");
        action.setParams({ recordId : component.get("v.recordId") });
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.contactList', response.getReturnValue());
                //alert("From server: " + response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    doRedirect : function(component, event, helper) {
    	var eventSource = event.getSource();
        var id = eventSource.get('v.value');
        var navEvt = $A.get("e.force:navigateToSObject");
    	navEvt.setParams({
      	"recordId": id,
      	"slideDevName": "detail"
    	});
    	navEvt.fire();
        //alert(id);
    },
    createContact : function(component, event, helper) {
        //alert('I am here');
        var action = component.get("c.createContacts");
        action.setParams({ recordId : component.get("v.recordId"),
                          firstName : component.get('v.firstName'),
                         lastName : component.get('v.lastName')
                         });
        console.log('I am here again');
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
            var navEvt = $A.get("e.force:navigateToSObject");
    		navEvt.setParams({
      		"recordId": component.get("v.recordId"),
      		"slideDevName": "detail"
    		});
    		navEvt.fire();    
            }
        });
        $A.enqueueAction(action);
    },
        
                         
})