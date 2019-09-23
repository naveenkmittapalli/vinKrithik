public with sharing class SurveyPageController {
    
    public Survey__c s {get; set;}
    public custcontact__c c {get; set;}
    string id;
    
    public SurveyPageController(ApexPages.StandardController stdController) {
        Survey__c s = new Survey__c();
        id = ApexPages.CurrentPage().getParameters().get('id');
        c = [select Id, Q1Result__c, Q2_Result__c, Q3Result__c, Final_Results__c from custcontact__c where Id =: id];
    }
    
    public pageReference SaveSurvey() {
        insert s;        
        c.Q1Result__c = c.Q1Result__c + ',' + s.Satisfaction__c;
        c.Q2_Result__c = c.Q2_Result__c + ',' + s.Rating__c;
        c.Q3Result__c = c.Q3Result__c + ',' + s.Comments__c;
        c.Final_Results__c = c.Q1Result__c + '\n' + c.Q2_Result__c + '\n' + c.Q3Result__c;
        update c;
        return null;
    }      

}