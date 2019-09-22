({
	showInfo : function(component, event, helper) {
        var eventSource = event.getSource();
        //alert(eventSource.get('v.value'))
        //component.set('v.beerId', eventSource.get('v.value'));
        
		
	},
    doInit : function(component, event, helper) {
    	component.set('v.beerId','');
	},
    
    viewDetails : function(component, event, helper) {   
        var eventSource = event.getSource();
        var beerId = eventSource.get('v.value');
        console.log('Got the Beer Id ' + beerId);
        
        $A.createComponent(
            "c:BeerDetails",
            {
                "beerId" : beerId 
            },
            function(beerDetails, status, errorMessage) {
                if(status == "SUCCESS") {
                	component.find('overlayLib').showCustomModal({
                       header: "Beer Details",
                       body: beerDetails, 
                       footer : "All Rights Reserved @2019",
                       showCloseButton: true,
                       cssClass: "mymodal",
                       closeCallback: function() {
                           //alert('You closed the alert!');
                       }
                   });    
                }
                else if(status == "INCOMPLETE") {
                        
                }
                    else if(status == "ERROR") {
                        
                }                
            }
        );
    	
    }
})