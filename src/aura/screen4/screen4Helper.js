({
	processPageInfo: function(component, event, helper, currPage, currAction) {		
    	this.checkPage4Info(component, event, helper, currAction);       	
	},
    checkPage4Info: function(component, event, helper, currAction) {
        var currSection = component.get('v.currSection');
        
        if(currSection == 'section1') {
        	var p4s1q1ans = component.get('v.p4s1q1value');
            var p4s1q2ans = component.get('v.p4s1q2value');
            var p4s1q3ans = component.get('v.p4s1q3value');
            var p4s1q4ans = component.get('v.p4s1q4value');
            var p4s1q5ans = component.get('v.p4s1q5value');
            var p4s1q6ans = component.get('v.p4s1q6value');
            var p4s1q7ans = component.get('v.p4s1q7value');
            var p4s1q8ans = component.get('v.p4s1q8value'); 
            /*
            if(p4s1q1ans == null || p4s1q1ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 1 !!!');
        	}
            else
            if((p4s1q2ans == null || p4s1q2ans == '') && (p4s1q1ans == 'Other')){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please other details in Question 1 !!!');
        	}
            else
            if(p4s1q3ans == null || p4s1q3ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 2 !!!');
        	}
            else
            if(p4s1q4ans == null || p4s1q4ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 3 !!!');
        	}
            else
            if(p4s1q5ans == null || p4s1q5ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 4 !!!');
        	}
            else
            if((p4s1q6ans == null || p4s1q6ans == '') && (p4s1q5ans == 'Yes')){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please select Yes or No for specific age groups  !!!');
        	}
            else
            if((p4s1q7ans == null || p4s1q7ans == '') && (p4s1q6ans == 'Yes')){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please enter specific age groups  which have waiting list!!!');
        	}
            else*/
            if(currAction == 'Save and Continue') {
            	alert('I am in Save and Continue');
        		component.set('v.currSection', 'section2');; 
        	}
            else
        	if(currAction == 'Save and Exit') {
            	alert('I am in Save and Exit');
        		//helper.helperprocessNext(component, event, helper, currPage); 
        	}            
        }
        else
        if(currSection == 'section2') {
            var p4s2q1ans = component.get('v.p4s2q1value');
            var p4s2q2ans = component.get('v.p4s2q2value');
            var p4s2q3ans = component.get('v.p4s2q3value');
            var p4s2q4ans = component.get('v.p4s2q4value');
            var p4s2q5ans = component.get('v.p4s2q5value');
            var p4s2q6ans = component.get('v.p4s2q6value');
            var p4s2q7ans = component.get('v.p4s2q7value');
            var p4s2q8ans = component.get('v.p4s2q8value');
            var p4s2q9ans = component.get('v.p4s2q9value');

			/*
            if(p4s2q1ans == null || p4s2q1ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 6 !!!');
        	}
            else
            if(p4s2q3ans == null || p4s2q3ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 7 !!!');
        	}
            else
            if(p4s2q5ans == null || p4s2q5ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 9 !!!');
        	}
            else
            if(p4s2q6ans == null || p4s2q6ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 10 !!!');
        	}
            else
            if(p4s2q7ans == null || p4s2q7ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 11 !!!');
        	}
            else
            if(p4s2q8ans == null || p4s2q8ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 11 !!!');
        	}
            else
            if(p4s2q9ans == null || p4s2q9ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 12 !!!');
        	}
            else*/
            if(currAction == 'Save and Continue') {
            	alert('I am in Save and Continue');
        		component.set('v.currSection', 'section3');; 
        	}
            else
        	if(currAction == 'Save and Exit') {
            	alert('I am in Save and Exit');
        		//helper.helperprocessNext(component, event, helper, currPage); 
        	}            
        }
        else
        if(currSection == 'section3') {
            var p4s3q1ans = component.get('v.p4s3q1value');
            var p4s3q2ans = component.get('v.p4s3q2value');
            var p4s3q3ans = component.get('v.p4s3q3value');
            var p4s3q4ans = component.get('v.p4s3q4value');
            
            /*
            if(p4s3q1ans == null || p4s3q1ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 13 !!!');
        	}
        	else
        	if(p4s3q2ans == null || p4s3q2ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 14 !!!');
        	}
            else
            if(p4s3q3ans == null || p4s3q3ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 15 !!!');
        	}
        	else
        	if(p4s3q4ans == null || p4s3q4ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 16 !!!');
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
        }
	},
    helperprocessNext: function(component, event, helper) {
    	var screen4NextEvent = component.getEvent("screen4NextEvent");
        screen4NextEvent.setParams({
            "nxtScreen" : "five" 
            });
        screen4NextEvent.fire();
    },
      
})