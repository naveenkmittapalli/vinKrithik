public with sharing class restVfpageCtrler {

        public static string URL ;
        public static string jsonresponse;
        public static Http http;
        public static HttpRequest httpRequest;
        public static httpResponse httpResponse;
        string inputjson;
    
    public restVfpageCtrler() {
        URL = 'https://api.androidhive.info/contacts/';    
        http = new http();
        httpRequest =  new httpRequest();
        httpResponse = new httpResponse();
            
    }
       
    public pagereference callRestApi() {
        
        return null;
        
    }

}