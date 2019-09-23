({
	isValid : function(component, event, helper) {
        alert(component.isValid());	
	}, 
    getName : function(component, event, helper) {
        alert(component.getName());		
	},
    getAttribute : function(component, event, helper) {
        alert(component.get("v.whom"));		
	},
    setAttribute : function(component, event, helper) {
        component.set("v.whom", "KRITHIK");
        alert(component.get("v.whom"));		
	},
    AURAIDUSAGE : function(component, event, helper) {
        var comp = component.find("testInput");
        alert(comp.get("v.value"));	
        comp.set("v.value", 70);
    },
    Add : function(component, event, helper) {
        var n1 = component.find("Input1");
        var n2 = component.find("Input2");
        component.set("v.Result",  parseInt(n1.get("v.value")) + parseInt(n2.get("v.value")));
    },
     Subtract : function(component, event, helper) {
        var n1 = component.find("Input1");
        var n2 = component.find("Input2");
        component.set("v.Result",  parseInt(n1.get("v.value")) - parseInt(n2.get("v.value")));
    },
     Multiply : function(component, event, helper) {
        var n1 = component.find("Input1");
        var n2 = component.find("Input2");
        component.set("v.Result",  parseInt(n1.get("v.value")) * parseInt(n2.get("v.value")));
    },
     Divide : function(component, event, helper) {
        var n1 = component.find("Input1");
        var n2 = component.find("Input2");
        component.set("v.Result",  parseInt(n1.get("v.value")) / parseInt(n2.get("v.value")));
    },
    CreateMap : function(component, event, helper) {
        var map = [];
        for(var i=0; i< 10 ; i++) {
            map.push({
                key:i,
                value:'Test'+i
            })
        }
        component.set("v.Mapcheck", map);
    },
    Contacts : function(component, event, helper) {
        // Get the Server Side Action
        var action = component.get("c.Contactinfo");
        
        // Set any parameters to Server Side Action
        action.setParams({});
        
        // Call this function after server request completes and based on SUCCESS
        action.setCallback(this, function(response) { 
            var responseValue = action.getReturnValue();
            component.set("v.Contactlist", responseValue);

        
        }, "SUCCESS");
        // Put the server action in queue
        $A.enqueueAction(action, false);
        
    },
    
    
    
    
})