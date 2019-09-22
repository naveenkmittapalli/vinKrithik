public class MailChkController {
   
    public pageReference SendMail() {
        
        EmailTemplate mailtemplate = [SELECT id, body, name FROM EmailTemplate where Name = 'RepEmail'];
        EmailTemplate complianceEmail = [SELECT id, body, name FROM EmailTemplate where Name = 'complianceEmail'];
        EmailTemplate websiteEmbedCode =[SELECT id, body, name FROM EmailTemplate where Name = 'WebsiteEmbedCode'];
        
        List<Messaging.EmailFileAttachment> email_attachments = new List<Messaging.EmailFileAttachment>();
       
               
        // Start Creating Compliance PDF attachment
		Messaging.EmailFileAttachment File1 = new Messaging.EmailFileAttachment();
    	Blob tempBlob = Blob.valueOf(complianceEmail.body);
		File1.Body = tempBlob;
    	File1.setContentType('application/pdf');
		File1.setFileName('Compliance.pdf');
    	File1.setInline(false);
        email_attachments.add(File1);
        
        // Start Creating WebsiteEmbedCode.txt attachment
        Messaging.EmailFileAttachment File2 = new Messaging.EmailFileAttachment();
        string WebsiteEmbedCode1 = websiteEmbedCode.body; 
        WebsiteEmbedCode1 = WebsiteEmbedCode1.replace('{!RepNumber}', 'ABCDEF');
    	tempBlob = Blob.valueOf(WebsiteEmbedCode1);
		File2.Body = tempBlob;    	
		File2.setFileName('WebsiteEmbedCode.txt');
    	File2.setInline(false);
        email_attachments.add(File2);
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        string address = 'naveenkmittapalli@gmail.com';
        list <string> toAddresses = new list <string>();
        toAddresses.add(address);       
        mail.setToAddresses(toAddresses);
        mail.setSenderDisplayName('REP ACCESS APPROVAL');
        mail.setBccSender(false);
        mail.setUseSignature(false);
        //mail.setPlainTextBody('Your Email has been sent'); 
        //mail.setTargetObjectId(oppr.OwnerId);
        mail.setSubject('REP ACCESS APPROVAL');
        mail.saveAsActivity = false;   
        mail.setTemplateId(mailtemplate.Id);
        
		mail.setFileAttachments(email_attachments);       
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });       
        return null;       
    }
}