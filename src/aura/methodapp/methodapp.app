<aura:application extends="force:slds">
    <c:parentcomp/>


<br></br>    
    <br></br>    
    Display a single Record in View Only Mode
    <lightning:recordForm
        recordId="0031U000004gdcqQAA"
        objectApiName="Contact"
        layoutType="Compact"
        columns="1"
        mode="readonly" />
    
<br></br>    
    <br></br> 
    Display a Form to Create a New Contact Record
    <aura:attribute name="newContact" type="String[]" default="['LastName']" />
     <lightning:recordForm
         objectApiName="Contact"
         layoutType="Full"
         fields="{!v.newContact}"
         columns="2"
         mode="edit"
         onsubmit="{!c.handleSubmit}" />
	
</aura:application>