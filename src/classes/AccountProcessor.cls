public class AccountProcessor {
    
    @Future
    public static void countContacts(list <ID> AccountIds) {
        integer numOfContact = 0;
        list <Account> accs1 = new list <Account>();
        list <Account> accs = [select Id, Name, (select Id, Name from Account.Contacts ) from Account Where Id in : AccountIds];
        for(Account a : accs) {
            numOfContact = 0;
            for(Contact c : a.Contacts) {
                numOfContact ++;                
            }
            a.Number_Of_Contacts__c = numOfContact;
            accs1.add(a);            
        }
        upsert accs1;        
    }
}