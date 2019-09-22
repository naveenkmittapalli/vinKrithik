public class EmailSendStatusCtrl {
    public string RecId {get; set;}
    public string SelPershingNo {get; set;}
    public EmailSendStatusCtrl(ApexPages.StandardController controller)
    {
        if(System.currentPagereference().getParameters().get('RECID') != null) {
           RecId =  System.currentPagereference().getParameters().get('RECID');
           SelPershingNo =  System.currentPagereference().getParameters().get('SELPERSHINGNO');
        }
    }
    
    public pageReference ReturnToContact() {
        PageReference pageRef = new PageReference('/'+RecId);
        return pageRef;
    }

}