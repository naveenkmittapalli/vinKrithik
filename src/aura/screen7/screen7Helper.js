({
	processPageInfo: function(component, event, helper, currPage, currAction) {		
    	this.checkPage7Info(component, event, helper, currAction);       	
	},
    checkPage7Info: function(component, event, helper, currAction) {
        var currSection = component.get('v.currSection');
        
        if(currSection == 'section1') {
            /*
        	var p7s1q1ans = component.get('v.p7s1q1value');
        	var p7s1q2ans = component.get('v.p7s1q2value');
        	var p7s1q3ans = component.get('v.p7s1q3value');  
            if(p7s1q2ans == null || p7s1q2ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 2 !!!');
        	}
            else
            if((p7s1q3ans == null || p7s1q3ans == '') && (p7s1q2ans == 'Yes')){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 3 !!!');
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
            var p7s2q1ans = component.get('v.p7s2q1value');
            var p7s2q2ans = component.get('v.p7s2q2value');
            var p7s2q3ans = component.get('v.p7s2q3value');
            var p7s2q4ans = component.get('v.p7s2q4value');
            /*
            if(p7s2q1ans == null || p7s2q1ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 1 !!!');
        	}
            else
            if((p7s2q2ans == null || p7s2q2ans == '') && (p7s2q1ans == 'No')){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please enter the date of Preliminary Inspection !!!');
        	}
            else
            if(p7s2q3ans == null || p7s2q3ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 2 !!!');
        	}
            else
            if((p7s2q4ans == null || p7s2q4ans == '') && (p7s2q3ans == 'Yes')){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please enter the expiration on your health department permit !!!');
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
            var p7s3q1ans = component.get('v.p7s3q1value');
            var p7s3q2ans = component.get('v.p7s3q2value');
            /*
            if(p7s3q1ans == null || p7s3q1ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 1 !!!');
        	}
        	else
        	if(p7s3q2ans == null || p7s3q2ans == ''){
            	component.set('v.pStatus', 'InComplete');
            	alert('Please answer Question 2 !!!');
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
    	var screen7NextEvent = component.getEvent("screen7NextEvent");
        screen7NextEvent.setParams({
            "nxtScreen" : "eight" 
            });
        screen7NextEvent.fire();
    },
      
})