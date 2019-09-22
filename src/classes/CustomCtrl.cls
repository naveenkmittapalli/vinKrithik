public with sharing class CustomCtrl {
    
    public string Acct_Type {get; private set;}
    public list <Account> a {get; set;}
    public list <Account> a_c {get; set;}
    public list <Account> a_d {get; set;}
    public boolean renderr {get; set;}
    public string aid {get; set;}
    
    public list <selectOption> actype {get; set;}
    public string selactype {get; set;}
    
    public list <Account> a_sel {get; set;}
    public boolean srenderr {get; set;}
    
    
    public CustomCtrl() {
        a_c = [select Id, Name, Type, Industry, Phone from Account where Type = 'Customer - Channel']; 
        a_d = [select Id, Name, Type, Industry, Phone from Account where Type = 'Customer - Direct'];
        actype = new list <selectOption> ();
        actype.add(new selectOption('Customer - Channel', 'Customer - Channel' ));
        actype.add(new selectOption('Customer - Direct', 'Customer - Direct'));
        renderr = false;
        srenderr = false;
    }
    
    public pageReference Channel_Acts() {
        a= [select Id, Name, Type, Industry, Phone from Account where Type = 'Customer - Channel'];
        Acct_Type = 'Customer - Channel Accounts';
        return null;
    }
    
    public pageReference Direct_Acts() {
        a= [select Id, Name, Type, Industry, Phone from Account where Type = 'Customer - Direct'];
        Acct_Type = 'Customer - Direct Accounts';
        renderr = true;
        return null;
    }
    
    public pageReference Render_Chk() {
        renderr = true;
        return null;
    }
    
    public pageReference GOTOVF() {        
        return Page.GoodByeVFPage;
    }
    
    public pageReference GOTOID() {
        string aid = '0011U0000075B1I'; 
        PageReference nextPage = new PageReference('/' + aid);
        return nextPage;        
    }
    
    public pageReference accsearch() {
        srenderr = true;
        if(selactype == 'Customer - Channel') {
            a_sel = [select Id, Name, Type, Industry, Phone from Account where Type =: 'Customer - Channel'];         
        }
        else if(selactype == 'Customer - Direct')
        {
           a_sel = [select Id, Name, Type, Industry, Phone from Account where Type =: 'Customer - Direct']; 
        }
        
        return null;
    }
    

}