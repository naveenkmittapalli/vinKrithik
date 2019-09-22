({
	add : function(component, event, helper) {
        var comp1 = component.find("firstNum");
        var comp2 = component.find("secondNum");
        var res = parseInt(comp1.get("v.value")) + parseInt(comp2.get("v.value"));
        component.set("v.Result", res);
        //alert('Addition of' + comp1 +'and' +comp2 +'is' +v.Result );
	},
    sub : function(component, event, helper) {
        var comp1 = component.find("firstNum");
        var comp2 = component.find("secondNum");
        var res = parseInt(comp1.get("v.value")) - parseInt(comp2.get("v.value"));
        component.set("v.Result", res);
        //alert('Subtraction of' + comp1 +'and' +comp2 +'is' +v.Result );
	},
    mul : function(component, event, helper) {
        var comp1 = component.find("firstNum");
        var comp2 = component.find("secondNum");
        var res = parseInt(comp1.get("v.value")) * parseInt(comp2.get("v.value"));
        component.set("v.Result", res);
        //alert('Multiplication of' + comp1 +'and' +comp2 +'is' +v.Result );
	},
    div : function(component, event, helper) {
        var comp1 = component.find("firstNum");
        var comp2 = component.find("secondNum");
        var res = parseInt(comp1.get("v.value")) / parseInt(comp2.get("v.value"));
        component.set("v.Result", res);
        //alert('Division of' + comp1 +'and' +comp2 +'is' +v.Result );
	}
    
})