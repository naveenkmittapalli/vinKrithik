public with sharing class Page1VFCtrl {
    
    public string inptext1 {get; set;}
    public string inptext2 {get; set;}
    public string inptext3 {get; set;}
    
    public Page1VFCtrl() {        
        inptext1 = 'Naveen';
        inptext2 = 'Vineela';
        inptext3 = 'Krithik';        
    }
    
    public pageReference move() {
        pageReference p1 = new pageReference ('/apex/Page2VF');
        p1.setRedirect(true);
        p1.getParameters().put('inptext1', inptext1);
        p1.getParameters().put('inptext2', inptext2);
        p1.getParameters().put('inptext3', inptext3);
        return p1;
    }

}