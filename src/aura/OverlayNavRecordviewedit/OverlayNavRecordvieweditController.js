({
    handleShowModal: function(component, evt, helper) {
        var modalBody = 'I am Modal Body';
        var modalFooter = 'I am Modal Footer';
        
        component.find('overlayLib').showCustomModal({
                       header: "Modal Header",
                       body: modalBody, 
            		   footer : modalFooter,
                       showCloseButton: true,
                       closeCallback: function() {
                           alert('You closed the alert!');
                       }
                   })   
    },
    
    handleClick: function(cmp, event, helper) {
        var navService = cmp.find("navService");
        // Uses the pageReference definition in the init handler
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: "MyAccounts"
            }
        };
        event.preventDefault();
        navService.navigate(pageReference);
    },
    NavigatetoLightnComp: function(cmp, event, helper) {
       
        cmp.find("navService1").navigate({
            type: "standard__component",
            attributes: {
                componentName: "c__Contacts" },
            state: {
                c__myAttr: 'Naveen'
            } 
        }, true); // replace = true 
        navService1.navigate(pageReference);
    },
    
    CreateDynComp : function(component, event, helper) { 
    
    },
})