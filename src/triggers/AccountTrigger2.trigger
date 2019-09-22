// Trigger on Account to create Opportunity and Contact once Account is created
trigger AccountTrigger2 on Account (after insert) {   
    opportunity o ;
    contact c ;
    list <opportunity> o1 = new list <opportunity> ();
    list <contact> c1 = new list <contact> ();
    
    for(Account a : trigger.new) {
        o = new opportunity ();
        c = new contact ();
        o.AccountId = a.Id;
        o.Name = a.Name;
        o.StageName = 'Prospecting';
        o.CloseDate = system.today() + 60;
        c.AccountId = a.Id;
        c.Lastname = a.Name;
        o1.add(o);
        c1.add(c);        
    }
}