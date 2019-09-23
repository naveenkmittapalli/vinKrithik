@RestResource(urlMapping='/Accounts/*/contacts')
global with sharing class AccountManager {
    @HttpGet
    global static Account getAccount() {
        RestRequest request = RestContext.request;
        String accountId = request.requestURI.substringBetween('Accounts/','/contacts');
        system.debug(accountId);
        Account a = [select Id, Name, (select Id, Name from Account.Contacts) From Account where Id =: accountId];
        return a;        
    }
}