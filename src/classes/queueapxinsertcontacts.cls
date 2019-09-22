public class queueapxinsertcontacts implements Queueable{
    
    public decimal numofcontacts;
    public list <id> idsCntInserted;
    list <contact> c1 ;
    contact c;
    public void execute (queueableContext con) {
        c1 = new list <contact> ();
        for(integer i = 1 ; i < numofcontacts; i++){
            contact c = new contact();            
            c.Lastname = 'JUJJU' + i;
            system.debug('Added Jujju :::'+ i);
            c1.add(c);            
        }
        insert c1;  
        
        // Get the Ids of the COntacts created
        idsCntInserted = new list <id> ();
        for(contact c : c1) {
            idsCntInserted.add(c.Id);
        }
        system.debug('Ids of Contacts inserted :::' + idsCntInserted);
    }
}