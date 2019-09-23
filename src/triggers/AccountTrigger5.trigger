// Trigger to insert Contacts based on a field on Account

trigger AccountTrigger5 on Account (after insert) {
    
    list <contact> c1 ;
    list <contact> c2 = new list <contact> ();
    
    for(Account a : trigger.new) {
        recursiveness r = new recursiveness();
        c1 = new list <contact> ();
        c1 = r.crtcnts( a.Id, a.Name, a.Number_Of_Contacts__c);
        c2.addAll(c1);              
    }
  system.debug('Contacts being inserted are: ' + c2);
    insert c2;
}