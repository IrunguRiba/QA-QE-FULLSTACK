/*
if(condition){
output
}
else{
if condition is not satisfied
}
*/
function grades(markss) {
    if (markss >= 70 && markss <= 100) {
        markss = "A";
    } else if (markss >= 60 && markss < 70) {
        markss = "B";
    } else if (markss >= 50 && markss < 60) {
        markss = "C";
    } else {
        markss = "E";
    }
    return markss;
}

console.log(grades(60));

let showering = true
if(showering){
    console.log("GREAT!!")

}else{
    console.log("Kindly shower")
}
/*
every condition has to have  a return statement
*/

//An arrow function

let myGrade1 = (mark) => {
    return mark > 60 ? 'A' : 
           mark >= 40 ? 'B' :
           mark >= 30 ? 'C' :
           mark < 30 ? 'D' :
           'Invalid Input';
}

console.log(myGrade1(78)); 
//FUNCTIONS
/*
Syntax
function nameOfTheFunction(){
}
const functionName=()=>{}
    EXECUTIONS OCCURS IN LIFO 

const salesData=require('.data.jason')
function fetchSale(){
    console.log(salesData)
}
fetchSale()

An argument is a representation of a datatype
to be passed as an input later when the the function is called
eg function myGoodFrd(data){
return data
}    
console.log (myGoodFrd({name: "Joel", laptop:"Hp"})
Most of the times, the argument is used for manipulation eg looping through etc
eg of functio n that calculates the avareage of all marks



function average(marksArray){
    //based on the marks array that will be paassed later
//1. get total
//2.get average =total/number of marks
/*
let total=0
for(const mark of marksArray){
    total=total+marks
}
let average=0
average=total/ marksArray.length
return 'total is : ${total} and average is: ${marks}'

}
console.log(average([123, 45, 56, 45]))

//Adding a return type to arrow function
const circleArea=(radius) =>{
    return 'the area of a circle is : ${Math.pie**}'
}


OBJECTS
Datastructure is anything that holds dat in a certain structure
an object is a data strucutrre that holds data in form of value pairs
an object can be created using {-[[Prototype]]} :objcet
const myObject={}
console.log(())
adding data to object
myObject.firstName
Access modifier
1: do notation
2: index string type
3:using object keys
4:destructuring
5:using the 'this keyword

...USING . NOTATION
synatax
object.keyName
eg console.log(joel.age)
...USING INDEX STRING TYPE
pass in a key as a string inside the [ ]
eg
objectName['keyName]
console.log(joel["age"])

...USING OBJECT KEYS
object keys are static method that return an array of a given objects enumerable string keyword key

EG:
console.log(object.keys) 
eg
object.key(objectName)--->return all keys as string
console.log(Object.keys(Bruno))
console.log(object.key(joel)[1])
or
 let arrayKeys=Object.keys(joel)
 console.log(arrayKey[1])
 //once we get the key we need, we can now use the string type to access value
 eg
 console.log(joek[arraykey[1]])


 COMPLEX
 console.log(joel[object.keys(joel)[1]])
ObjectName[Object.keys(objectName)[index]]
 ..USING "THIS"KEYWORD"
 "This" keyword is used to refer to the current context
 const myInfo={
 name:"joel",
 age:78,
 hobbies:["reading", "writing"]
 isMarried:false
 meanGrade:function grades(meanGrade){
return "Your grade is" +meanGrdae
 }
keyfn: function(n){
return this [Object.key(this)[n]]
 }
console.log(myInfo.keyfn(1))

JSON.stringfiy()-converts a js object into a string
PARSE JSN
EG
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

*/