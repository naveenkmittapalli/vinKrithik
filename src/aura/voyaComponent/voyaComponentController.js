({
	newBusiness : function(component, event, helper) {
        component.set("v.newBusiness", true);
        component.set("v.existingBusiness", false);	
	},
    existingBusiness : function(component, event, helper) {
        component.set("v.newBusiness", false);
        component.set("v.existingBusiness", true);
    }
})