({
    processPageInfo: function(component, event, helper, currPage, currAction) {
        this.checkPage11Info(component, event, helper, currAction);
    },
        
	checkPage11Info: function(component, event, helper, currAction) {
        var p11q1ans = component.get('v.p11q1value');
        var p11q2ans = component.get('v.p11q2value');
        var p11q3s1ans = component.get('v.p11q3s1value');
        var p11q3s2ans = component.get('v.p11q3s2value');
        var p11q4ans = component.get('v.p11q4value');
        /*
        if(p11q1ans == null || p11q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-1 !!!');
        }
        else
        if(p11q2ans == null || p11q2ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-2 !!!');
        }
        else
        if(p11q3s1ans == null || p11q3s1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-3 Section-1 !!!');
        }
        else
        if((p11q3s2ans == null || p11q3s2ans == '') && (p11q3s1ans == 'Yes')){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-3 Section-2 !!!');
        }
        else
        if(p11q4ans == null || p11q4ans == ''){
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
        var screen11NextEvent = component.getEvent("screen11NextEvent");
        screen11NextEvent.setParams({
            "nxtScreen" : "one" 
            });
        screen11NextEvent.fire();
    }
})