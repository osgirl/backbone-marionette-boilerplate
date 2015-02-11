define(["app", "marionette", "tpl!template/contact.tpl"], function (CDApp, Marionette, contactTpl) {
    var ContactView = Backbone.Marionette.ItemView.extend({
        template: contactTpl
    });
    return ContactView;
});