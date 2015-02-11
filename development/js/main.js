require.config({
    baseUrl: 'js',
    urlArgs: "cachebuster=" + (new Date()).getTime(),
    paths: {
        jquery: 'lib/jquery-min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        marionette: "lib/backbone-marionette-min",
        text: "lib/text",
        tpl: "lib/underscore-tpl"
    },

    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'lib/modernizr', 'underscore'],
            'exports': 'Backbone'
        },
        'marionette': {
            'deps': ["backbone"],
            'exports': "Marionette"
        },
        'lib/odata': {
            'deps': ['jquery', 'backbone', 'underscore']
        },
        tpl: ["text"]
    }
});

require(['app'], function (App) {
    App.initialize();
});