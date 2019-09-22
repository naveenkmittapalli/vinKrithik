// Code to avoid Recursive Triggers
trigger RecursiveTrigger on Contact (after update) {   
    Id cid;
    if(recursiveness.recursive) {
        for(Contact c : trigger.new) {
            cid = c.id;
        }    
        list <contact> c1 = [select Id, Email from contact where Id != : cid];
        for(contact c : c1) {
            c.Email = 'Naveen';
            update c;
        }
        recursiveness.recursive = false;
    }
}