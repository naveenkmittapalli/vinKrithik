public class WrpClsVFCtrl {
    public list <wrpcls> wrpClsLst {get; set;}
    wrpcls ACC1;
    list <account> listofaccs;
    Account acctoupdate;
    
    public WrpClsVFCtrl(){        
    	wrpClsLst = new list <wrpcls> ();
        listofaccs = [select Id, Name, Type, Industry, Phone from Account];
        for(Account a1 : listofaccs){
            ACC1 = new wrpcls();
            ACC1.acctoupdate = a1;
            ACC1.needupdate = false;
            wrpClsLst.add(ACC1);
        }      
    }
    
    public pageReference Save() {
        for(wrpcls w : wrpClsLst ) {
            system.debug('Value of Checkbox is ::::' + w.needupdate);
            if(w.needupdate == true) {
                w.acctoupdate.Phone = '111111111';
                Account  acctoupdate = new Account();
                acctoupdate = w.acctoupdate;
                update acctoupdate;
            }
        }
        return null;
    }
       
    class wrpcls {
        public Account acctoupdate {get; set;}
        public boolean needupdate {get; set;}        
    }
}