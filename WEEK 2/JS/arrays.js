/*
An array is type of data structture used to store and manipulate an ordered collection of values


OverView 
const mark=[13, 34, 56, 64]

ACCESS MODIFIERS IN ARRAYS

*Arrays are passed my reference and not by value

Modification in array
eg arrayNmae[index]=new value
ADDING ITEMS IN AN ARRAY
.PUSH...ADD ELEMENTS TO THE END OF AN ARRAY
.pop to remove the las elemet in array
.shift is used to remove the fisrt elemnt
Joinign arrays
use concat
Joining arrays into one string use join
//adding unspaced ' on the join

Cow.split('')

*/
//ACCESSING AN ARRAY
const mark=[13, 34, 56, 64]
const names=["joel", "Makena" , "John", "Jackline" ]
console.log(mark[0])
console.log(mark[1])
console.log(names[1])
console.log(names[1])
const dennisInfo=[]
dennisInfo.push(23, 484,575, 8474, "joel")
console.log(dennisInfo)
dennisInfo.pop(1)
console.log(dennisInfo)
dennisInfo.shift(2)
console.log(dennisInfo)
const joel=["irungu12" , 12345]
const details=["jambo junior", 1243]
const combinedArrays=joel.concat(details)
console.log(combinedArrays)
const months=['jan', 'feb', 'march', 'april']
console.log(months.join())
//join an array without a place
console.log(months.join(''))
//adding space '' on the join
console.log(months.join(' '))

//.reverse is used to reverse an arry elemnt
console.log('dad'==='dad'.split('').reverse().join(''))

//Modifying arrays with slice()
//used to remove, replace, or add elements in an array
const siz=['felistas', 'najma', 'vivian']
siz.splice(0,0, 'joy')
console.log(siz)
//at index one, do not relace any value, but push them to the right
siz.splice(0, 0, 'joan', 'Jean')
console.log(siz)
//SLICE METHOD..its used to create a shallow copy of a portion of an array 
//eg
const broz=['joel', 'mark', 'Abraham', 'ian', 'james', 'daniel']
console.log(broz.slice(0,6))
//.include method checks the existence of a particular item in an array

console.log(broz.includes('joel'))

function palind(names){
    let name=''
    if(name===name.split('').reverse().join('')){
        return true
    }
    return false
}
console.log(palind('dad'))

//ARRAY HIGHER ORDER
/*Filter
This is method creates a new array elment with all arrays that pass the test
It must have a return function, immediate ()
Syntax arrayName.filter(element, index, array) =>{
    function body{
    }};
    FILTER RETURNS A NEW ARRAY...never 4get
    FILTER REQUIRES A RETURN KEYWORD...never 4get
    FILTERS HAVE IMMUTABILITY CHARACTERIC...this mean filter does not alter the original array
()=>()...call back function
eg
availableFoods.filter((value)=>(console.log(value)))
availableFoods.filter((filteredfoodObject) => (console.log(value)))

*/
const foods=[
    {id:"QEEIFJ121", name: 'BURGER', price:200},
    {id:"QEEIFJ122", name: 'PIZZA', price:300},
    {id:"QEEIFJ123", name: 'HAMBURGER', price:400},
    {id:"QEEIFJ124", name: 'SANDWITCH', price:500}
]
console.log(foods)

/* forEach
For each is used to execute a provided function once for each elemen in an array,
It's ideal for performing operations on array without creatign a new aray
NO RETURN...IT MODIFIES THE ORIGINAL ARRAY
array.forEaah(callBackfb, thisArgs)
A callbackFunction is a function excecuted on each element of the array

*/
let runners = ['joel', 'joan', 'jean', 'james'];

runners.forEach((runner) => {
  console.log(`${runner} runs 10kms`);
  console.log(`${runner} runs 20kms`);
});

let marks = [10, 20, 30, 40, 40, 50];

let total = 0; // Declare the total outside of the loop
marks.forEach((singleMark) => {
  total += singleMark; // Accumulate the sum
});

const average = total / marks.length; // Calculate the average
console.log(`Total: ${total}`);
console.log(`Average: ${average}`);

/*map
Return a new array
requires a return keyword
immutable...does not modify original array

*/
let runnerss = ['joel', 'joan', 'jean', 'james'];

// Using forEach to log each runner with 10kms and 20kms
runners.forEach((runner) => {
  console.log(`${runner} runs 10kms`);
  console.log(`${runner} runs 20kms`);
});

// Using map to create a new array with "Mr" prefix and 20kms
let newRunners = runners.map((runner) => {
  return `Mr ${runner} runs 20kms`;
});

console.log(newRunners);

const foodss = [
    {id: "QEEIFJ121", name: 'BURGER', price: 200},
    {id: "QEEIFJ122", name: 'PIZZA', price: 300},
    {id: "QEEIFJ123", name: 'HAMBURGER', price: 400},
    {id: "QEEIFJ124", name: 'SANDWITCH', price: 500}
];

console.log(foodss);

let newPrices = foodss.map((food) => {
    let newPrice = food.price + 20; // Increase price by 20
    return `${food.name} new price has increased to ${newPrice}`;
});

console.log(`The new prices are:`);
newPrices.forEach(price => console.log(price)); // Logs each price change

/*reduce
It is used to apply a function to each element of an array
reducing the array to a single value. Its particularly useful for accumulating
results, performing calculation, or combining data from an array into a single output

*/
let reduceEx = [29, 38, 475, 45].reduce((prev, curr) => {
    return prev + curr;  // You can replace this with the logic you want
});
console.log(reduceEx);

//CHECKS IF WORD IS PALINDROME
function pali(names){
if(names===names.split('').reverse().join('')){
    return true
}else{
    return false
}
}
 console.log(pali("DAD"))
