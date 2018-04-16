({
    doInit : function (component, event) {
        var action = component.get("c.findAllPolicies");
        action.setCallback(this, function(a){
            component.set("v.test", a.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})