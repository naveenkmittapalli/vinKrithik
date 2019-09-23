public class flowInvocableMethod {
    
    @InvocableMethod(label='Child Record Creation')
    public static void doAction(List <String> precdId) {
    CObject__c c = new CObject__c ();
    c.Price__c = '2000';
        c.Rating__c = '3';
        c.Satisfaction__c = 'No';
        c.P_Object__c = (Id) precdId[0];
        Insert c;
        
    }

}