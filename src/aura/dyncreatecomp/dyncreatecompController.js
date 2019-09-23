({
	CreateDynComp : function(component, event, helper) {
        $A.createComponent("lightning:button",
                           {value:'New Button',
                            label:'New Button',
                            onclick:component.getReference("c.handledyn")
                           }, 
                            function(Newbutton, status, statusMessagesList){
                               if(status === 'SUCCESS') {
                                   var body = component.get('v.body');
                                   body.push(Newbutton);
                                   component.set('v.body', body);
                               }
    });		
	},
    handledyn : function(component, event, helper) {
        alert('New Button Created');
    },
})