@isTest
private class AnimalLocatorTest {
    @isTest 
    static void getAnimalNameById() {
    // Set mock callout class 
    Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock()); 
    // This causes a fake response to be sent
    // from the class that implements HttpCalloutMock. 
    integer animalId = 1;
    String response = AnimalLocator.getAnimalNameById(animalId);
    // Verify that the response received contains fake values
        if(response == 'chicken') {system.debug('correct response :::'+ response);
                                  }
}
}