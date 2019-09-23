({
	passContact : function(component, event, helper) {
        component.set("v.searchType", 'CONTACT');
        var searchType = 'CONTACT';
        // Get the Event, Pass params and Fire it
        var updateEvent = component.getEvent("CompEvent1");
        updateEvent.setParams({"searchType": 'CONTACT',
                               "searchString" : 'NAVEEN' });
        updateEvent.fire();		
	},
    
    passAccount : function(component, event, helper) {
        component.set("v.searchType", 'ACCOUNT');
        // Get the Event, Pass params and Fire it
        var updateEvent = component.getEvent("CompEvent1");
        updateEvent.setParams({"searchType": 'CONTACT',
                               "searchString" : 'NAVEEN' });
        updateEvent.fire();		
	}
})