<aura:application access= "GLOBAL" extends="force:slds">
    
    <aura:attribute name="searchType" type="String" />
    <aura:attribute name="searchString" type="String" />
    
    <aura:handler name="updateParent" event="c:CompEvent1" action="{!c.setSearchParams}"/>
    
    {!v.searchType}
    {!v.searchString}
    
    <c:SearchBox />
    <c:DisplayResults />
    
    <c:DisplayDetails />
	
</aura:application>