({
	SaveContact : function(component, event, helper) {
       var ev =event.getSource();
       var Id = ev.get('v.name');
       
       var action = component.get("c.SaveRecord");
       
       action.setParams({
       "recordId": Id,
       "FirstName": component.get("v.FirstName"),
       "LastName": component.get("v.LastName"),
       "Phone": component.get("v.Phone"),
       "Email": component.get("v.Email")
       });
        
       action.setCallback(this, function(response) { 
            alert('Created New Contact, Please Refresh the Page');
        }, "SUCCESS");
       
       $A.enqueueAction(action, false);
		
	}
})