({
	doOrder : function(component, event, helper) {
        //alert('I am in Order page');
        var pageReference = component.find("navigateToOrder");
        
        var pageReferenceNav = {
            "type": "standard__component",
            "attributes": {
                "componentName": "c__createBeerOrder",
            },
            "state": {                
            }
        };
        pageReference.navigate(pageReferenceNav);
        console.log('Leaving Beerdetails Component');
    }
		
	
})