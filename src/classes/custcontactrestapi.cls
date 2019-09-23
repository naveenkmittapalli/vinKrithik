public class custcontactrestapi {
    
    public static string URL = 'https://api.androidhive.info/contacts/';
    public static string jsonresponse;
    string inputjson;
	public static Http http;
    public static HttpRequest httpRequest;
    public static httpResponse httpResponse;

    public static void custcontactrestapiget() {
		// Create the Request
		http = new http();
		httpRequest = new httpRequest();
		httpResponse = new httpResponse();
		httpRequest.setMethod('GET');
		httpRequest.setHeader('content-type', 'application/json');
		httpRequest.setTimeout(120000);
		//httpRequest.setClientCertificateName(CERT_VALUE);
		httpRequest.setEndpoint(URL);
		//httpRequest.setBody(inputjson);

		// To set the Username and Password as part of the Request
		String username = 'myname';
    	String password = 'mypwd';
  
    	//Blob headerValue = Blob.valueOf(username + ':' + password);
    	//String authorizationHeader = 'BASIC ' + EncodingUtil.base64Encode(headerValue);
    	//httpRequest.setHeader('Authorization', authorizationHeader);
		// Send the Request
		httpResponse = http.send(httpRequest);
		jsonresponse = httpResponse.getBody();
        system.debug('Got this Response' + jsonresponse );
        
        cntresponse r1 = (cntresponse) System.JSON.deserialize(jsonresponse, cntresponse.class);
        
        for(contacts z : r1.contacts) {
            system.debug('id is'+ z.id);
            system.debug('Name is'+ z.name);
            system.debug('Email is'+ z.email);
            system.debug('Address is'+ z.address);
            system.debug('Gender is'+ z.gender);
            for(phone p : z.phone){
            	system.debug('Mobile is' + p.mobile);
                system.debug('Mobile is' + p.home);
                system.debug('Mobile is' + p.office);
            }
            
        }
// Parse the Response
//blob indata = EncodingUtil.base64Encode(jsonresponse);
//jsonresponse = indata.toString();
    }


	public class contacts {
    	public string id;
    	public string name;
    	public string email;
    	public string address;
    	public string gender;
        public list <phone> phone;
	}

	public class cntresponse {
    	public list <contacts> contacts;
	}
    
    public class phone {
        public string mobile;
        public string home;
        public string office;
    }
}