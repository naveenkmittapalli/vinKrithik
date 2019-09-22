public class AnimalLocator {
    public static String getAnimalNameById(integer animalId) {
   
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        String endPoint = 'https://th-apex-http-callout.herokuapp.com/animals/' + animalId;
        String animalName;
        request.setEndpoint(endPoint);
        request.setMethod('GET');
        //request.setBody(animalId);
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if (response.getStatusCode() == 200) {
            // Deserializes the JSON string into collections of primitive data types.
            AnimalResponse p = (AnimalResponse) System.JSON.deserialize(response.getBody(), AnimalResponse.class);
            
            system.debug('Id is :::'+ p.animal.id);
            system.debug('name is :::'+ p.animal.name);
            animalName = p.animal.name;
            system.debug('eats is :::'+ p.animal.eats);
            system.debug('says is :::'+ p.animal.says);
        }
        return animalName;
    } 
    

}