@isTest
private class DailyLeadProcessorTest {
    // Dummy CRON expression: midnight on March 15.
    // Because this is a test, job executes
    // immediately after Test.stopTest().
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    static testmethod void testScheduledJob() {
        // Create some Lead records
        List<Lead> Leads = new List<Lead>();
        Lead lead = new Lead ();
        // insert 10 accounts
        for (Integer i=0;i<200;i++) {
            lead = new Lead ();
            lead.LastName ='Account '+i ;
            lead.Company = 'NavTech';
            Leads.add(lead);
        }
        insert Leads; 
       Test.startTest();
        // Schedule the test job
        String jobId = System.schedule('ScheduledApexTest', CRON_EXP, new DailyLeadProcessor());                
        Test.stopTest();
    }
}