// Trigger to update Contacts Address when Accounts Address is changed
trigger AccountTrigger3 on Account (after update) {
    list <ID> listofaccs = new list <ID> ();
    list <account> accs = new list <Account> ();
    list <Contact> cnts = new list <Contact> ();
    for(Account a : trigger.new) {
        if(trigger.oldmap.get(a.id).BillingStreet != trigger.oldmap.get(a.id).BillingStreet) {
            listofaccs.add(a.id);    
        }        
    }
    accs = [select Id, BillingStreet, (select Contact.Id, Contact.MailingAddress from Account.Contacts) from Account where Id in : listofaccs];
    
    for(Account a : accs) {
        for(Contact c : a.contacts) {
            c.otherstreet = a.BillingStreet;
            cnts.add(c);
        }
    }
    update cnts;
    
}