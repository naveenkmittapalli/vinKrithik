global class DailyLeadProcessor implements Schedulable {
    global void execute(SchedulableContext ctx) {
        List<Lead> leads = [SELECT Id, Leadsource FROM Lead WHERE Leadsource = ''];
        // Create a task for each opportunity in the list
        List <Lead> mLeads = new List <Lead> ();
        for(Lead l : leads) {
            l.Leadsource = 'Dreamforce';
            mLeads.add(l);            
        }
        update mLeads;
    }
    
}