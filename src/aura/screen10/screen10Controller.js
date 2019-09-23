({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    processBack: function(component, event, helper) {
        var screen10NextEvent = component.getEvent("screen10NextEvent");
        screen10NextEvent.setParams({
            "nxtScreen" : "nine" 
            });
        screen10NextEvent.fire();
    }
})