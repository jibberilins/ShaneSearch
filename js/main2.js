/*
 Require main file which lists needed files in the path object, writes out what order they are to be loaded in (shim),
 and tells the application what to load first once all the needed files are ready (function($, search_widget)).
 */

require.config({

    //Needed files
    paths: {
        //libraries
        jquery: 'libs/jquery-1.9.min',
        qunit: 'libs/qunit-1.10.1',
        underscore:  'libs/underscore-min',
        backbone:  'libs/backbone',
        view :'BackBone-View',
        model : 'BackBone-Model',


        //widgets
        search_widget: 'unitTests',
    },

    //The order they are to loaded in
    shim: {
        'search_widget': ['jquery','qunit','underscore','backbone','view','model'],
    }
});

//What is loaded once all the files are ready.
require(['search_widget'], function($, search_widget) {
    console.log("App initializing...");

    var app =  new shane.tools.JQSearch.app();
});

