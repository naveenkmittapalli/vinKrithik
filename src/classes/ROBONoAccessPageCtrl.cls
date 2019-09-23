public with sharing class ROBONoAccessPageCtrl {
    string RecId {get; set;}
    public ROBONoAccessPageCtrl(ApexPages.StandardController controller) {
        if(System.currentPagereference().getParameters().get('RECID') != null) {
           RecId =  System.currentPagereference().getParameters().get('RECID');
        }
        
    }
    
    public pageReference ReturnToContact() {
        PageReference pageRef = new PageReference('/RecId');
        return pageRef;
    }

}