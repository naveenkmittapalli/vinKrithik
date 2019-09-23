public class DataTableApex {
    
    @AuraEnabled
    public static list<Account> fetchRecords () {
        
        return([Select Id, Name, Industry, Rating, Phone from Account where Phone != null limit 10]);
    }

}