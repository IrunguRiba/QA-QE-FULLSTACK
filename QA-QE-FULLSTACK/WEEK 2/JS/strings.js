import chalk from "chalk"
console.log(chalk.red("hello world"))
let age=25
console.log(age)
const schoolName="Greenwood High"
console.log(schoolName)
let studentLists=[]
console.log(studentLists)
console.log (chalk.blue(" 'let Is dynamic method of declaring variables, const Is Static, While Var Is The Outdated Method Of Declaring Variables which allowed redlarition of variable scope."))
//let $price = 100;
console.log("Variable naming Valid")
//let 1stPlace = "John";
console.log("Variable naming inValid")
//let _score = 89;
console.log("Variable naming Valid")
//let userName = "Alice";
console.log("Variable naming Valid")
//Why the following variable name incorrect?
//const #taxRate = 0.16;
console.log("Variable name begins with a # which aganist the variable naming standards")
//Rewrite this variable name to follow best practices:
//let MyvariableNAME = "JavaScript";
console.log("myVariableName");
//myVariableName
console.log(typeof "Hello");
//String
console.log(typeof 99);
//number
console.log(typeof true);
//boolean
console.log(typeof undefined);
//undentified

//Identify the data types in this array
let data = ["Kenya", 34, false, { country: "USA" }, null];
console.log(data)
console.log("String, Numbers, Boolean, { String} String")
//Big Int
console.log("BigInt is BigInt is used for numbers greater than 2^53 Example 9007199254740991n")
let person=["JOEL", 23, "Nanyuki"]
// Create an object person with properties name, age, and city.
// Add a new property email to the person object.
// Declare an array fruits with three fruit names.
// Access the second item in the fruits array.
console.log(person)
person.push("joel.irungu00@gmail.com")
console.log(person)
let fruit=["MANGO", "GRAPES", "PineApple"]

console.log(fruit[1])
//What will be the output of the following?
console.log("5" + 2);
//52
console.log("5" - 2);
//3
//Convert the string "100" into a number
console.log(Number("100"))
let num=50
console.log(num.toString())
//What will be the result of this operation?
console.log(5 + true)
//6

//STRING ASSIGNMENT
//CHECKING WHETHER AN INPUT IS STRING OR NOT
function isString(value){
    if(typeof value=== "string"){
        return true;
    }
    else
    {
        return false;
    }
}

console.log(isString('w3resource'))
console.log(isString(1240));
//CHECKING BLANK STRINGS
function is_Blank(string){
    if(string.length ==0){
        return true

    } else{
        return false
    }

}
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

//Spliting strings
function string_to_array(input){
    return input.split(" ");

}
console.log(string_to_array("Robin Singh")); 
 //Extracting Characters
 function truncate_string(myString){

    return myString.substr(0,4)
    
 }
 console.log(truncate_string("Robin Singh"))

 //Abbreviating Names

  function abbrev_name(twoNames){
   twoNames=twoNames.split(" ")
  let lastName=twoNames[1].charAt(0).toUpperCase()
  let firstName=twoNames[0]
   return firstName + " " + lastName+"."
 }
console.log(abbrev_name("Robin Singh"))

//Hidding parts of an email
/* function protect_email(email){

firstName=email.substr(0,5)

mid=email.indexOf("@")

secured=email.substr(mid,)

return firstName  + secured

}
console.log(protect_email("joel.irunggu@yrirh.com"))*/
function protect_email(email){

   let firstSection=email.substr(0, 5)

    let midpoint=email.indexOf("@")

   let lastSection=email.substr(midpoint, )

    return firstSection+"..."+lastSection

}
console.log(protect_email("Robin_singh@example.com"))

//Parameterize String
function string_parameterize(statement){
    for (let i = 0; i < statement.length; i++) {
        statement = statement.replace(" ", "-").toLowerCase();
    }
    return statement;
}
console.log(string_parameterize("Robin Singh from USA"))

//Capitalize First Letter

function capitalize(statement){
    return statement.charAt(0).toUpperCase()+statement.slice(1)


}
console.log(capitalize('js string exercises'));

function capitalize_Words(sentence) {
    let splitWords = sentence.split(" ");
    
    for (let i = 0; i < splitWords.length; i++) {
        splitWords[i]=splitWords[i].charAt(0).toUpperCase()+splitWords[i].slice(1);
    }
    return splitWords.join(" ");
}

console.log(capitalize_Words('js string exercises'));

//Swap Case
function swapCase(swapcase) {
    let sentence = '';

    for (let i = 0; i < swapcase.length; i++) {
    let char = swapcase[i];
     if (char === char.toUpperCase()) {
            sentence += char.toLowerCase();
        } else{ sentence += char.toUpperCase();
        }
    }
    return sentence;
}
console.log(swapCase('AaBbc'));

//11. Camelize String "JavaScript Exercises"
function camelize(wordds) {
    let CamelizedWords = wordds.replace(/\s+/g, ""); 
 return CamelizedWords;
}
console.log(camelize("JavaScript Exercises"));

//Uncamelize String
function uncamelize(sentence) {
    return sentence.replace(/([a-z])([A-Z])/g, "$1 $2");
}
console.log(uncamelize("HelloWorld"))
//REPEATING  Text eASILY
function repeat(text){
   return text.repeat(3)
}
console.log(repeat("Ha!!"))
// Insert in String
    function insert(original, insertText, position) {
        return original.slice(0, position)
         + insertText + original.slice(position);
    }
    console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
  
    // Humanize Format
 function humanize_format(num) {
     if (typeof num !== "number" || isNaN(num)) return "Invalid number";
        
 let suffix = "th";
        for (let i = 1; i <= num; i++) {
    let lastDigit = i % 10;
    let lastTwoDigits = i % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 20) {
  suffix = "th";
 } else {
    switch (lastDigit) {
     case 1: suffix = "st"; break;
 case 2: suffix = "ND"; break;
 case 3: suffix = "RD"; break;
 default: suffix = "NTH";
    }
}  }
            return num + suffix;
         }
         console.log(humanize_format(21) +" cENTURY");

         // Truncating String with Ellipsis
         function text_truncate(longSentences, length, ellipsis = "...") {
    if (longSentences.length > length) {
 return longSentences.slice(0, length) + ellipsis; 
 } else {
       return longSentences;
            }
        }
        
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
//. Chopping String into Chunks
function string_chop(names, sentenceSize) {
    let chopped = [];
    for (let i = 0; i < names.length; i += sentenceSize) {
  chopped.push(names.slice(i, i + sentenceSize));
    }
    return chopped;
}
console.log(string_chop('w3resource', 3)); 
 //Count Substring Occurrences
 function count(str, substring) {
 let count = 0;
let position = 0;
while ((position = str.toLowerCase().indexOf(substring.toLowerCase(), position)) !== -1) {
 count++; 
  position += substring.length; 
    
    return count; 
}
 }
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); 

//Reverse Binary Representation
function reverse_binary(num) {
    let binary = num.toString(2);
    let reversedBinary = binary.split('').reverse().join('');
    let reversedDecimal = parseInt(reversedBinary, 2);
    return reversedDecimal;
}

console.log(reverse_binary(100)); 
//. Pad String to Length
function formatted_string(pad, num, direction) {
    let numStr = num.toString(); 
    let padLength = pad.length;  
    let padCount = padLength - numStr.length; 
    if (direction === 'l') {
    return numStr.padStart(numStr.length + padCount, pad); 
    } else {
         return numStr.padEnd(numStr.length + padCount, pad); 
    }
}
console.log(formatted_string('0000', 123, 'l')); 



  



