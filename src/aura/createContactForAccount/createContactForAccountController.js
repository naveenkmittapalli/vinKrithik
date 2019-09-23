({
	createContact : function(component, event, helper) {
        var action = component.get("c.createContactApex");
        action.setParams({ recordId : component.get("v.recordId") });
        action.setParams({ firstName : component.get("v.firstName") });
        action.setParams({ lastName : component.get("v.lastName") });
        console.log('I am here baby');
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log('I am here baby -- 1');
            if (state === "SUCCESS") {
                console.log('I am here baby -- 2');
                var contactRecId =  response.getReturnValue();
                var navEvt = $A.get("e.force:navigateToSObject");
    			navEvt.setParams({
      				"recordId": contactRecId,
      				"slideDevName": "detail"
    			});
    			navEvt.fire();
            }
        });
        $A.enqueueAction(action);
    }
})