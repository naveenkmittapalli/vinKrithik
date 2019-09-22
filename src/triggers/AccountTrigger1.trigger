// Trigger to update the Contact Phone numbers when Account Phone Number gets updated Using Relationship Query
trigger AccountTrigger1 on Account (after update) {  
    map <id, Account> m = trigger.newmap;
    list <account> a = [select Id, Name, Phone, (select Id, accountid, phone from Account.contacts) from Account where Id in :m.keySet()];    
    list <contact> c1 =  new list <contact> ();
    for (Account a1: a ) {
        for(Contact c : a1.contacts){
            c.phone = a1.phone;
            c1.add(c);
        }
    } 
    update c1;
}