//Test Class
@isTest
private class LeadProcessorTest {
    @testSetup 
    static void setup() {
        List<Lead> Leads = new List<Lead>();
        Lead lead = new Lead ();
        // insert 10 accounts
        for (Integer i=0;i<200;i++) {
            lead = new Lead ();
            lead.LastName ='Account '+i ;
            lead.Company = 'NavTech';
            lead.LeadSource = 'DreamForce';
            Leads.add(lead);
        }
        insert Leads;        
    }
    static testmethod void test() {        
        Test.startTest();
        LeadProcessor lp = new LeadProcessor();
        Id batchId = Database.executeBatch(lp);
        Test.stopTest();
        // after the testing stops, assert records were updated properly
        //System.assertEquals('DreamForce', [select FirstName from Lead where LeadSource = 'DreamForce']);
    }
    
}