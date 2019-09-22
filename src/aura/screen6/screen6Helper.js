({
	 processPageInfo: function(component, event, helper, currPage, currAction) {
     	this.checkPage6Info(component, event, helper, currAction);
     },
     checkPage6Info: function(component, event, helper, currAction) {
        var p6q1ans = component.get('v.p6q1value');
        var p6q2ans = component.get('v.p6q2value');
        var p6q3ans = component.get('v.p6q3value');
        var p6q4ans = component.get('v.p6q4value');
        
         /*
        if(p6q1ans == null || p6q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-1 !!!');
        }
        else
        if((p6q2ans == null || p6q2ans == '') && (p6q1ans == 'Yes')){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Address Details !!!');
        }
        else
        if(p6q3ans == null || p6q3ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-2 !!!');
        }
        else
        if(p6q4ans == null || p6q4ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Answer Question-3 !!!');
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
        var screen6NextEvent = component.getEvent("screen6NextEvent");
        screen6NextEvent.setParams({
            "nxtScreen" : "sevenFwd" 
            });
        screen6NextEvent.fire();
    }
})