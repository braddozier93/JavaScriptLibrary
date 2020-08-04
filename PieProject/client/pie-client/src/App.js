import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';


function App() {//parent component
        //state variable--based upon initial value that we pass into useState, 2nd variable will be our means of changing the state(put set in front of first variable to update the first variable)
  const [sessionToken, setSessionToken] = useState(undefined);

  let string = 'this is a string';
  let number = 4;
  let obj = {
    test: 'test'
  }

  const viewConductor = () => {
    return sessionToken !== undefined ? <Pies /> : <Auth />
  }

  return (
    <div className="App">
      <Navbar token={sessionToken} string={string} num={number} object={obj}/>
      {viewConductor()}
    </div>
  );
}

export default App;
/*
// ARRAY DESTRUCTURING

//destructuring in JavaScript is a simplified method of extracting multiple proprerties from an array by
//taking the structure of the array, and then deconstructing it down into individual parts by assigning them
//variables.

let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
console.log(first, second, third);
 
let [a, b, c] = ['Mercury', 'Venus', 'Mars'];
console.log(a);
console.log(c);

let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
let [first, , third, ...others] = planets;
// ... * spread operator
console.log(first);
console.log(third);
console.log(others);
*/
