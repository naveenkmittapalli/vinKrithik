({
    doInit : function(component, event, helper) {
        component.set('v.currSection', 'section1');
    },
	processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);        
    },
    processBack : function(component, event, helper) {
        var currSection = component.get('v.currSection');
        if(currSection == 'section3') {
            component.set('v.currSection', 'section2');
        }
        else
        if(currSection == 'section2') {
            component.set('v.currSection', 'section1');
        }
        else
        if(currSection == 'section1') {
            var screen4NextEvent = component.getEvent("screen4NextEvent");
        	screen4NextEvent.setParams({
            "nxtScreen" : "one" 
            });
        	screen4NextEvent.fire();
        }		
	}
})