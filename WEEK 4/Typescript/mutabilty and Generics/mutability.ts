//NOTES
console.log("Hello")
/*
State is Immutable
let isAdmin=true
isAdmin =false
(prevState)=>(newState)
prevState !=newState
Primitive types eg string, numbers, null, etcare immutable
OJECTS AND ARRAYS ARE MUTABLE

We can make objects immutable using readonly or utlity like readOnly<T>
 passing types to functions
 Generic in function
This allows functions to accept different types while preserving type safety

 Arrays in TS



*/
let str:string="hello"
str.toUpperCase()
console.log(str) // OUTPUT = hello

const array:number[]=[1,2,3,5,67,8,8]
array.push(6)
console.log(array) //prints the 6 added...this is mutability

const obj={name:"Alice", age:45}
obj.age=67
console.log(obj)

//Using ReadOnly
type User={
    readonly name:string;
    age:number;
}
const user:User={name:"Joel", age:21}
user.age=34
console.log(user)

//We can also say
const readOnlyObj: Readonly<User>={name:"Joel", age:25}
console.log(readOnlyObj)
 
type User1={
    name:"Joel",
    age:23,
}
type MutableAge = Omit<Readonly<User>, "age"> & { age: number };
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello")); // Correct usage
console.log(identity<number>(23)); // Correct usage
console.log(identity<{ name: string, age: number }>({ name: "Hello", age: 34 })); // Corrected object type usage

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 }; // Merge the two objects
}

const mergedObject = merge({ name: "Alice" }, { age: 30 });
console.log(mergedObject); // { name: "Alice", age: 30 }


//Array in TS
const fruits:string[]=["IRUNGU", "JOEL", "RIBA"]
console.log(fruits)
fruits.push("VIVIAN", "SHARON")
console.log(fruits)


//
// PROMISES IN TS
const fetchData = async (): Promise<any> => {
    // Simulate fetching data (you can replace this with actual logic like fetching from an API)
    const data = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 10);
    });
    
    return data;
};

type UserType = {
    name1: string;
    age: number;
    location: string | number;
};

// Function that returns a Promise<UserType>
const fetchUserData = (): Promise<UserType> => {
    return new Promise((resolve, reject) => {
        // Simulate asynchronous behavior (e.g., fetching data)
        setTimeout(() => {
            const user: UserType = {
                name1: "Joel",
                age: 23,
                location: "233rdfg"
            };

            resolve(user);  // Resolving the promise with user data
        }, 1000); // Simulate 1 second delay
    });
};

// Example usage:
fetchUserData()
    .then(user => {
        console.log(user);  // Logs the user data
    })
    .catch(error => {
        console.error("Error fetching user data:", error);
    });
//Using Await
const fetchUserDataAsync = async (): Promise<UserType> => {
    // Simulating async behavior (like an API call)
    const user: UserType = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name1: "Joel",
                age: 23,
                location: "233rdfg"
            });
        }, 10);
    });

    return user;
};

// Example usage with async/await
const getUser = async () => {
    try {
        const user = await fetchUserDataAsync();
        console.log(user);  // Logs the user data
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};

getUser();

//Sets in TS
//A set is a collectin of unique values
const mySet:Set<number>=new Set([1,2,3,5,5,6,7,4])
mySet.add(4657)
console.log(mySet)
const emptySet=new Set<string>()
emptySet.add('Hello')
console.log(emptySet)

//Types Assertion and Casing
//Using as syntax
//Using angle bracket syntax
//


//AS SYNTAX
const jsonString=`{"name": "Joel"}`;
const parseData=JSON.parse(jsonString) as {name:string; age:number}
console.log(parseData)

//Default parameters
const greet=(name:string, greetings:string="Hello")=>{
    console.log(`${greetings} ${name}`)

}
greet("Bob")
greet("Joel", "How are you")

//rest parameter
const sum =(...numbers:number[])=>{
    return numbers.reduce((prev, next)=>prev+next, 0)
}
console.log(sum(1,2,3,4,5,6,7,8,9))

const logMsg = (message: string): void => {
    console.log(message); // log the message to the console
};
logMsg("Hello")


//Exercise
type ButtonAttributes = {
    type: "button" | "submit" | "reset";
  }; 
  
 const modifyButtons = (attributes: ButtonAttributes[]) =>{
    
  };
  const buttonsToChange:ButtonAttributes[]= [
    {
      type: "button",
    },
    {
      type: "submit",
    },
  ];
  

  
  
  
   modifyButtons(buttonsToChange);
  
   //EXERCISE 2
   function printNames(names: string[]) {
    for (const name of names) {
      console.log(name);
    }
    // No need for @ts-expect-error
    names.push("Joel");
    // No need for @ts-expect-error
    names[0] = "Becky";
  }
  printNames(["Alice", "Bob"]);
  

  //Excercise
type Person1={
name:string,
age:number,
location:number| string| null,

}
function person1(person:Person1){
    return {name:person.name, age:person.age, location:person.location}

}
console.log(person1({name:"Joel", age:23, location:254}));

