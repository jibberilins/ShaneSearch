$(document).ready(function(){


   var counting = function(){

       var total = 0;

       for(var i = 0; i < arguments.length; i++){
           if(typeof arguments[i] === "number" || !isNaN(parseInt(arguments[i]))){
                total += parseInt(arguments[i]);
           }
       }

       return total;
   };








    /**
     * Function concatenates strings and puts the first letter of each word in Uppper Case
     *
     * e.g.
     *      in - my, name, is, jim
     *      out - My Name Is Jim
     */

     var stringCat = function(){
     var str = "";

      for(var b = 0; b < arguments.length; b++){
          if(b == 0){

                str +=  arguments[b].replace(arguments[b].charAt(0), arguments[b].charAt(0).toUpperCase());

          }else{

                str += " " + arguments[b].replace(arguments[b].charAt(0), arguments[b].charAt(0).toUpperCase());
          }

      }
      return str
     };






    /**
     * Function counts the amount of words in a sentence
     *
     *
     */

    var wordCount = function(){

        var mySentence = "This is a word counter";
        var mySplit = mySentence.split(" ");






        return mySplit.length;

    };



    var wordCount2 = function (){

        var regex = /this/i;
        var regex2 = /this\.$/i;
        var regex3 = /^M/;
        var test1 = regex.test("This is a word counter");
        var test2 = regex2.test("Hello i love regular expression.");
        var test3 = regex3.test("M20, i am done with regex!!");

       return test1;

       return test2;

       return test3;
    };




    var arraySearch = function(){
        var Array1 = ["Gibbons", "USA", 23, true, {"Lunch time":"1pm"}, "JavaScript"];
        var arrayRegex = /23/;

        var arrayTest = arrayRegex.test(Array1["Gibbons", "USA", 23, true, {"Lunch time":"1pm"}, "JavaScript"]);

            return arrayTest;


       // else {
          //  return console.log("Nothing useful in here...look away...");
      //  }
    };















   module("Shanes first tests"); //also excepts object {}

   test("Counting Function", function(){
       expect(4);
       equal(counting(2,4,5), 11, "The answer is correct");
       equal(counting('andy', 4, 5), 9, "We didnt count the string!!");
       equal(counting(5, 6, 7, 4, 5), 27, "We counted loads of numbers!!!!");
       equal(counting("3", "4", "2", "4"), 13, "We even counted strings that have numbers!");
   });





   test("String Cat Function", function(){
        expect(1);
        equal(stringCat("my", "name", "is", "jim", "jones"), "My Name Is Jim Jones", "This string is working!");
   });





   test("Word Count", function() {
        expect(1);
        equal(wordCount ("This is a word counter"), 5, "Correct!!");


    });

   test("Word Count2", function() {
        expect(3);
        equal(wordCount2 ("this is a word counter"), true, "ok");
        equal(wordCount2 ("Hello i love regular expression."), true, "cool");
        equal(wordCount2 ("M20, i am done with regex!!"), true, "Thanks.");
    });


    test("Array search", function(){
         expect(1);
         equal(arraySearch(["Gibbons", "USA", 23, true, {"Lunch time":"1pm"}, "JavaScript"]) ,false, "Nice Array!!");


    });



});

