Global class createContactService {


    webservice static string ContactRegistration(string LastName, string Description) {
            contact c = new contact();
            c.LastName =  Lastname;
            c.Description = Description;
            insert c;
            if(c.Id != null) {
                return 'SUCCESS'; 
            }
            else
            {
                return 'FAILURE';
            }
         
         }
 
}