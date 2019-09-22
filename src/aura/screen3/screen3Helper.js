({
	processPageInfo: function(component, event, helper, currPage, currAction) {
        
    	this.checkPage3Info(component, event, helper, currAction);
    },
    checkPage3Info: function(component, event, helper, currAction) {
        var addPhone = component.get('v.p3AddPhone');
        var addAddress = component.get('v.p3AddAddress');
        var phoneComp1 = component.find('p3select1');       
        var p3q13ans = phoneComp1.get('v.value');
        
        if(addPhone == true ) {
            var phoneComp2 = component.find('p3select2');
            var p3q15ans = phoneComp2.get('v.value');;
        }
        //alert('I am in page 2');
        
        var p3q1ans = component.get('v.p3q1value');
        var p3q2ans = component.get('v.p3q2value');
        var p3q3ans = component.get('v.p3q3value');
        var p3q4ans = component.get('v.p3q4value');
        var p3q5ans = component.get('v.p3q5value');
        var p3q6ans = component.get('v.p3q6value');
        var p3q7ans = component.get('v.p3q7value');
        var p3q8ans = component.get('v.p3q8value');
        var p3q9ans = component.get('v.p3q9value');
        var p3q10ans = component.get('v.p3q10value');
        var p3q11ans = component.get('v.p3q11value');
        var p3q12ans = component.get('v.p3q12value');       
        var p3q14ans = component.get('v.p3q14value');       
        var p3q16ans = component.get('v.p3q16value');
        
        
        if(p3q1ans == null || p3q1ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Address Line 1 !!!');
        }
        else
        if(p3q3ans == null || p3q3ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter City !!!');
        }
        else
        if(p3q4ans == null || p3q4ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter County !!!');
        }
        else
        if(p3q5ans == null || p3q5ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter State !!!');
        }
        else
        if(p3q6ans == null || p3q6ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Zip Code !!!');
        }
        else
        if((p3q7ans == null || p3q7ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Address Line 1 for Second Address!!!');
        }
        else
        if((p3q9ans == null || p3q9ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter City for Second Address!!!');
        }
        else
        if((p3q10ans == null || p3q10ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter County for Second Address !!!');
        }
        else
        if((p3q11ans == null || p3q11ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter State for Second Address !!!');
        }
        else
        if((p3q12ans == null || p3q12ans == '') && (addAddress == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter Zip/Postal Code for Second Address !!!');
        }
        else
        if(p3q13ans == '' || p3q13ans == 'Junk' ){
            component.set('v.pStatus', 'InComplete');
            alert('Please Select Phone Type !!!');
        }
        else
        if(p3q14ans == null || p3q14ans == ''){
            component.set('v.pStatus', 'InComplete');
            alert('Please Enter a Phone Number !!!');
        }
        else
        if((p3q15ans == 'Junk') && (addPhone == true)){
            component.set('v.pStatus', 'InComplete');
            alert('Please Select Phone Type for Second Phone !!!');
        }
        else
        if((p3q16ans == null || p3q16ans == '') && (addPhone == true)){
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
        var screen3NextEvent = component.getEvent("screen3NextEvent");
        screen3NextEvent.setParams({
            "nxtScreen" : "fourFwd" 
            });
        screen3NextEvent.fire();
    }
})