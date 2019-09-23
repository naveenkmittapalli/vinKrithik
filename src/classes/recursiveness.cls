public class recursiveness {
    public static boolean recursive = true;
    
    public list<contact> crtcnts (Id i, String name, decimal numcnts ) {
    list <contact> c1 = new list <contact> ();   
        for(integer j = 1 ; j <= numcnts; j++) {
            contact c = new contact();
            c.accountId = i;
            c.Lastname = name + j;
            c1.add(c);
        }
       return c1; 
    }
   
    
    
}