public class schdlapx implements schedulable{    
    public schdlapx(){       
    }    
    public void execute (schedulableContext scon) {
        system.debug('I am in schedulable Apex');
    }
}