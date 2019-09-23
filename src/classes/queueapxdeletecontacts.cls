public class queueapxdeletecontacts implements Queueable{
    
    public list <id> ContactIds;
    list <contact> c1 ;
    
    public queueapxdeletecontacts() {
        ContactIds = new list <id>();
    }
    
    public void execute (queueableContext con) {
        c1 = [select id, LastName from contact where LastName like : 'JUJJU%'];
        delete c1;               
    }
}