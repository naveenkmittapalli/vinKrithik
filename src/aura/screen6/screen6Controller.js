({
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    processBack: function(component, event, helper) {
        var screen6NextEvent = component.getEvent("screen6NextEvent");
        screen6NextEvent.setParams({
            "nxtScreen" : "five" 
            });
        screen6NextEvent.fire();
    }
})