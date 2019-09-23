@RestResource(urlMapping='/contactDetails/*')
global class gcontactDetails {
    
    // To test this goto https://workbench.developerforce.com
    
    
    // Select Get
    // /services/apexrest/contactDetails/***ID***
    @Httpget
    global static contact getContact() {
        Restrequest req = Restcontext.request;
        Restresponse res = Restcontext.response;       
        string id = req.requestURI.substring(req.requestURI.lastindexof('/')+1);
        contact c = [select Id, LastName from contact where id =: id];
        return c;      
    }
    
    // Select Post
    // /services/apexrest/contactDetails/
    // In the Request Body put 
    // {"Lastname":"MITTAPALLI" }
    @Httppost
    global static string postContact(string Lastname) {
        /*
        contact c = new contact();
        c.LastName = Lastname;
        insert c;
        return(c.id);  */
        return '123456';
    }
    
    // Select Delete
    // /services/apexrest/contactDetails/***ID***
    @Httpdelete
    global static void deleteContact() {
        Restrequest req = Restcontext.request;
        Restresponse res = Restcontext.response;       
        string id = req.requestURI.substring(req.requestURI.lastindexof('/')+1);
        contact c = [select Id, LastName from contact where id =: id];
        delete c;         
    }
    
    // Select Patch
    // /services/apexrest/contactDetails/***ID***
    // In the Request Body put 
    // {"Lastname":"MITTAPALLI" }
    @Httppatch
    global static string patchContact(string Lastname) {
        Restrequest req = Restcontext.request;
        Restresponse res = Restcontext.response;       
        string id = req.requestURI.substring(req.requestURI.lastindexof('/')+1);
        contact c = [select Id, LastName from contact where id =: id];
        c.LastName =  Lastname;
        update c;
        return c.Id;
        
    }
    
    // Select Put
    // /services/apexrest/contactDetails/***ID*** --> Optional
    // In the Request Body put 
    // {"Lastname":"MITTAPALLI" } 
    @Httpput
    global static string putContact(string Lastname) {
        Restrequest req = Restcontext.request;
        Restresponse res = Restcontext.response;       
        string id = req.requestURI.substring(req.requestURI.lastindexof('/')+1);
        if(id != null) {
            contact c = [select Id, LastName from contact where id =: id];
            c.LastName =  Lastname;
            update c;
            return(c.id);
        }
        else {
            contact c = new contact();
            c.LastName = Lastname;
            insert c; 
            return(c.id);
        }        
    }   
}