public with sharing class justAClass {
    

    Account a;
    
    public justAClass() {
        a = [Select Id from Account limit 1];
    }
    
    public void someMethod() {
        system.debug('Got this Id');
    }

}