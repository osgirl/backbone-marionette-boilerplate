define([
 "marionette",
 'router'
], function (Marionette, Router) {
    var CDApp = new Marionette.Application();
    CDApp.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main-region"
    });

    CDApp.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    CDApp.getCurrentRoute = function () {
        return Backbone.history.fragment
    };

    CDApp.initialize = function () {
        Router.initialize();
    }
    return CDApp;
});