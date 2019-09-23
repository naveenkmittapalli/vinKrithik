public class smoketestapex {
    
    @AuraEnabled
    public static list <string> getRepInfo() {
        list <string> pershingNos = new list <string> ();
        pershingNos.add('12345');
                        pershingNos.add('1345');
                        pershingNos.add('1245');
                        pershingNos.add('1235');
                        pershingNos.add('1234');
        return (pershingNos);
    }

}