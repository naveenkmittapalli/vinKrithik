public with sharing class LQuickContactApex {
    
	@AuraEnabled 
    public static contact createContact(contact con, Id AccountId) {        
        con.AccountId = AccountId;        
        insert con;
        return con;        
    }
}