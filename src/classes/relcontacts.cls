public class relcontacts {
    @AuraEnabled
    
    public static list<contact> getcontactlist(string accountid) {
        list <contact> contactlist = new list <contact> ();
        contactlist = [select ID, Name, FirstName, LastName, Phone, Email from contact where Account.ID =: accountid ];
        return contactlist;
        
    }
    
    @AuraEnabled
    public static void SaveRecord(string recordId, string FirstName, string LastName, string Phone, string Email) {
        contact c = new contact();
        c.FirstName = FirstName;
        c.LastName = LastName;
        c.Phone = Phone;
        c.Email = Email;
        c.AccountId = recordId;
        insert c;  
    }

}