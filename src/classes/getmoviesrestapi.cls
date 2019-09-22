public class getmoviesrestapi {

    string URL = 'https://api.androidhive.info/json/movies.json';
    string jsonresponse;
    string inputjson;
	public Http http;
    public HttpRequest httpRequest;
    public httpResponse httpResponse;
    
    public getmoviesrestapi() {
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
        
        moviedetails m1 = new moviedetails();
        List <moviedetails> r1 = m1.parse(jsonresponse);
        List<moviedetails> s1 = (List<moviedetails>) System.JSON.deserialize(jsonresponse, List<moviedetails>.class);
	       
        for(moviedetails m : r1) {
            system.debug('title is'+ m.title);
            system.debug('image is'+ m.image);
            system.debug('rating is'+ m.rating);
            system.debug('releaseYear is'+ m.releaseYear);
            for(string genrename : m.genre){
                system.debug('Genre is'+ genrename);
            }
            
        }
// Parse the Response
//blob indata = EncodingUtil.base64Encode(jsonresponse);
//jsonresponse = indata.toString();
    }
	public class moviedetails {
		public String title;
		public String image;
		public Double rating;
		public Integer releaseYear;
		public List<String> genre;
        
        public List<moviedetails> parse(String json) {
		return (List<moviedetails>) System.JSON.deserialize(json, List<moviedetails>.class);
	}
	}
    
    

}