public class NewSampleLCompControllerapex {
    
    @AuraEnabled
    public Static List <Contact> getContacts(String recordId) {
        list <contact> c = [select Id, FirstName, LastName from Contact where AccountId =: recordId];
        return c;
    }
   
    @AuraEnabled
    public Static String createContacts(String recordId, String firstName, String lastName) {
        system.debug('Reached the Server Controller');
    Contact c = new Contact();
        c.FirstName = firstName;
        c.LastName = lastName;
        c.AccountId = recordId;
        Insert c;
        return c.Id;
    }

}