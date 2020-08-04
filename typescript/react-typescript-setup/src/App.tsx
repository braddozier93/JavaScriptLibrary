import React from 'react';
import './App.css';
import Clock from './components/Clock';

let testProp: string = 'Am I getting passed to the Clock compononent?';
let optionalProp: string = 'You sure are!';


//our arrow function is given the name of 'app'
//by including ':' after 'app', we denote what follows the colon is the type that we are assigning to 'app'
//here, we are digging into our named import of 'react', and assigning our 'app' the type of 'functioncomponent'(this is
//digging into our node modules, and more specifically, the @types packages that are installed)
//this simply defines that what we store in App has to not only be a function, but a function that qualifies as a functional component in React
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp} />
      </div>
    </div>
  );
}

export default App;
