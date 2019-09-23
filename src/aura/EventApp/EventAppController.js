({
	compevent : function(component, event, helper) {
        var v1 = event.getParam("var1");
        var v2 = event.getParam("var2");
        component.set("v.VAR1", v1);
        component.set("v.VAR2", v2);	
	}
})