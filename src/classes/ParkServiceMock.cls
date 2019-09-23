@isTest
global class ParkServiceMock implements WebServiceMock {
   global void doInvoke(
           Object stub,
           Object request,
           Map<String, Object> response,
           String endpoint,
           String soapAction,
           String requestName,
           String responseNS,
           String responseName,
           String responseType) {
        list <string> parkNames = new list <string> ();
        parkNames.add('AAAA');
        parkNames.add('AAAB');
        parkNames.add('AABA');
        parkNames.add('ABAA');
        // start - specify the response you want to send
        ParkService.byCountryResponse  response_x = new ParkService.byCountryResponse();
        response_x.return_x = parkNames;
        // end
        response.put('response_x', response_x); 
   }
}