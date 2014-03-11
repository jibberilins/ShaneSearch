/*
Require main file which lists needed files in the path object, writes out what order they are to be loaded in (shim),
and tells the application what to load first once all the needed files are ready (function($, search_widget)).
 */

 //LIBRARIES NOT LOADING CORRECTLY SO THEY HAVE BEEN REMOVED TEMP OUT INTO THE HTML FILES
require.config({

    //Needed files
    paths: {
        //libraries

        //widgets
        search_widget: 'Search_jquery',
    },

    //The order they are to loaded in
    shim: {
	 
        'search_widget': [],
    }
});

  //What is loaded once all the files are ready.
  require(['search_widget'], function($, search_widget) {
        console.log("Search initializing...");

        var app =  new shane.tools.JQSearch.app();
    });
