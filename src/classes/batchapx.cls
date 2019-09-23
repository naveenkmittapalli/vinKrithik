public class batchapx implements Database.Batchable<sObject> {    
    string field;
    string query;
    string value;
  
    public batchapx(string f, string q, string v) {
    	field = f;
        query = q;
        value = v;
    }
    
    public Database.QueryLocator start(Database.BatchableContext con) {
        return Database.getQueryLocator(query);
    }
    
    public void execute(Database.BatchableContext con, list <account> scope) {
        for(Account a: scope) {
            a.put(field, value);            
        }
        update scope;
    }
    
    public void finish(Database.BatchableContext con) {}
}