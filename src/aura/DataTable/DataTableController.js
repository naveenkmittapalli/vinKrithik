({
	doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Id', fieldName: 'Id', type: 'text'},
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'Industry', fieldName: 'Industry', type: 'text'},
            {label: 'Rating', fieldName: 'Rating', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'text'},
        ]);
        var action = component.get('c.fetchRecords');
            action.setCallback(this, function(response) {
            	var state = response.getState();
            	if(state === 'SUCCESS' ||  state === 'DRAFT' ){
            		component.set('v.data', response.getReturnValue());
            	}          
            });
            $A.enqueueAction(action);		
	},
    doSelect : function(component, event, helper) {
            //alert('Selected a Row');
            var selectedRows =  event.getParam('selectedRows');
            console.log('Rows Select', selectedRows);
            }
})