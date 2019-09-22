public with sharing class LcontactApex {
    
    
    @AuraEnabled
    public static list<contact> getContacts(string accountId) {
        list <contact>  lcontacts = new list <contact> ();
        lcontacts = [select Id, LastName, FirstName,  Email from Contact where AccountId = : accountId];
        return lcontacts;        
    }

}