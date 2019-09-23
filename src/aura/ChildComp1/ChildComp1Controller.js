({
	doInit : function(component, event, helper) {
        alert('Application has been Initialized');	
	},
    valuechange : function(component, event, helper) {
        alert('Name is changed to Krithik');
    },
    onchange : function(component, event, helper) {
        component.set("v.Name", "Krithik");	
	},
    componentevent : function(component, event, helper) {
        var compevent = component.getEvent('compevent');
        compevent.setParams ({var1 : "Naveen",
                          var2: "37"});
        compevent.fire();
        
    },
    applicationevent : function(component, event, helper) {
        var appevent = $A.get('e.c:appevent');
        appevent.setParams ({v1 : "Naveen",
                          v2: "37"});
        appevent.fire();  
    },
    
})