({
	myAction : function(component, event, helper) {
        var action = component.get("c.getMyId");
        action.setParams({
            "myId": component.get("v.recordId")
        });
        action.setCallback(this, function(data) {
            component.set("v.myOutputs", data.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})
