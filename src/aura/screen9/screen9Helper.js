({
    processPageInfo: function(component, event, helper, currPage, currAction) {
        this.checkPage9Info(component, event, helper, currAction);
    },
	checkPage9Info: function(component, event, helper, currAction) {
        var p9q1ans = component.get('v.p9q1value');
        var p9q2ans = component.get('v.p9q2value');
        var p9q3ans = component.get('v.p9q3value');
        var p9q4ans = component.get('v.p9q4value');
        var p9q5ans = component.get('v.p9q5value');
        var p9q6ans = component.get('v.p9q6value');
        var p9q7ans = component.get('v.p9q7value');
        var p9q8ans = component.get('v.p9q8value');
        var p9q9ans = component.get('v.p9q9value');
        /*
        if(p9q1ans == null || p9q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-1 !!!');
        }
        else
        if((p9q2ans == null || p9q2ans == '') && (p9q1ans == 'No')){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-2 !!!');
        }
        else
        if(p9q3ans == null || p9q3ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-3 !!!');
        }
        else
        if((p9q4ans == null || p9q4ans == '') && (p9q3ans == 'Yes')){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-4 !!!');
        }
        else
        if(p9q5ans == null || p9q5ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-5 !!!');
        }
        else
        if(p9q6ans == null || p9q6ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-6 !!!');
        }
        else
        if(p9q7ans == null || p9q7ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-7 !!!');
        }
        else
        if((p9q8ans == null || p9q8ans == '') && (p9q7ans == 'Yes')){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-8 !!!');
        }
        else
        if((p9q9ans == null || p9q9ans == '') && (p9q7ans == 'No')){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-9 !!!');
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
        var screen9NextEvent = component.getEvent("screen9NextEvent");
        screen9NextEvent.setParams({
            "nxtScreen" : "ten" 
            });
        screen9NextEvent.fire();
    }
})