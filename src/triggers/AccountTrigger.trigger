// Trigger to update the Contact Phone numbers when Account Phone Number gets updated Using Map
trigger AccountTrigger on Account (after update) {    
    map <id, Account> m = trigger.newmap;
    list <contact> c = [select Id, accountid, phone from contact where accountid in : m.keySet()]; 
    list <contact> c2 = new list <contact> ();
    for(contact c1 : c){
        c1.phone = m.get(c1.accountid).phone;
        c2.add(c1);
    }
    update c2;
}