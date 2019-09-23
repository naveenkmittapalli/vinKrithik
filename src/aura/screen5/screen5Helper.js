({
	processPageInfo: function(component, event, helper, currPage, currAction) {
    	this.checkPage5Info(component, event, helper, currAction);
    },
    checkPage5Info: function(component, event, helper, currAction) {
        var p5q1ans = component.get('v.p5q1value');
        var p5q2ans = component.get('v.p5q2value');
        var p5q3ans = component.get('v.p5q3value');
        var p5q4ans = component.get('v.p5q4value');
        var p5q5ans = component.get('v.p5q5value');
        /*
        if(p5q1ans == null || p5q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-1 !!!');
        }
        else
        if(p5q3ans == null || p5q3ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-3 !!!');
        }
        else
        if((p5q4ans == null || p5q4ans == '') && (p5q3ans == 'Yes')){
            component.set('v.pStatus', 'InComplete');
            alert('Please answer Question 4 !!!');
        }
         else
        if((p5q5ans == null || p5q5ans == '') && (p5q3ans == 'No')){
            component.set('v.pStatus', 'InComplete');
            alert('Please answer Question 5 !!!');
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
        var screen5NextEvent = component.getEvent("screen5NextEvent");
        screen5NextEvent.setParams({
            "nxtScreen" : "six" 
            });
        screen5NextEvent.fire();
    }
    
})