({
	processPageInfo: function(component, event, helper, currPage, currAction) {		
    	this.checkPage2Info(component, event, helper, currAction);       	
	},
    checkPage2Info: function(component, event, helper, currAction) {
        var addPhone = component.get('v.p2AddPhone');
        var addAddress = component.get('v.p2AddAddress');
        var phoneComp1 = component.find('p2select1');       
        var p2q13ans = phoneComp1.get('v.value');
        
        if(addPhone == true ) {
            var phoneComp2 = component.find('p2select2');
            var p2q15ans = phoneComp2.get('v.value');;
        }
        //alert('I am in page 2');
        
        var p2q1ans = component.get('v.p2q1value');
        var p2q2ans = component.get('v.p2q2value');
        var p2q3ans = component.get('v.p2q3value');
        var p2q4ans = component.get('v.p2q4value');
        var p2q5ans = component.get('v.p2q5value');
        var p2q6ans = component.get('v.p2q6value');
        var p2q7ans = component.get('v.p2q7value');
        var p2q8ans = component.get('v.p2q8value');
        var p2q9ans = component.get('v.p2q9value');
        var p2q10ans = component.get('v.p2q10value');
        var p2q11ans = component.get('v.p2q11value');
        var p2q12ans = component.get('v.p2q12value');       
        var p2q14ans = component.get('v.p2q14value');       
        var p2q16ans = component.get('v.p2q16value');
        
        
        if(p2q1ans == null || p2q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Address Line 1 !!!');
        }
        else
        if(p2q3ans == null || p2q3ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter City !!!');
        }
        else
        if(p2q4ans == null || p2q4ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter County !!!');
        }
        else
        if(p2q5ans == null || p2q5ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter State !!!');
        }
        else
        if(p2q6ans == null || p2q6ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Zip Code !!!');
        }
        else
        if((p2q7ans == null || p2q7ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Address Line 1 for Second Address!!!');
        }
        else
        if((p2q9ans == null || p2q9ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter City for Second Address!!!');
        }
        else
        if((p2q10ans == null || p2q10ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter County for Second Address !!!');
        }
        else
        if((p2q11ans == null || p2q11ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter State for Second Address !!!');
        }
        else
        if((p2q12ans == null || p2q12ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Zip/Postal Code for Second Address !!!');
        }
        else
        if(p2q13ans == '' || p2q13ans == 'Junk' ){
            component.set('v.pStatus', 'InComplete');
            alert('Please Select Phone Type !!!');
        }
        else
        if(p2q14ans == null || p2q14ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter a Phone Number !!!');
        }
        else
        if((p2q15ans == 'Junk') && (addPhone == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Select Phone Type for Second Phone !!!');
        }
        else
        if((p2q16ans == null || p2q16ans == '') && (addPhone == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter a Phone Number for Second Phone !!!');
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
        var screen2NextEvent = component.getEvent("screen2NextEvent");
        screen2NextEvent.setParams({
            "nxtScreen" : "three" 
            });
        screen2NextEvent.fire();
    },
    
})