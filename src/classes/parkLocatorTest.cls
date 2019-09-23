@isTest
private class parkLocatorTest {
    @isTest static void testCallout() {              
        // This causes a fake response to be generated
        Test.setMock(WebServiceMock.class, new ParkServiceMock());
        // Call the method that invokes a callout
        list <string> parkNames;
        parkNames = ParkLocator.country('INDIA');
        // Verify that a fake result is returned
        //System.assertEquals(3.0, result); 
    }
}