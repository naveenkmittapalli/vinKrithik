@isTest
public class AccountProcessorTest {
    
    @IsTest
    private static void countContacts() {
        Test.startTest();        
        List <id> accids = createAccount(5);
        AccountProcessor.countContacts(accids);
        Test.stopTest();
    }
    
    
    // Helper Method
    Static list <Id> createAccount (integer numOfAcc) {
        list <Id> accountIds = new List <Id> ();
        String accName = 'test Account';
        String newAccName ;
        for(integer i = 0 ; i < numOfAcc ; i++){
            newAccName = accName + i;
            Account objAccount = new Account(Name = newAccName);
        	insert objAccount;
            createContact(objAccount.Id, i+1);
            accountIds.add(objAccount.Id);
            
        }
        return accountIds;
    }
    Static void createContact (Id accountId, integer numOfContacts) {
        list <contact> insertedContacts = new list <contact> ();
        for(integer i = 0 ; i < numOfContacts ; i++){
        	Contact objContact = new Contact(LastName = 'test Contact' + i, AccountId = accountId);
            insertedContacts.add(objContact);
        }
        insert insertedContacts;
    }

}