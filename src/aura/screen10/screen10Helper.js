({
    processPageInfo: function(component, event, helper, currPage, currAction) {
        this.checkPage10Info(component, event, helper, currAction);
    },
	checkPage10Info: function(component, event, helper, currAction) {
        var p10q1ans = component.get('v.p10q1value');
        var p10q2ans = component.get('v.p10q2value');
        var p10q3ans = component.get('v.p10q3value');
        var p10q4ans = component.get('v.p10q4value');
        /*
        if(p10q1ans == null || p10q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-1 !!!');
        }
        else
        if(p10q2ans == null || p10q2ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-2 !!!');
        }
        else
        if(p10q3ans == null || p10q3ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-3 !!!');
        }
        else
        if(p10q4ans == null || p10q4ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-4 !!!');
        }
        else*/
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
        var screen10NextEvent = component.getEvent("screen10NextEvent");
        screen10NextEvent.setParams({
            "nxtScreen" : "eleven" 
            });
        screen10NextEvent.fire();
    }
})