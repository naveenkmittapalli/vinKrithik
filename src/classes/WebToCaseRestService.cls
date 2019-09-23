@RestResource(urlMapping='/WebToCase/*')
global with sharing class WebToCaseRestService {
    
    @HttpPost
    global static String createWebToCase()
    {
        //Courses data = (Courses)JSON.deserialize(RestContext.request.requestBody.toString(), Courses.class);
        //system.debug('Got this request' + jsonRequest);
        WebToCaseData.WebToCaseReqData w = new WebToCaseData.WebToCaseReqData();
        w = (WebToCaseData.WebToCaseReqData) System.JSON.deserialize(RestContext.request.requestBody.toString(), WebToCaseData.WebToCaseReqData.class); 
        system.debug('Got this request' + w);
        return 'YZYZ1';
        /*
        Case c = new Case ();
        c.origin = w.origin;
        c.priority = w.priority;
        c.Subject = w.Subject;
        c.Status = 'Escalated';
        //c.CreatedDate = w.openDate;
        Insert c;
        return c.Id; */
    }
}