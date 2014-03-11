<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
    <html>
        <head>
            <title>Page title</title>
        <script>
        $(document).ready(function(){

            function fooBar(){
                var myNumArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



                if(myNumArray % 2 === 0){
                    alert("foo");
                }

        if(myNumArray % 3 === 0){
            alert("bar");
            }

        if(myNumArray %6 === 0){
            alert("FooBar");
            }

        else
    {
        return myNumArray;
        }

        }


        module("Shanes first tests"); //also excepts object {}


        test("foobar", function() {
            expect(1);
            equal(fooBar() ("This is a word counter"), 0, "Correct!!");


            });




        });
        </script>

        </head>
        <body>
        </body>
    </html>






