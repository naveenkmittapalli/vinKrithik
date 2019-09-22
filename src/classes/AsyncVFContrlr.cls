public class AsyncVFContrlr {
    queueapxinsertcontacts ins;
    queueapxdeletecontacts del;    
    list <id> insContIds;    
    public integer numofcontacts {get; set;}
    
    public string futureMethodstr {get; set; }
    
    public AsyncVFContrlr() {
        
        ins = new queueapxinsertcontacts();
        del = new queueapxdeletecontacts();        
    }
    
          
    public pageReference insertCnts () {
        ins.numofcontacts = numofcontacts;
        Id Jobid = system.enqueueJob(ins);
        return null;
    }
    
    public pageReference deleteCnts () {
        Id Jobid = system.enqueueJob(del);
        return null;
    }
    

}