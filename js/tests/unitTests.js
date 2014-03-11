$(document).ready(function(){



module("Shanes unit tests");


test("initialisation function", function(){
    expect(1);
    equal(_init(), true, "Initialised!");
    //equal(_init(), false, "Page blocked & Enter key not allowed");
    });


test("search function", function(){
    expect(1);
    equal(search('res'), true, "The answer is correct!");

    });


test("show Results", function(){
    expect(1);
    equal(showResults("My Adventures in CSS", "My Adventures in JavaScript", "Resharper"), true, "Results shown");

    });


test("clear results", function(){
    expect(1);
    equal(clearResults(), true, "Results cleared!");
    });


});