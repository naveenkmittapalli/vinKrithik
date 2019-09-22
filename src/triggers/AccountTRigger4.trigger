// Trigger to delete the contacts when an Account gets deleted
trigger AccountTRigger4 on Account (after delete) {
    list <Account> acc = trigger.new;
    list <Id> accids = new list <Id> ();
    
    for(Account a : acc) {
        accids.add(a.id);
    }
    
    list <contact> c = [select Id, accountid from contact where Id in : accids];
    delete c;

}