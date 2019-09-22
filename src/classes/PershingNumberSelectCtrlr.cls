public with sharing class PershingNumberSelectCtrlr {
    
    public string SelPershingNo {get;set;}
    public list <SelectOption> AvlblPershingNos {get;set;}
    public string RecId {get;set;}
    
    List<SelectOption> options = new List<SelectOption>();
    

    
    public PershingNumberSelectCtrlr() {
        AvlblPershingNos = new List<SelectOption>();
        AvlblPershingNos.add(new SelectOption('12345','12345'));
        AvlblPershingNos.add(new SelectOption('54321','54321'));
        if(System.currentPagereference().getParameters().get('RECID') != null) {
           RecId =  System.currentPagereference().getParameters().get('RECID');
        }
    }
    
    public PageReference doContinue() {
        EmailTemplate emailTemplate = [select Id, Subject, HtmlValue, Body from EmailTemplate where name = 'HTMLEmailTemplate']; // or use email template name instead
        contact contactlist = [select ID, Account.Name, Account.AccountNumber, Account.Fax, Account.Phone, Account.Website, Name, FirstName, LastName, Phone, Email from contact where ID =: RecId limit 1];
     
        String subject = emailTemplate.Subject;
 
        String htmlBody = emailTemplate.HtmlValue;
        htmlBody = htmlBody.replace('{!Contact.Name}', contactlist.Name);
        htmlBody = htmlBody.replace('{!RepName}', contactlist.Account.Name);
        // htmlBody = htmlBody.replace('{!RepAccountNumber}', pershingno );
        htmlBody = htmlBody.replace('{!RepPhoneNumber}', contactlist.Account.Phone);
        htmlBody = htmlBody.replace('{!RepFaxNumber}', contactlist.Account.Fax);
        htmlBody = htmlBody.replace('{!Repwebsite}', contactlist.Account.Website);
        
        htmlBody = htmlBody.replace('{!First}', 'Naveen'); 
        htmlBody = htmlBody.replace('{!Last}', 'Kumar');
        htmlBody = htmlBody.replace('{!Digest}', 'XXXXXXXXXXX');
                  
        //build the email message
        Messaging.Singleemailmessage email = new Messaging.Singleemailmessage();
        
        //email.setReplyTo(l.DripFromEmail__c);
        email.setSenderDisplayName(contactlist.Account.Name);
        email.setTargetObjectId(contactlist.ID);
        email.setSaveAsActivity(false);
        
        email.setSubject(subject);
        email.setHtmlBody(htmlBody);
                  
        Messaging.sendEmail(new Messaging.SingleEmailmessage[] {email});
        
        // After Sending Mail Return to Contact Record Page
        PageReference pageRef = Page.EmailSendStatusVF;     
        pageRef.getParameters().put('RECID',RecId);
        pageRef.getParameters().put('SELPERSHINGNO',SelPershingNo);
        return pageRef;       
    }
    
    public pagereference doCancel() {
        PageReference pageRef = new PageReference('/RecId');
        return pageRef;
    }


}