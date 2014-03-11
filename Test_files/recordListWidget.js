define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/recordList.html',
    'text!templates/recordDetails.html',
    'text!templates/recordDetailsPopover.html',
    'pagination',
    'bootstrap'
    ], function($, _, Backbone, template, recordDetailsTemplate, recordDetailsPopoverTemplate){

        var view = Backbone.View.extend({
            fetchRequest: {},
            totalRows: undefined,
            defaultFetchReq: {
                "startRow": 0,
                "endRow": 5
            },
            orderBy: {
                column: undefined,
                ascending: undefined
            },
            initialize: function(options){
                var self = this;
                self.idPrefix = self.options.idPrefix || "record-list";
                self.elements = {
                    recordDetailsBackButton: "." + self.options.recordDetailsIdPrefix + "-back"
                };

                //initialize the selected records
                HMH.data.recordList = $.extend(true, [], HMH.data.testData.response.results.result);
                
                self.fetch();
            },

            render: function() {

                var self = this;
                var i;
                HMH.data.recordList = HMH.data.recordList || [];

                var data = {
                    idPrefix: self.idPrefix,
                    orderBy:  self.orderBy,
                    records: HMH.data.recordList,
                    search: (self.fetchRequest) ? self.fetchRequest.search : undefined,
                    _: _
                };

                $(this.el).html(_.template(template, data));
                
                //activate column header ordering
                self._activateColumnHeaderOrdering();

                //activate paging on this list widget
                $.fn.pagination(self, 5);
            
                var viewButton = $("#" + self.idPrefix + " i.icon-search");
                viewButton.on('click', function(event){
                    var recordId = $(this).closest("li").attr("data-record-id");
                    console.log("view clicked on record: " + recordId);
                    //loop through the records and populate the selected one
                    var selectedRecord = self._getRecord(recordId);
                    self.showRecordView(selectedRecord);
                });
                
                
                var info = $("#" + self.idPrefix + " i.icon-info-sign");
                info.hover(function(event, data){
                    var recordId = $(this).closest("li").attr("data-record-id");
                    console.log("info hovered on record: " + recordId);
                    var selectedRecord = self._getRecord(recordId);
                    $(this).popover( {
                        html: true,
                        trigger: 'manual',
                        template: '<div class="popover" style="width: 500px; max-width: 500px"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>',
                        content: _.template(recordDetailsPopoverTemplate, {
                            idPrefix: self.options.recordDetailsIdPrefix,
                            data: selectedRecord,
                            _: _
                        }),
                        placement: "bottom"
                    });
                    $(this).popover('show');
                }, function(event, data){
                    $(this).popover('hide');
                });
            },
            
            _getRecord: function(recordId) {
                var self = this;
                for(var i in HMH.data.recordList) {
                    var record = HMH.data.recordList[i];
                    if(record.content.resource.id === recordId) {
                        return record;
                    }
                }
                return undefined;
            },
            
            _activateColumnHeaderOrdering: function(){
                var self = this;
                $("#" + self.idPrefix + " .hmh-column-title").click(function(event, data){
                    var column = event.target.dataset.column;
                    if(self.orderBy.column === column) {//rotate ascending/descending
                        if(self.orderBy.ascending === undefined) {
                            self.orderBy.ascending = true;
                        } else if(self.orderBy.ascending === true) {
                            self.orderBy.ascending = false;
                        } else {
                            self.orderBy.ascending = undefined;
                            self.orderBy.column = undefined;
                        }
                    } else {
                        self.orderBy.column = column;
                        self.orderBy.ascending = true;
                    }
                    
                    self.fetch({
                        orderBy: self.orderBy
                    });
                    console.log("title clicked");
                });
                
            },

            showRecordView: function(data){
                var self = this;
                $("#" + self.idPrefix).hide();
            
                var data = {
                    idPrefix: self.options.recordDetailsIdPrefix,
                    data: data,
                    _: _
                };

                $("#" + self.options.recordDetailsIdPrefix).html(_.template(recordDetailsTemplate, data));
                $(self.elements.recordDetailsBackButton).click(function(){
                    $("#" + self.options.recordDetailsIdPrefix).hide();
                    $("#" + self.idPrefix).fadeIn();
                });
            
                $("#" + self.options.recordDetailsIdPrefix).fadeIn();
                    
                //redraw the record list
                console.log("record view clicked");
                
            },

            fetch: function(fetchReq) {
                var self = this;
                self.fetchRequest = $.extend(true, {}, self.defaultFetchReq, self.fetchRequest, fetchReq);
                if(self.fetchRequest && self.fetchRequest.search === '') {
                    delete self.fetchRequest['search'];
                }

                var result = $.fn.searchTestData(self.fetchRequest);
                HMH.data.recordList = result.fetchedList;
                self.totalRows = result.totalRows;
                self.render();
            }

        });
        return view;
    });
