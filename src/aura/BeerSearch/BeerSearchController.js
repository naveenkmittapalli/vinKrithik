({
	passSearchText : function(component, event, helper) {
        var comp = component.find("beerSearch");
        var searchText = comp.get("v.value");
        //alert(searchText);
        
        var evt = component.getEvent('SearchText');
        evt.setParams(
            { "searchText": searchText }
              );
        evt.fire();
	}
})