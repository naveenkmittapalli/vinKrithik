({
	handleCompEvent : function(component, event, helper) {
        var searchText = event.getParam('searchText');
        //alert(searchText);
        var action = component.get('c.getBeerDetails');
        action.setParams ({
            searchText : searchText
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state == 'SUCCESS') {
                var responsevalue = response.getReturnValue();
                if((responsevalue != null) && (responsevalue != ''))  {
                	component.set('v.beerList', responsevalue);
                	console.log('responsevalue'+ component.get('v.beerList'));   
                }
            }
            else
                if(state == 'ERROR') {
                   console.log( response.getError);
                }
        });
        $A.enqueueAction(action);		
	},
    
    doInit : function(component, event, helper) {
        var action = component.get('c.getBeerDetails');
        action.setParams ({
            //searchText : ''
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state == 'SUCCESS') {
                var responsevalue = response.getReturnValue();
                if((responsevalue != null) && (responsevalue != ''))  {
                	component.set('v.beerList', responsevalue);
                	console.log('responsevalue'+ component.get('v.beerList'));   
                }
            }
            else
                if(state == 'ERROR') {
                   console.log( response.getError);
                }
        });
        $A.enqueueAction(action);
     },
})