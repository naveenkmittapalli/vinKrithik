public with sharing class vfController {
    String recId {get; set;}
    
    public vfController(){
        recId = ApexPages.currentPage().getParameters().get('id') ;
    }

}