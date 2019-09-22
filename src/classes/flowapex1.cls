public with sharing class flowapex1 {

@InvocableMethod(Label = 'Trial1')
    public static list<string> getrepnos() {
        list <string> preps = new list <string> ();
        preps.add('1234');
        preps.add('124');
        preps.add('134');
        
        return preps;
        
    }
  /*  
    public class wrpclss {
    @InvocableVariable(required=true )
        public list <string> repnos = new list <string> ();
    
    }*/

}