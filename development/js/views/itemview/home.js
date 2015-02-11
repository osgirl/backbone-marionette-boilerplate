define(["app", "marionette", "tpl!template/home.tpl"], function (CDApp, Marionette, homeTpl) {
    var HomeView = Backbone.Marionette.ItemView.extend({
        template: homeTpl,
        initialize: function(){
        	//alert('@a')
    	}
    });
    return HomeView;
});