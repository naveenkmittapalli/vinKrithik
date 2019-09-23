global class surveyprocess {
    
    @InvocableMethod
    public static void saveSurvey(List<ParameterList> arguments) {
        
        system.debug('arguments ::::' +arguments);
        if((arguments) != null && (arguments.size()) > 0 && (arguments[0].custcontactid != null) 
           					   && (arguments[0].q1ans != null) && (arguments[0].q2ans != null )
                               && (arguments[0].q3ans != null) && (arguments[0].q4ans != null)) {
            
        }
    }
    
    public class ParameterList {
        @InvocableVariable(label = 'custcontactid')
        public string custcontactid;
		
		@InvocableVariable(label = 'q1ans')
        public string q1ans;
        
        @InvocableVariable(label = 'q2ans')
        public string q2ans;
        
        @InvocableVariable(label = 'q3ans')
        public string q3ans;
        
        @InvocableVariable(label = 'q4ans')
        public string q4ans;
        
    }

}