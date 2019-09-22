({
	processPageInfo: function(component, event, helper, currPage, currAction) {    
    	this.checkPage1Info(component, event, helper, currAction);
    },
    checkPage1Info: function(component, event, helper, currAction) {
        var p1q1ans = component.get('v.p1q1value');
        if(p1q1ans == null || p1q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please select a option !!!');
        }
        else
        if(currAction == 'Save and Continue') {
            alert('I am in Save and Continue');
        	this.helperprocessNext(component, event, helper); 
        }
        else
        if(currAction == 'Save and Exit') {
            alert('I am in Save and Exit');
        	//helper.helperprocessNext(component, event, helper, currPage); 
        }        
    },
    helperprocessNext: function(component, event, helper) {
        var screen1NextEvent = component.getEvent("screen1NextEvent");
        screen1NextEvent.setParams({
            "nxtScreen" : "fourFwd" 
            });
        screen1NextEvent.fire();
    }
    
})