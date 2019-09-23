public class Contactlist {
    
    @AuraEnabled
    
    public static list<contact> Contactinfo() {
        list <contact> contactlist = new list <contact> ();
        contactlist = [select Id, Name, Email, Phone from contact limit 10];
        //console.log('contactlist', contactlist);
        return contactlist;
    }

}