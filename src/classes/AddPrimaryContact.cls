public class AddPrimaryContact implements Queueable {
    String state;
    Contact cntct;
    
    public AddPrimaryContact (Contact c, String st) {
        state = st;
        cntct = c;        
    }
    
    private List<Account> accounts;
    private ID parent;
    
   
    public void execute(QueueableContext context) {
        List <account> accs = [select Id, BillingState  from Account where BillingState = : state limit 200];
        List <contact> cnts = new List <contact> ();
        for(account a : accs) {
            Contact c = new Contact ();
            c.FirstName = cntct.FirstName;
            c.LastName = cntct.LastName;
            c.AccountId = a.Id;
            cnts.add(c);           
        }
        insert cnts;
    }
    
}