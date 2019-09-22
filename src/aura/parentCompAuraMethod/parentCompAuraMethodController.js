({
	callChild : function(component, event, helper) {
        var childComp = component.find('child');
        childComp.childMethod('Naveen', 'Vineela');
		
	}
})