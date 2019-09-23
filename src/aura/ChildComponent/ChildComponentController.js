({
	handleChildMethod : function(component, event, helper) {
        console.log('I am in Child Component');
        var params = event.getParam('arguments');
        if(params != null){
            var param1 = params.param1;
            alert(param1);
        }
		
	}
})