({
	callChildMethod : function(component, event, helper) {
        var childComp = component.find('Child');
        console.log('Got the child Component' + childComp);
        childComp.childMethod('Calling From Parent Component');
		
	}
})