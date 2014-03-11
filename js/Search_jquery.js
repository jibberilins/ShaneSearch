/**
 * Created with JetBrains WebStorm.
 * User: GibbonsS
 * Date: 16/07/13
 * To change this template use File | Settings | File Templates.
 */

/*
This is the CONTROLLER which helps the model and the view communicate.

This is done by declaring both the view and the model in a constructor, assigning it to a variable,
and assigning the model to the view also.

then you start the initialise function.

Then once the view is started, it will grab the model and start the initialise function.
 */

var shane = shane || {};
shane.tools = shane.tools || {};
shane.tools.JQSearch = shane.tools.JQSearch  || {};


shane.tools.JQSearch.app = function() {

    var smodel = new shane.tools.JQSearch.searchModel();
    var sview = new shane.tools.JQSearch.searchView({model : smodel});

    sview.initialise();
};