public class createContactForAccountApex {
    
    @AuraEnabled
    public static String createContactApex (String recordId, String firstName, String lastName){
        system.debug('I am in Apex now');
        Contact c = new Contact ();
        c.FirstName = firstName;
        c.LastName = lastName;
        c.AccountId = recordId;
        Insert c;
        return c.Id;
    }

}