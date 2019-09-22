({    
    doInit : function(component, event, helper) {        
    // Get the REP Info              
    	var action = component.get("c.getRepInfo");
        action.setCallback(this, function(response) {      
        	var state = response.getState();
        	if (state === "SUCCESS") {
        		var PershingNos = response.getReturnValue();
            	console.log('RECIEVED Pershing Nos: ' + PershingNos);
                if(PershingNos != null){
        			//TODO Set the AvailPershingNos from Pershing Reps Cache Info
        			component.set("v.AvailPershingNos", PershingNos);
            		component.set("v.RepHasAccess", 'true'); 
                    console.log('WHERE I ');
       			}
                else{
                    console.log('WHERE AM I ');
                    //component.set("v.RepHasAccess", 'false');
                }
                component.set("v.start", 'true');
        	}
        	else{
          	console.log('NOT RECIEVED ANY Pershing Nos');
        	}                           
        });   
        $A.enqueueAction(action, false);
    }
})