//     keyword     name      parameter(s)--parameter is way to take in information
        function    hi          (name) {
            console.log(`Hi, ${name}`); 
        }

        hi('Jerome');
        hi(800);

        //pretend we have 800 lines of code
        hi('Brad');

/*challenge-- write a function that takes in two parameters
            -one parameter for first name, one for last
            -have them come together in a variable 
            -inside the function console.log 'Hello my name is <your name>
            -call(or invoke) your function
*/

function name(first, last) {
    console.log(`Hello, my name is ${first} ${last}`);
};

name('Brad', 'Dozier');
