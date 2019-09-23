<aura:application extends="force:slds">
    
    <aura:attribute name="VAR1" type="string" default="Vineela"/>
    <aura:attribute name="VAR2" type="string" default="32"/>
    
    <aura:handler name="compevent" event="c:compevent" action="{!c.compevent}" />
    <c:ChildComp1 />
  
    <br></br>
    <br></br>
    <br></br>
    {!v.VAR1}
    <br></br>
    <br></br>
    {!v.VAR2}
    <br></br>
    <br></br>
    <br></br>
    <c:ChildComp2 />
	
</aura:application>