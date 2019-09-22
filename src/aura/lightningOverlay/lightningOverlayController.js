({
	createModal: function(component, event, helper) {      
                   component.find('overlayLib').showCustomModal({
                       header: "Sample Header",
                       body: "Sample Body", 
                       footer : "Sample Footer",
                       showCloseButton: true,
                       cssClass: "mymodal",
                       closeCallback: function() {
                           alert('You closed the alert!');
                       }
                   });
    },
    navigateUrl : function(component, event, helper) {    
    var navService = component.find("navigateUrl");
        // Sets the route to /lightning/o/Account/home
        var pageReferenceNav = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: '00B1U0000053ZtRUAU'
            }
        };
        navService.navigate(pageReferenceNav);
    }
              
})