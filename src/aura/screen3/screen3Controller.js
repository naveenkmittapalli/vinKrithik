({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    p3AddAddressPhone: function(component, event, helper) {
        var action = event.getSource().get('v.name');
        if(action == 'Add Address') {
        	component.set('v.p3AddAddress', true);
        }
        else if(action == 'Delete Address') {
        	component.set('v.p3AddAddress', false);
        }
        else if(action == 'Add Phone') {
        	component.set('v.p3AddPhone', true);
        }
        else if(action == 'Delete Phone') {
        	component.set('v.p3AddPhone', false);
        }
    },
    processBack: function(component, event, helper) {
        var screen3NextEvent = component.getEvent("screen3NextEvent");
        screen3NextEvent.setParams({
            "nxtScreen" : "two" 
            });
        screen3NextEvent.fire();
    }
})