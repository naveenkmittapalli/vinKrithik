({
	childmethodaction : function(component, event, helper) {
        var params = event.getParam('arguments');
        if(params){
            var param1 = params.param1;
            var param2 = params.param2;
        }
        component.set("v.State", param1);
        component.set("v.Zip", param2);
		
	},
    passvalue  : function(component, event, helper) {
    var eventSource =event.getSource() ;
    alert(eventSource.get('v.name')); 
    },
})