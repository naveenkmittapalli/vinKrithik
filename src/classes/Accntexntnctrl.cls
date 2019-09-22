public class Accntexntnctrl {
    public string RecId {get;set;}
    public string FinalUrl {get; set;}
    public string PassedValueFromCmp{get;set;}


public Accntexntnctrl(ApexPages.StandardController controller) {
        RecId = apexpages.currentpage().getparameters().get('id'); 
        //FinalUrl = 'https://'+ ApexPages.currentPage().getHeaders().get('Host') + '/'+ RecId;
        FinalUrl = 'https://'+ ApexPages.currentPage().getHeaders().get('Host') + '/'+ 'apex/urlnavigate';
        PassedValueFromCmp = 'JUNK';
    }
    
    
}