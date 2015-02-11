define([
  'app',
], function (CDApp) {
    var AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'home': 'showHome',
            'contact': 'showContact',
            '*actions': 'showDefault'
        }
    });
    var API = {
        showHome: function () {
            require(["app", "views/itemview/home"], function (CDApp, HomeView) {
                CDApp.mainRegion.show(new HomeView());
            });
        },
        showContact: function () {
            require(["app", "views/itemview/contact"], function (CDApp, ContactView) {
                CDApp.mainRegion.show(new ContactView());
            });
        },
        showDefault: function () {
            require(["app", "views/itemview/home"], function (CDApp, HomeView) {
                CDApp.mainRegion.show(new HomeView());
            });
        }
    };
    var initialize = function () {
        var app_router = new AppRouter({
            controller: API
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});