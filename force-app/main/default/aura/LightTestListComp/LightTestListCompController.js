({
    doInit: function (component, event) {
        var action = component.get("c.findAllPolicies");
        action.setCallback(this, function (a) {
            var jsonArray = JSON.parse(a.getReturnValue());
            component.set("v.test", jsonArray.response);
        });
        $A.enqueueAction(action);
    }
})