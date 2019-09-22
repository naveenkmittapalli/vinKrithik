public class RCustomerTriggerHandler {
    
    public static void beforeinsertHandler(list <RCustomer__c> Rcustomers) {
        set <string> RNames = new set <string> ();
        
        for(RCustomer__c r : Rcustomers){
            RNames.add(r.RCustomer_Name__c);
        }
        map <String, RCustomer__c> rm = new map <String, RCustomer__c>();
        list <RCustomer__c> RcustRecords = [select id, RCustomer_Name__c, Gender__c from RCustomer__c where RCustomer_Name__c in : RNames];
        for(RCustomer__c r : RcustRecords) {
            rm.put(r.RCustomer_Name__c, r);
        }
        
        for(RCustomer__c r : Rcustomers){
            if((rm.get(r.RCustomer_Name__c) != null) ) {
                r.adderror('Duplicate Record Found');
            }
        }
        
        for(RCustomer__c r : Rcustomers) {              
            if((r.Address__c == '') || (r.Address__c == null)){
                r.Address__c = 'California';
            }
        }  
    }
    
    public static void beforeupdateHandler(list <RCustomer__c> Rcustomers) {
        for(RCustomer__c r : Rcustomers) {
            if((r.Address__c == 'California') || (r.Address__c == null)){
                r.Address__c = 'New Jersey';
            }
        }  
    }
    
    public static void afterinsertHandler(list <RCustomer__c> Rcustomers) {
        for(RCustomer__c r : Rcustomers) {
            if(r.Gender__c == 'Male') {
                r.Salutation__c = 'Mr';
            }
            else if(r.Gender__c == 'Female') {
                r.Salutation__c = 'Miss';
            }
            update r;
        }  
    }
    
    public static void afterupdateHandler(list <RCustomer__c> Rcustomers) {
        set <string> RNames = new set <string> ();
        
        for(RCustomer__c r: Rcustomers){
            RNames.add(r.RCustomer_Name__c);
            system.debug('Customer Name is :::' + r.RCustomer_Name__c);
        }
        list <custcontact__c>  custcntct = [select Id, Name from custcontact__c where Name in : RNames];
        if(custcntct.size() > 0){
            delete custcntct;
        }
    }
    
    public static void beforedeleteHandler(list <RCustomer__c> Rcustomers) {
    	for(RCustomer__c r : Rcustomers) {
            r.adderror('No Customer Records Can be Deleted');
        }
    }

}