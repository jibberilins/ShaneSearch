require.config({
    paths: {
        //libraries
        jquery: 'lib/jquery/jquery-1.9.1.min',
        underscore: 'lib/underscore/underscore-min',
        backbone: 'lib/backbone/backbone-min',
        bootstrap: 'lib/bootstrap/bootstrap.min',

        //functions
        search: 'hmh/hmh.search',
        pagination: 'hmh/hmh.pagination',

        //templates
        templates: '../templates',

        //widgets
        search_widget: 'views/searchWidget',
        record_list_widget: 'views/recordListWidget'
    },
    shim: {
        'pagination': ['jquery'],
        'search': ['jquery']
    }
});

require([
    'jquery', 'app', 'underscore',
    //functions
    'pagination','search'
    ], function($, App) {
        console.log("App initializing...");

        App.initialize();

        console.log("App initialized...");

    });
