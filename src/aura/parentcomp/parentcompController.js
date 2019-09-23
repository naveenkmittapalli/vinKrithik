({
	childmethodcall : function(component, event, helper) {
        var comp = component.find('child');
        var data = {
                param1: 'Alabama',    
                param2: 36106
        };
        
        comp.childmethod('Alabama','36106');
		
	},
    parentactioncall: function(component, event, helper) {
        alert('I am in parent function');
    },
})