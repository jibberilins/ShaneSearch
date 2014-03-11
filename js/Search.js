

var shane = shane || {};
shane.tools = shane.tools || {};

shane.tools.Search = function(){
    /*
      This empty self object helps keep the Search
      object alive once it has been initiated
     */
     var self = {},


     //Private functions

     /*
      This initialisation function starts off the search function
      by grabbing what the user is typing onkeyup and places
      it in the search function for use there.
      */
         _init = function() {

             var searchBox = document.getElementById('search');

             searchBox.onkeyup = function(e) {

                 //If search bar is empty, clear the resultList field.
                 if (e.target.value === "" || null) {
                     clearResults();

                     return;
                 }

                 //initialise the search function with the data the user typed in , which will populate the array, which will
                 //then initialise showResults method, which lastly will display the results.
                 search(e.target.value);
             }


             $('#search').keypress(function (event) {
                 var keycode = (event.keyCode ? event.keyCode : event.which);
                 if (keycode == '13') {
                     alert("I would rather you abstained from pressing enter, if you wouldn't mind....  :) ");
                     return false;

                 }

             })

         },


     /*
      This main search function populates the array with data from the search data file
      based on particular search criteria(keywords). The .search method here will search on singular letters
      and not whole words
      */
        search = function(keywords, keyNumbers){
        var arr = contentObject.response.results.resultList;

        clearResults();


        /*
         If successful, search returns the index of the regular expression inside the string. Otherwise, it returns -1.
         Hence the need for the -1 check. Here we check for -1. If the search of the file content in the array using .search
         is not equal to -1, it obviously has gotten a resultList back from that search using the users input(keywords). If so, the showresults method is called
         to display those results.
         */
        for(var i = 0; i < arr.length; i++){
            if(arr[i].content.resource.display_title.toLowerCase().search(keywords.toLowerCase()) != -1
                || arr[i].uri.search(keyNumbers) ){
                showResults(arr[i].uri,arr[i].content.resource.display_title,arr[i].content.resource.meaningful_description);
            }
        }
            return showResults;
    },



     /*
      This is the show results function. this function displays the element div
       through the resultList class which holds the results, the header h3 div
       through the tag h3 which holds the display title and the span class "type"
       which holds the resource type.
     */
   showResults = function(item1, item2, item3){

        var container = document.getElementById('search-results');

        var elem = document.createElement('div');
        elem.setAttribute('class', 'result');
        container.appendChild(elem);

        var header = document.createElement('h3');
        header.innerHTML = item2;
        elem.appendChild(header);

        var rstype = document.createElement('span');
        rstype.setAttribute('class', 'type');
        rstype.innerHTML = item3;
        elem.appendChild(rstype);


        var rstype2 = document.createElement('span');
        rstype2.setAttribute('class', 'type');
        rstype2.innerHTML = item1;
        elem.appendChild(rstype2);
    },



     /*
      This is the clearResults function. this clears the results from the dom
      as long as there is something in the results section. it deletes one by one.
     */
   clearResults = function(){
        var results = document.getElementById('search-results');

        while(results.firstChild){
            results.removeChild(results.firstChild);
        }
    };






    //Public functions
    /*
    These are public functions. the public have direct access to these functions
     */
   self.clearMe = function(){
        clearResults();
    }

    //Once the window loads, load the init function
    window.onload = _init();

    //This returns the empty object self to keep the search object function open
    return self;



}();





















