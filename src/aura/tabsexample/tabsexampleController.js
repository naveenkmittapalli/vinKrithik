({
	
    processSave : function(component, event, helper) {
        var currPage = event.getSource().get('v.value');
        var currAction = event.getSource().get('v.label');
        alert(currPage);
        // Start processing the page
        helper.processPageInfo(component, event, helper, currPage, currAction);
        
    },
    processNext: function(component, event, helper) {
        var currPage = event.getParam("nxtScreen");
        //alert('GOt this value'+ currPage);
        
        component.set('v.screen7Direction', 'sevenFwd');
		component.set('v.screen4Direction', 'fourFwd');
        
    	if(currPage == 'one') { component.set('v.selTabId', 'one');} else
    	if(currPage == 'two') { component.set('v.selTabId', 'two');} else
    	if(currPage == 'three') { component.set('v.selTabId', 'three');} else
    	if(currPage == 'fourFwd') { 
            component.set('v.selTabId', 'four');
            component.set('v.screen4Direction', 'fourFwd');
            component.set('v.screen4CurrSection', 'section1');
        } 
        else
        if(currPage == 'fourBack') { 
        	component.set('v.selTabId', 'four');
        	component.set('v.screen4Direction', 'fourBack');	
            component.set('v.screen4CurrSection', 'section3');
        } else
    	if(currPage == 'five') { component.set('v.selTabId', 'five');} else
    	if(currPage == 'six') { component.set('v.selTabId', 'six');} else
    	if(currPage == 'sevenFwd') { 
            component.set('v.selTabId', 'seven');
            component.set('v.screen7Direction', 'sevenFwd');
            component.set('v.screen7CurrSection', 'section1');
        } else
        if(currPage == 'sevenBack') { 
        	component.set('v.selTabId', 'seven');
        	component.set('v.screen7Direction', 'sevenBack');	
            component.set('v.screen7CurrSection', 'section3');
        } else
    	if(currPage == 'eight') { component.set('v.selTabId', 'eight');} else
    	if(currPage == 'nine') { component.set('v.selTabId', 'nine'); }  else 
        if(currPage == 'ten') { component.set('v.selTabId', 'ten'); }  else  
        if(currPage == 'eleven') { component.set('v.selTabId', 'eleven'); }  
    },
    
    processCancel : function(component, event, helper) {
        alert('I am in Cancel');
    	var navService = cmp.find("navService");
        var pageReference = {
            "type": "standard__namedPage",
			"attributes": {
				"pageName": "home"
            }
        	};
        cmp.set("v.pageReference", pageReference);
        //event.preventDefault();
        
        var defaultUrl = "#";
        navService.generateUrl(pageReference)
        .then($A.getCallback(function(url) {
            cmp.set(defaultUrl);
        }), $A.getCallback(function(error) {
            cmp.set(defaultUrl);
        }));
        navService.navigate(pageReference);
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
    p3AddAddressPhone: function(component, event, helper) {
        var action = event.getSource().get('v.name');
        if(action == 'Add Address') {
        	component.set('v.p3AddAddress', true);
        }
        else if(action == 'Delete Address') {
        	component.set('v.p3AddAddress', false);
        }
        else if(action == 'Add Phone') {
        	component.set('v.p3AddPhone', true);
        }
        else if(action == 'Delete Phone') {
        	component.set('v.p3AddPhone', false);
        }
    },
    
})