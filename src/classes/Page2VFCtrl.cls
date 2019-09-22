public class Page2VFCtrl {
    
    public string inptext1 {get; set;}
    public string inptext2 {get; set;}
    public string inptext3 {get; set;}
    
    public Page2VFCtrl() {
        inptext1 = ApexPages.currentPage().getParameters().get('inptext1');
        inptext2 = ApexPages.currentPage().getParameters().get('inptext2');
        inptext3 = ApexPages.currentPage().getParameters().get('inptext3');
    }
}