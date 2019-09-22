({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    processBack: function(component, event, helper) {
        var screen5NextEvent = component.getEvent("screen5NextEvent");
        screen5NextEvent.setParams({
            "nxtScreen" : "fourBack" 
            });
        screen5NextEvent.fire();
    }
})