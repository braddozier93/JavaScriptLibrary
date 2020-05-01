//  variable    fat arrow   
    let hi =    () => {
        console.log('hi');
    }

    /* arrow functions were introduced in ES6. They are basically a more concise way to 
    write function expressions--NOT DECLARATIONS
    */
   //this means arrow functions do not get hoisted

   //BLOCK BODY
   let hi = () => {
       console.log('hi');
       //lots of code goes here
   };

   /* NOTE: block body arrow functions must have a return statement
   (if you want to get information) in the body of the function*/
   //(return must be in between the curly braces)

   //CONCISE BODY--you can only do one thing(it has one job--like getting the first letter of names)
   let hi = () => console.log('hi');
   //Note: concise body arrow functions return by default;
   //They automatically give back the information.
   //doesn't need {} and is on one line

   //single parameter--the () are optional...if no or multiple param, then name, 2nd param would have to be in ()
   let greeting = name => {
       console.log(`Greetings, ${name}`);
   }

   greeting('Brad');

   