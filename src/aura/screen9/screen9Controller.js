({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    processBack: function(component, event, helper) {
        var screen9NextEvent = component.getEvent("screen9NextEvent");
        screen9NextEvent.setParams({
            "nxtScreen" : "eight" 
            });
        screen9NextEvent.fire();
    }
})