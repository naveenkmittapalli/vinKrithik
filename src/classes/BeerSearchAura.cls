public with sharing class BeerSearchAura {
    
    @AuraEnabled
    public static list <sObject> getBeerDetails (string searchText) {
        String Query = '';
        if(searchText != null) {
        	String sText = '%' + searchText + '%';        
        	//list <sObject> res = [select Id, Tags__c, Alcohol__c, Brewery_Name__c, Brewery_Id__c, Price__c, Name from beer__c where Name like : sText];
        	//list <sObject> res = [select Id, Tags__c, Alcohol__c, Brewery_Name__c, Brewery_Id__c, Price__c, Name from beer__c ];
        	Query = 'select Id, Tags__c, Alcohol__c, Brewery_Name__c, Brewery_Id__c, Price__c, Name from beer__c where Name like : sText limit 50';
        }
        else
        {
           Query =  'select Id, Tags__c, Alcohol__c, Brewery_Name__c, Brewery_Id__c, Price__c, Name from beer__c limit 50';
        }
        List <sObject> slist = Database.query(Query);
        return slist;
    }

}