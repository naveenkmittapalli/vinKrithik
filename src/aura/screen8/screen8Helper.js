({
    processPageInfo: function(component, event, helper, currPage, currAction) {
        this.checkPage8Info(component, event, helper, currAction);
    },
        
	checkPage8Info: function(component, event, helper, currAction) {
        var p8q1ans = component.get('v.p8q1value');
        var p8q2ans = component.get('v.p8q2value');
        var p8q3ans = component.get('v.p8q3value');
        var p8q4ans = component.get('v.p8q4value');
        var p8q5ans = component.get('v.p8q5value');
        var p8q6ans = component.get('v.p8q6value');
        var p8q7ans = component.get('v.p8q7value');
        /*
        if(p8q1ans == null || p8q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-1 !!!');
        }
        else
        if((p8q3ans == null || p8q3ans == '') && (p8q1ans == 'No' && (p8q2ans == null || p8q2ans == ''))){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-2 !!!');
        }
        else
        if(p8q3ans == 'Other' && (p8q4ans == null || p8q4ans == '')) {
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Other details of Question-2 !!!');        
        }    
        else
        if((p8q5ans == null || p8q5ans == '') && (p8q1ans == 'No' && (p8q2ans == null || p8q2ans == ''))){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-4 !!!');
        }
        else
        if(p8q5ans == 'Other' && (p8q6ans == null || p8q6ans == '')) {
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Other details of Question-3 !!!');        
        }
        else
        if(p8q7ans == null || p8q7ans == ''){
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
        var screen8NextEvent = component.getEvent("screen8NextEvent");
        screen8NextEvent.setParams({
            "nxtScreen" : "nine" 
            });
        screen8NextEvent.fire();
    }
})