({
	callFromParent : function(component, event, helper) {
        var params = event.getParam('arguments');
        if(params) {
            var par1 = params.param1;
            var par2 = params.param2;
            alert(par1);
            alert(par2);
        }
		
	}
})