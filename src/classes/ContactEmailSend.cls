public class ContactEmailSend {
    
    
    @AuraEnabled
    public static void contactsendmailhtml(string contactid, string pershingno)
    {
        EmailTemplate emailTemplate = [select Id, Subject, HtmlValue, Body from EmailTemplate where name = 'HTMLEmailTemplate']; // or use email template name instead
        contact contactlist = [select ID, Account.Name, Account.AccountNumber, Account.Fax, Account.Phone, Account.Website, Name, FirstName, LastName, Phone, Email from contact where ID =: contactid limit 1];
     
            String subject = emailTemplate.Subject;
 
            String htmlBody = emailTemplate.HtmlValue;
            htmlBody = htmlBody.replace('{!Contact.Name}', contactlist.Name);
            htmlBody = htmlBody.replace('{!RepName}', contactlist.Account.Name);
            htmlBody = htmlBody.replace('{!RepAccountNumber}', pershingno );
            htmlBody = htmlBody.replace('{!RepPhoneNumber}', contactlist.Account.Phone);
            htmlBody = htmlBody.replace('{!RepFaxNumber}', contactlist.Account.Fax);
            htmlBody = htmlBody.replace('{!Repwebsite}', contactlist.Account.Website);
        
      		htmlBody = htmlBody.replace('{!First}', 'Naveen'); 
            htmlBody = htmlBody.replace('{!Last}', 'Kumar');
            htmlBody = htmlBody.replace('{!Digest}', 'XXXXXXXXXXX');
            
        /*
            String plainBody = emailTemplate.Body;
            plainBody = plainBody.replace('{!Contact.Name}', contactlist.Name);
            plainBody = plainBody.replace('{!RepName}', contactlist.Account.Name);
            plainBody = plainBody.replace('{!RepAccountNumber}', contactlist.Account.AccountNumber);
            plainBody = plainBody.replace('{!RepPhoneNumber}', contactlist.Account.Phone);
            plainBody = plainBody.replace('{!RepFaxNumber}', contactlist.Account.Fax);
        	plainBody = plainBody.replace('{!Repwebsite}', contactlist.Account.Website); */
                      
        
                //build the email message
            Messaging.Singleemailmessage email = new Messaging.Singleemailmessage();
        
            //email.setReplyTo(l.DripFromEmail__c);
            email.setSenderDisplayName(contactlist.Account.Name);
            email.setTargetObjectId(contactlist.ID);
            email.setSaveAsActivity(false);
        
            email.setSubject(subject);
            email.setHtmlBody(htmlBody);
            
        
            Messaging.sendEmail(new Messaging.SingleEmailmessage[] {email});
        
        }
    
}