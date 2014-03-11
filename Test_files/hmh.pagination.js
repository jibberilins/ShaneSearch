define(['jquery'], function ($) {
    $.fn.pagination = function(widget, pageSize) {

        var widgetID = widget.$el.selector;
        var startRow = widget.fetchRequest && widget.fetchRequest.startRow ? widget.fetchRequest.startRow : widget.defaultFetchReq.startRow;
        var endRow = widget.fetchRequest && widget.fetchRequest.endRow ? widget.fetchRequest.endRow : widget.defaultFetchReq.endRow;
        var totalRows = widget.totalRows ? widget.totalRows : 0;

        //calculate the number of pages we are going to have
        var number_of_pages = Math.ceil(totalRows / pageSize);

        //set the new current page
        widget.currentPage = (startRow / pageSize);

        var navigation_html = '<ul>';
        navigation_html += '<li class="previous_link"><a><i class="icon-caret-left icon-large"></i> Previous</a></li>';
        navigation_html += '<li class="next_link"><a>Next <i class="icon-caret-right icon-large"></i></a></li>';
        navigation_html += '</ul>';

        // add the pagination widget html
        $(widgetID + ' .pagination').html(navigation_html);

        //add active class to the first page link
        $(widgetID + '-page-' + widget.currentPage).addClass('active');

        //Disable unclickable pages
        if(widget.currentPage == 0) {
            $(widgetID + ' .previous_link').addClass('disabled');
        } else {
            //activate the previous button event
            $('.previous_link').on("click", function() {
                go_to_page(widget.currentPage - 1);
            });
        }
        if((widget.currentPage + 1) == number_of_pages) {
            $(widgetID + ' .next_link').addClass('disabled');
        } else {
            //activate the next button event
            $('.next_link').on("click", function() {
                go_to_page(widget.currentPage + 1);
            });
        }

        $('.page_link').on("click", function() {
            go_to_page($(this).attr("data-page-num"));
        });

        var go_to_page = function(page_num) {
            widget.fetch({
                "startRow": page_num * pageSize,
                "endRow": (page_num + 1) * pageSize
            });
        }
    };
});