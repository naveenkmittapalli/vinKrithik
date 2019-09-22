({
	doInit : function(component, event, helper) {
        //TODO Set the RepisVDAIAR attribute here
        component.set("v.start", true);
        component.set("v.options[0]", 12345);
        component.set("v.options[1]", 54321);
    },
    
    
    StartEmailProcess : function(component, event, helper) {   
        component.set("v.start", false); 
        var action = component.get("c.contactsendmailhtml");
        action.setParams({
            "contactid": component.get("v.recordId"),
            "pershingno": component.get("v.selectedValue")
        });   
        action.setCallback(this, function(response) {  
         component.set("v.emailsentstatus", 'SUCCESS');   
                   
        }, "SUCCESS");   
        $A.enqueueAction(action, false);	   
    },
    openModel: function(component, event, helper) {
      // for Display Model,set the "isOpen" attribute to "true"
      //component.set("v.isOpen", false);
      component.set("v.start", true);
    },
 
   closeModal: function(component, event, helper) {
      // for Hide/Close Model,set the "isOpen" attribute to "Fasle"  
      //component.set("v.start", false);
       $A.get('e.force:closeQuickAction').fire();
   },
    
})