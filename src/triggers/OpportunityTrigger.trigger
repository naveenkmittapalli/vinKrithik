// Trigger on Opportunity to compare old and new Values
trigger OpportunityTrigger on Opportunity (after update) {
    map <id, Opportunity> oldvalues = trigger.oldmap;
    map <id, Opportunity> newvalues = trigger.newmap;
    
    list <ChildOpportunity__c> cos = new list <ChildOpportunity__c> ();
    ChildOpportunity__c nco;
    
    for(Opportunity o : trigger.new) {
        if((o.StageName == 'Closed-Won') && (oldvalues.get(o.id).StageName != 'Closed-Won')) {
            nco = new ChildOpportunity__c ();
            nco.Name__c = o.Name;
            nco.Opportunity__c = o.Id;
            cos.add(nco);
        }
    }
    insert cos;
}