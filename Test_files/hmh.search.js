define(['jquery'], function ($) {

    $.fn.searchTestData = function(fetchRequest) {
        console.log("executing search");
        
        var found = [];

        //filter records for search
        if(fetchRequest.search && fetchRequest.search !== '') {
            //filter records
            var records = $.extend(true, [], HMH.data.testData.response.results.result);
            for(var i in records) {
                var record = records[i];
                var str = JSON.stringify(record);
                if(str.toLowerCase().indexOf(fetchRequest.search.toLowerCase()) > -1) {
                    found.push(record);
                }
            }
        } else {
            //default fetch, no filter
            found = $.extend(true, [], HMH.data.testData.response.results.result);
        }
        var totalRows = found.length;

        console.log("ordering search results");
        //order filtered records
        var ret = $.fn.sortBy(found, fetchRequest.orderBy);
        
        if(ret.length > 5) {
            //ret = ret.splice(0, 5);
            ret = ret.splice(fetchRequest.startRow, (fetchRequest.endRow - fetchRequest.startRow));
        }
        return {
            fetchedList: ret,
            totalRows: totalRows
        }
    };
    
    $.fn.sortBy = function(arr, orderBy){

        if(orderBy === undefined) {
            return arr;
        }

        if(orderBy.column === 'resourceType') {
            return arr.sort(function(a, b)
            {
                if(orderBy.ascending === true) {
                    if (a.content.resource.resource_type.toLowerCase() < b.content.resource.resource_type.toLowerCase()) return -1;
                    if (a.content.resource.resource_type.toLowerCase() > b.content.resource.resource_type.toLowerCase()) return 1;
                    return 0;
                } else {
                    if (a.content.resource.resource_type.toLowerCase() < b.content.resource.resource_type.toLowerCase()) return 1;
                    if (a.content.resource.resource_type.toLowerCase() > b.content.resource.resource_type.toLowerCase()) return -1;
                    return 0;
                }
            });
        } else if(orderBy.column === 'displayTitle') {
            return arr.sort(function(a, b)
            {
                if(orderBy.ascending === true) {
                    if (a.content.resource.display_title.toLowerCase() < b.content.resource.display_title.toLowerCase()) return -1;
                    if (a.content.resource.display_title.toLowerCase() > b.content.resource.display_title.toLowerCase()) return 1;
                    return 0;
                } else {
                    if (a.content.resource.display_title.toLowerCase() < b.content.resource.display_title.toLowerCase()) return 1;
                    if (a.content.resource.display_title.toLowerCase() > b.content.resource.display_title.toLowerCase()) return -1;
                    return 0;
                }
            });
        } else if(orderBy.column === 'mediaType') {
            return arr.sort(function(a, b)
            {
                if(orderBy.ascending === true) {
                    if (a.content.resource.media_type.toLowerCase() < b.content.resource.media_type.toLowerCase()) return -1;
                    if (a.content.resource.media_type.toLowerCase() > b.content.resource.media_type.toLowerCase()) return 1;
                    return 0;
                } else {
                    if (a.content.resource.media_type.toLowerCase() < b.content.resource.media_type.toLowerCase()) return 1;
                    if (a.content.resource.media_type.toLowerCase() > b.content.resource.media_type.toLowerCase()) return -1;
                    return 0;
                }
            });
        } else if(orderBy.column === 'language') {
            return arr.sort(function(a, b)
            {
                if(orderBy.ascending === true) {
                    if (a.content.resource.language.toLowerCase() < b.content.resource.language.toLowerCase()) return -1;
                    if (a.content.resource.language.toLowerCase() > b.content.resource.language.toLowerCase()) return 1;
                    return 0;
                } else {
                    if (a.content.resource.language.toLowerCase() < b.content.resource.language.toLowerCase()) return 1;
                    if (a.content.resource.language.toLowerCase() > b.content.resource.language.toLowerCase()) return -1;
                    return 0;
                }
            });
        } else {
            //no valid order by
            return arr;
        }
    }
    
});
