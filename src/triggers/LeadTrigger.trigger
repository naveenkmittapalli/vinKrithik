trigger LeadTrigger on Lead (before delete) {
    
    for(Lead L : trigger.new) {
        L.addError('Leads cannot be deleted');
    }
    
    

}