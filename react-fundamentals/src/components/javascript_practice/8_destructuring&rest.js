const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length -1];

console.log(stringVar, numVar, objVar, nanVar);
//without destructuring, you have to manually make a new var and target a value from the array
//destructuring simplifies this

let [string, num,, obj,, nan] = array;

console.log(string, num, obj, nan);

//new example to play with
const testObj = {
    testString: 'stringy thingy',
    testNum: 23,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArr: [1,2,3,4, undefined],
    testNan: NaN
}

//we can grab individual properties like so
const objString = testObj.testString;
const objNum = testObj.testNum;

console.log(objString, objNum);
//or we can use destructuring
let {testString, testObject, testNum, testNan} = testObj;
console.log(testString, testObject, testNum, testNan);

//insert all the properties in our 'testObj' object into a new object:   //...spread
let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);