/**
 * Created with JetBrains WebStorm.
 * User: GibbonsS
 * Date: 16/07/13
 * To change this template use File | Settings | File Templates.
*/

//Object holders initialised
var shane = shane || {};
shane.tools = shane.tools || {};
shane.tools.JQSearch = shane.tools.JQSearch || {};


    /*
     shane.tools.JQSearch.searchView is an object which takes the form of a backbone
     view.
     From this view extends its contents, which are objects within objects or arrays
     and functions within objects and so on, hence its structure. Most of the contents
     here are functions within objects or objects within objects, eg:

     initialise : function(e){.........

     This is the heading for one of these pieces of content. 'Initialise' is the name, and
     'function(e)' is its contents. Making it a function within an object.
    */
    shane.tools.JQSearch.searchView = Backbone.View.extend({

        el: '#hmhDiv',
        resultList  : {},
        searchInput  : {},

        Template :
                '<div class="container">'+
                 '<h2 class="form-search-heading">Search For Stuff Here...</h2>' +
                    '<form-search><input type="text" placeholder="Type to Search...." maxlength="60" class="search-container" name="searchBar" id="searchHmh"></form>'+
                //'</div>'+
                '<div id="search-res"></div>',

        events : {
                  "keyup #searchHmh" : "startSearch" ,
                  "change:resultList" : "render",
                 },


                /*
                 This is the backbone view initialise function which initialises the page components and starts the
                 search by initiating the startSearch method.
                */
                initialise : function(){
                        //This gives all the named functions here all of initialises content
                    _.bindAll(this,"render", "startSearch");

                    //Watches for changes in the resultList and call render if any pop up.
                    this.model.on('change:resultList', this.render, this);

                    //Setting template
                    this.$el.html(_.template(this.Template));

                        //Assigns resultList and searchInput to their relevant div tags
                    this.resultList = $('#search-res');
                    this.searchInput  = $('#searchHmh');
                    this.render();

                },



                           /*
                            This is the startSearch function which starts the search by
                            setting the data the user has entered into the search box into the model,
                            getting that data from the model and assigning it to a variable, retrieving
                            content from the model and if the content from the file
                            matches up with what the user has entered in, then it is pushed onto an array.
                           */
                           startSearch : function(){

                                   //Set user data to model
                               this.model.set('searchInput',  this.searchInput.val().toLowerCase());

                                   //These are the "get" methods to grab the data from the model
                               var sInput = this.model.get('searchInput');
                               var resSet = [];

                               /*
                                 SACRED SEARCH CODE. THIS CODE IS THE BRAINS BEHIND THE SEARCH FUNCTION ITSELF

                                 If successful, ".search" returns the index of the regular expression(letter) inside the string. Otherwise, it returns -1.
                                 For each object in the JSON file,
                                 If any of this contents Titles that can be matched against the search input are not equal to -1
                                 (If anything within both are similar, it will return an index number of the regular expression(letter) inside the string, if it fails, it will return -1),

                                 or if of the contents meaningful descriptions that can be matched against the search input are not equal to -1(See above desc),
                                 push it to the results array to display them on the web page search section.
                               */
                               $.each(this.model.get('contentObject').response.results.resultList, function(k, result) {
                                   if(this.content.resource.display_title.toLowerCase().search(sInput.toLowerCase()) != -1 || this.content.resource.meaningful_description.search(sInput) != -1){
                                            //add to array
                                        resSet.push({title: this.content.resource.display_title, desc: this.content.resource.meaningful_description});
                                    }
                               });

                               //Set the array to the model
                               this.model.set('resultList',resSet);


                               //If the search field is empty, clear the result list.
                               if(this.searchInput.val() == "" || null){
                                   console.log("AT LAST!! IT LIVES!!");
                                   this.resultList.empty(this.resultList.firstChild);
                               }
                           },



                           /*
                            This is the renderResults function which gets all the array data that was assigned to the model,
                            and if it satisfactory, append it to the results section of the html results template.
                           */
                           render : function (){

                                var results = this.model.get('resultList');
                                if(results.length == 0) return;

                                    //clear the content screen before showing results.
                                this.resultList.empty();

                                /*
                                 k here is the index for the array. it holds the limit for the amount of results to be placed into the array
                                 result is the actual results being outputted into the array.
                                 if the title results are correct or if the description results are correct, output those
                                 correct results into a class and h3 div attached to a variable.
                                 Then re-append this variable back onto the resultList.
                                */
                                    var that = this;
                                    $.each(results, function(k, result){
                                       if(result.title != -1 || result.desc != -1){
                                           var html = '<div class="result"><h3>'+ this.title +'</h3><p>'+ this.desc+'</p></div>';
                                           that.resultList.append(html);
                                       }
                                    });
                           },

});
