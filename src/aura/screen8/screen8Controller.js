({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    processBack: function(component, event, helper) {
        var screen8NextEvent = component.getEvent("screen8NextEvent");
        screen8NextEvent.setParams({
            "nxtScreen" : "sevenBack" 
            });
        screen8NextEvent.fire();
    }
})