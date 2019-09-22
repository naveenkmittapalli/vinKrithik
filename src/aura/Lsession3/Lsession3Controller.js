({
	isValid : function(component, event, helper) {
        alert('Component is ' +component.isValid());
	},
    getName : function(component, event, helper) {
        alert('Component Name is ' +component.getName());
	},
    getAttr : function(component, event, helper) {
        alert('Attribute Name is ' +component.get("v.NAME"));
	},
    setAttr : function(component, event, helper) {
        component.set("v.NAME", 'KRITHIK');
        alert('Attribute Name is ' +component.get("v.NAME"));
	},
    setName : function(component, event, helper) {
        var comp = component.find('inputField');
        var attrVal = comp.get("v.value");
        component.set("v.NAME", attrVal);
        alert('Attribute Name is ' +component.get("v.NAME"));
	},
})