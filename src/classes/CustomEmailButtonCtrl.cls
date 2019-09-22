public class CustomEmailButtonCtrl {
    public string RecId {get; set;}
    public boolean RepROBOIAR {get;set;}
    
    public CustomEmailButtonCtrl(ApexPages.StandardController controller) {
        RecId = apexpages.currentpage().getparameters().get('id');
        
    }
    
    public pageReference CustomEmail() {
        RepROBOIAR = true;
        if(RepROBOIAR){
            PageReference pageRef = Page.PershingNumberSelectVF;     
            pageRef.getParameters().put('RECID',RecId);
            return pageRef;
        }
        else
        {
            PageReference pageRef = Page.ROBONoAccessPage;     
            pageRef.getParameters().put('RECID',RecId);
            return pageRef;
        }
        
    }

}