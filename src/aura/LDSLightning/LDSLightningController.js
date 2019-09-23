({
	doInit : function(component, event, helper) {
        component.find('recordCreater').getNewRecord(
        'Beer__c',
         null,
         false,
         $A.getCallback(function() {
           	var record = component.get('v.record');
           	var error = component.get('v.recordError');
        	if(error || record == null) {
            	console.log('Error while creating Template');
            }
        else {
            console.log('Template created successfully');
            //alert('Template created successfully');
        	}           
        })
        );		
	},
    saveRecord : function(component, event, helper) {
        component.set('v.recordFields1.Id__c', '12345');
        component.find('recordCreater').saveRecord( function(saveResult) {
            if(saveResult.state === "SUCCESS" ||  saveResult.state === "DRAFT") {
                var showToast = $A.get('e.force:showToast');  
                showToast.setParams ({
                    "title" : "Record Saved",
                    "type" : "Success",
                    "message" : "Record Successfully Saved" + saveResult.id
                });
                showToast.fire();
            }
            else if (saveResult.state === "INCOMPLETE") {                
            }
                else if (saveResult.state === "ERROR"){
                    console.log('Error while saving record'+ JSON.stringify(saveResult.error));
                }
                    else {console.log('Unknown Error while saving record'+ JSON.stringify(saveResult.error)); 
                         }            
        });
    },
    
    deleteRecord : function(component, event, helper) {       
        component.find('recordDeleter').deleteRecord( $A.getCallback(function(deleteResult) {
            if(deleteResult.state === "SUCCESS" ||  deleteResult.state === "DRAFT") {
                var showToast = $A.get('e.force:showToast');  
                showToast.setParams ({
                    "title" : "Record Deleted",
                    "type" : "Success",
                    "message" : "Record Successfully Deleted"  
                });
                showToast.fire();
                var pageReference = component.find('navRef');
                var pageReferenceNav = {
            	"type": 'standard__objectPage',
            	"attributes": {
                	"objectApiName": 'Beer__c',
                    "actionName" : 'list'
            	},
            	"state": {                    
            	}
                };
                pageReference.navigate(pageReferenceNav);                    
        }        
            else if (deleteResult.state === "INCOMPLETE") {                
            }
                else if (deleteResult.state === "ERROR"){
                    console.log('Error while saving record'+ JSON.stringify(deleteResult.error));
                }
                    else { console.log('Unknown Error while saving record'+ JSON.stringify(deleteResult.error)); 
                         }            
        }) );
    },
})