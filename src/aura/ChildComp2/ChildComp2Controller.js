({
	appevent : function(component, event, helper) {
        var va1 = event.getParam("v1");
        var va2 = event.getParam("v2");
        component.set("v.V1", va1);
        component.set("v.V2", va2);	
	}
})