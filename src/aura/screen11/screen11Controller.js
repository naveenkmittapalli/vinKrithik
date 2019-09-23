({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    processBack: function(component, event, helper) {
        var screen11NextEvent = component.getEvent("screen11NextEvent");
        screen11NextEvent.setParams({
            "nxtScreen" : "ten" 
            });
        screen11NextEvent.fire();
    }
})