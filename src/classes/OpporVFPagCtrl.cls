public class OpporVFPagCtrl {
    
    public list <opportunity> o1 {get; set;}
    public list <opportunity> o2 {get; set;}
    public list <opportunity> o3 {get; set;}
    public list <opportunity> o4 {get; set;}
    public list <opportunity> o5 {get; set;}
    public list <opportunity> o6 {get; set;}
    public list <opportunity> o7 {get; set;}
    
    public OpporVFPagCtrl() {
        o1 = [select Name, Account.Name, Amount, CloseDate, StageName from opportunity where StageName = 'Closed Won'];
        o2 = [select Name, Account.Name, Amount, CloseDate, StageName from opportunity where StageName = 'Qualification'];
        o3 = [select Name, Account.Name, Amount, CloseDate, StageName from opportunity where StageName = 'Value Proposition'];
        o4 = [select Name, Account.Name, Amount, CloseDate, StageName from opportunity where StageName = 'Perception Analysis'];
        o5 = [select Name, Account.Name, Amount, CloseDate, StageName from opportunity where StageName = 'Prospecting'];
        o6 = [select Name, Account.Name, Amount, CloseDate, StageName from opportunity where StageName = 'Negotiation/Review'];
        o7 = [select Name, Account.Name, Amount, CloseDate, StageName from opportunity where StageName = 'Id. Decision Makers'];
    }
}