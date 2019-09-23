@isTest
public class AddPrimaryContactTest {
    
    @testSetup 
   
    static void setup() {
        List<Account> accounts = new List<Account>();
       
        // insert 50 accounts
        for (Integer i=0;i<50;i++) {
            accounts.add(new Account(name='Account '+i, billingcity='New York', billingcountry='USA', billingState='NY'));
        }
        
        
        for (Integer i=0;i<50;i++) {
            accounts.add(new Account(name='Account '+i, billingcity='New York', billingcountry='USA', billingState='CA'));
        }
        insert accounts;
        
        Contact c = new Contact(firstname='firstName', lastname='lastName');
        insert c;
        
    }
    
    static testmethod void testQueueable() {
        
        // Create our Queueable instance
        Contact c = [select Id, FirstName, LastName from Contact where FirstName =: 'firstName' and LastName =: 'lastName'];
        AddPrimaryContact updater = new AddPrimaryContact(c, 'CA');
        // startTest/stopTest block to force async processes to run
        Test.startTest();        
        System.enqueueJob(updater);
        Test.stopTest();        
        
    }
    
}