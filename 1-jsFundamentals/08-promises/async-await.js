async function myFun() {
    const response = await fetch("https://random.dog/woof.json");
    const json = await response.json();
    console.log(json);
}

myFun()
    //.then(console.log)//no semi
    //.catch(console.log)
//await can only be used inside an async function
//async are normal functions that always return a promise
//...so we must use promise resolvers like .then or .catch
//call function and resolve it with .then
//then console log it
//if return inside asyn function, must use resolver when calling and console.log it
//everything outside async function is running simultaneously with rest of js
//use promise resolvers to get information outside of the async function
//or arrow function=> 
/*const myFun = async () => {

}*/
()
//fetches return a promise, so use a resolver
//fetch('https://random.dog/woof.json')
//   .then(response => response.json())
//    .then(json => console.log(json))
//    .catch(error => console.log(error))

/*
//REPL assignment 5/8/2020:

// final solution using a fat arrow function:
const funName = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/4");
    const json = await response.json();
    console.log(json);
  }
  
  funName()
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('this should print last'))
  //end of REPL solution
  */
  
  

  
  