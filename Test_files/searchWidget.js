
//
define(['jquery',
    'underscore',
    'backbone',
    'text!templates/searchWidget.html',
    'record_list_widget'],
    function($, _, Backbone, template, RecordListView) {

            var view = Backbone.View.extend({
                el: $("#search-widget"),


            //This iniialize function the css id divs for the application. It sets these
            //id divs in an object called element.
            initialize: function() {

                var self = this;

                self.idPrefix = "search-widget";
                self.elements = {
                    searchButton: '#' + self.idPrefix + " .hmh-search-button",
                    searchClearButton: '#' + self.idPrefix + " .hmh-search-clear",
                    searchInput: '#' + self.idPrefix + "-search-input"
                };
                //Apply these css id div designs to the search button, clear button and the input field
                self._render();
            },



            //render function. This function renders these three sections (mentioned above) based on design input
            //and the user input.
            _render: function() {
                var self = this;
                var data = {
                    _: _,
                    idPrefix: self.idPrefix
                };

                // compile template and render
                var compiledTemplate = _.template(template, data);
                this.$el.html(compiledTemplate);



//                //search button
//                $(self.elements.searchButton).on('click', function(event){
//                    event.preventDefault();
//                    HMH.views.recordList.fetch({
//                        search: $(self.elements.searchInput).val(),
//                        startRow: 0,
//                        endRow: 5
//                    });
//                });



//                //search input enter button criteria
//                $(self.elements.searchInput).keydown(function(event){
//                    switch( event.which ) {
//                        case 13: // [enter]
//                            event.preventDefault();
//                            $(self.elements.searchButton).click();
//                            break;
//                    }
//                });



//                //search input user input clear button
//                $(self.elements.searchInput).keyup(function(event){
//                    if($(this).val().length > 0) {
//                        $(self.elements.searchClearButton).stop(true, true).fadeIn();
//                    } else {
//                        $(self.elements.searchClearButton).stop(true, true).fadeOut();
//                    }
//                });



                //clear button
                $(self.elements.searchClearButton).on("click", function() {
                    $(self.elements.searchInput).val('');
                    HMH.views.recordList.fetch({
                        search: '',
                        startRow: 0,
                        endRow: 5
                    });
                    $(this).fadeOut();
                });



                //render the search list
                HMH.views.recordList = new RecordListView({
                    el: '#' + self.idPrefix + '-record-list',
                    idPrefix: self.idPrefix + '-record-list',
                    recordDetailsIdPrefix: self.idPrefix + '-record-view'
                });
            }
        });

        return view;
    });