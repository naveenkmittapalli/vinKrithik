({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);        
    },
    p2AddAddressPhone: function(component, event, helper) {
        var action = event.getSource().get('v.name');
        if(action == 'Add Address') {
        	component.set('v.p2AddAddress', true);
        }
        else if(action == 'Delete Address') {
        	component.set('v.p2AddAddress', false);
        }
        else if(action == 'Add Phone') {
        	component.set('v.p2AddPhone', true);
        }
        else if(action == 'Delete Phone') {
        	component.set('v.p2AddPhone', false);
        }
    },
    processBack: function(component, event, helper) {
        var screen2NextEvent = component.getEvent("screen2NextEvent");
        screen2NextEvent.setParams({
            "nxtScreen" : "one" 
            });
        screen2NextEvent.fire();
    }
})