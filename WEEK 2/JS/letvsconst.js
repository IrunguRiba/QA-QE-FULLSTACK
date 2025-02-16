/* ES6 is an advancement of Js
let vs const
both are ES6 features that offer block-scooping
block-scooping is a way to control variables scooped better than var

let is block scoped
var is not block scooped
It is Reassignable
ANYTHING INSIDE THE CURLY BRACES CANNOT BE ACCESSED
eg


let names=["JOEL", "JAMES", "JOHN"]
function example(){
    if(true){
        let x=10
        console.log(x)
    }
    console.log(x)
}

function example(){
    if(true){
        var x=10
        console.log(x)
    }
    console.log(x)
}
*/
const z=10
if(z===10){
   const z=20
   console.log(z)
}
console.log(z)

var y=10  //GLOBAL SCOPE
if(y===10){ 
    var y=20 //FUNCTION OR GLOBAL SCOPE
    console.log(y)
}
console.log(`the value at y is now: ${y}`)

//SCOPE IN FUNCTIONS
var length=12
function area(){
    return length * length;

}
console.log(area());


let len=12
function are(){
    let len =14
    return len * len/2;

}
console.log(are());


/* TEMPLATE LITERAL
This supports multi lines strings
They are used with back quotes ` `
*/
const fname="joel"
const sname="irungu"
const lname="riba"
console.log(`hello,
    ${fname} ${sname} ${lname} 
    I hope you are fine`)

    /*STRING INTERPOLATION
    */
    const price=10.99
    const discount=0.4
    const final=`Your dicounted price is: $${price-(price*discount)}
    `
    console.log(final)

    //CHECK OUT HTML LITERALS


    /* template litareals cn be used for conditional expression within  as String
    const isAdmin=true
    function renderPage(){
    return isAdmin ?`<div> Page for Admin</div>
    }
    console.log(renderPage());

    ARROW FUNCTIONS
normal function
function area(n){
return n * n
}
console.log(area(24))

new
const functionName =()=>{}..has a retun type
    const functionName =()=>()...return immediatly

const doubleArrowFn =(n) =>{
    return n * n
}
const doubleArrowImmediatlyFn =(n) =>(
  n * n
)
const oubleArrowImmediatlyFn =(n) =>
    n * n
  
  Single PARAMETERS
  */
  const square = n=> n*n
  console.log(square(4))
//MULTIPLE PARAMETERS
const add=( a,b)=>a+b
console.log(add(5, 10));
/*
//the this keyword in arrow functions
//traditional fucntion handle "this" keyword compared to ES6
let myVar = 0;
function myFunction(myVar) {
    this.myVar = 2; // This will set a global variable myVar to 2
    setTimeout(() => {
        this.myVar++; // Use an arrow function to ensure "this" refers to the correct object
        console.log(this.myVar); // Log the incremented value of myVar
    }, 0); // Set the interval to 1 second (to make it easier to see changes)
}

console.log(myFunction(5)); // This will call the function but doesn't return anything
*/
class Counter{
    constructor(){
        this.count=0;
    }
    increment =()=>{
        this.count++
        console.log(this.count)
    };
    StartTimeCounter=()=>{
        setInterval(this.increment, 1000);
    };
    
}
const myCounter= new Counter();
myCounter.StartTimeCounter();
    

/* DEFAULT PARAMETERS
Allow me to specify values for function parameters
basic syntax
withn ES6, its possible to assign default values in the function decalration


*/
function say(message="hi"){
    console.log(message)
}
say()
say("hello")
//Single parameter with default function

function sum(numA, numB = 5){
    console.log(numA+numB)
}
sum(10)
sum(5, 15)

//ARROW FUNCTION WITH DEFAULT VALUE
const sayHi=(message="HELOO")=>{
console.log(message)
}
sayHi()
sayHi('GOODMORNING')

/*
REST AND SPREAD
Rest operator(...)
Tells the function that you will be accepting a alot
function names(...args)
{

}
function say(a,b,c, ...chars)
...chars is an array holding all the remaining  arguments after first 4 arguments

*/
/*function to return only arguments passed as a number and ignore the non numbers
function sum(...args) {
    return args
        .filter((element) => typeof element === 'number') // Fix typeof usage
        .reduce((prev, next) => prev + next, 0); // Ensure reduce has an initial value
}

let result = sum(1, 2, "JAMES", "JOHN");
console.log(result); // Output: 3

... dots passed to an array means create a copy of that array
eg */
const arr1 = ["a", 2, 3, 4, "b"];
const arr2 = ["d", 2, 3, 4, "c"];

// Combine both arrays using the spread operator
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); 
// Output: ["a", 2, 3, 4, "b", "d", 2, 3, 4, "c"]

// Add extra elements to the combined array
const info = [...combinedArray, "45", { uni: "DEKUT", isStudent: true }];
console.log(info); 
/*
Unique keys

If you try to merge 2 objects, 
*/
const object1={
    userName:"JOEL",
    age:23,
}
const object2={
    userName:"Paul"
}
const object3={...object1, ...object2};
console.log(object3)

/*

HANDLING MULTIPLE KEYS
*/
let arr = new Array();
console.log(arr instanceof Array); // Output: true

var obj = {
    key: ["value1", "value2"]
};

// Looping through the object
for (let i in obj) {
    console.log(i); // Output: key

    // Checking if obj[i] is an instance of Array
    if (obj[i] instanceof Array) { 
        for (let k = 0; k < obj[i].length; k++) {
            console.log(obj[i][k]); // Output: value1, value2
        }
    } else {
        console.log("As else has executed,", obj[i]);
    }
}
