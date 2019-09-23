({
	saveQ1 : function(component, event, helper) {
        var com = component.find("Q1");
        var val = com.get("v.value");
        component.set("v.q1Ans", val);	
	},
    saveQ2 : function(component, event, helper) {
        var com = component.find("Q2");
        var val = com.get("v.value");
        component.set("v.q2Ans", val);	
	},
    saveQ3 : function(component, event, helper) {
        var com = component.find("Q3");
        var val = com.get("v.value");
        component.set("v.q3Ans", val);	
	},
    handleSubmit : function(component, event, helper) {
        var q1 = component.get("v.q1Ans");
        var q2 = component.get("v.q2Ans");
        var q3 = component.get("v.q3Ans");
        console.log('Q1'+q1);
        console.log('Q2'+q2);
        console.log('Q3'+q3);
        if((q1 != '') || (q2 != '') || (q3 != '')){
           component.set("v.surveyntDone", false); 
        }
        else{
            component.set("v.surveyntDone", true);
        }
    },
            
})