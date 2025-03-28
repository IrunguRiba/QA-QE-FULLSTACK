//QUESTION 1
type ShoppingCart = {
    userId: string;
    items:string[];
  };
  
  const processCart = (cart: ShoppingCart) => {
    // Do something with the cart in here
  };
  processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
  //Object literal may only specify known properties, and 'items' does not exist in type 'ShoppingCart'.
  });
  console.log(processCart)


  //QUESTION 2

  type Recipe = {
    title: string;
    instructions: string;
    ingredients:Array<{ name:string, quantity:string}>
  };
  
  const processRecipe = (recipe: Recipe) => {
    // Do something with the recipe in here
  };
  
  processRecipe({
    title: "Chocolate Chip Cookies",
    ingredients: [
  //Object literal may only specify known properties, and 'ingredients' does not exist in type 'Recipe'.
      { name: "Flour", quantity: "2 cups" },
      { name: "Sugar", quantity: "1 cup" },
    ],
    instructions: "...",
  });
/*

  //QUESTION THREE
  const setRange = (range: Array<number>) => {
    const x:number = range[0];
    const y:number = range[1];
 
  
    // Do something with x and y in here
    // x and y should both be numbers!
  type Expect{
    y:number;
  };
  type Equal{
    y:number;
  };
    type tests = [
      Expect<Equal<typeof x, number>>,
 // Type 'false' does not satisfy the constraint 'true'.
      Expect<Equal<typeof y, number>>,
 // Type 'false' does not satisfy the constraint 'true'.
    ];
  };

  //QUESTION FOUR
  const goToLocation = (coordinates: Array<x:number, y:number, z?:number>) => {
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const elevation = coordinates[2];
  
    // Do something with latitude, longitude, and elevation in here
  
    type tests = [
      Expect<Equal<typeof latitude, number>>,
      Expect<Equal<typeof longitude, number>>,
      Expect<Equal<typeof elevation, number | undefined>>,
  //Type 'false' does not satisfy the constraint 'true'.
    ];
  };
  */
 

  /*------------NOTES----------
Explict type annotation
to add types explicitly
const person1={name:string, age:number}={
name:"joel"
age:30


}




  */

//QUESTION FOUR
/*
type Latitude = number;
let latitude: Latitude = 45;

const goToLocation = (coordinates: [number, number, number?]) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const elevation = coordinates[2];

  // Do something with latitude, longitude, and elevation here
  // TypeScript will check types during compilation, no need to log them

  // Type checks for development purpose (they are only compile-time checks)
  type tests = [
    Expect<Equal<typeof latitude, number>>, 
    Expect<Equal<typeof longitude, number>>, 
    Expect<Equal<typeof elevation, number | undefined>>
  ];

  // Do other stuff, e.g. return something if needed
  return { latitude, longitude, elevation };
};

// Test the function
goToLocation([45, 90]); // This will pass the type checks.
goToLocation([45, 90, 100]); // This will also pass the type checks.

console.log(goToLocation([45, 90])); // Just logging the result of the function, not the types.
*/



type Person = { 
  name: string; 
  age: number; 
};

const person1: Person = {
  name: "Joel", 
  age: 30
};

console.log(person1);

type Employee = {
  name: string;
  id: number;
};

type Department = {
  name: string;
  department: string;
};

type Manager = Employee & Department; // Use intersection to combine types

const manager: Manager = {
  name: "Joel",
  id: 123445,  // id should be a number, not a string
  department: "HR",
};
console.log(manager)


// Defining the interface Animal
interface Animal {
  name: string;
  sound: string;
  price: number;
}

// Implementing the interface with the Dog class
class Dog implements Animal {
  name: string;
  sound: string;
  price: number;

  constructor(name: string, sound: string, price: number) {
    this.name = name;
    this.sound = sound;
    this.price = price;
  }
}

// Creating an instance of the Dog class
const myDog = new Dog("GERMAN SHEPHERD", "Barks", 1234);

console.log(myDog);


//CREATING DYNAMIC KEYS WITH INDEX SIGNATURES
//const syntax:{[key:string]:string}
const dynamicKeyShape:{[key:string]:string}={}
dynamicKeyShape["name"]="joel"
dynamicKeyShape["age"]="20"
console.log(dynamicKeyShape)

//Dynamic Keys with Fixed Properties
type User={
  id:number;
  name:string
  //This accepts a key name of any name that can be either a string or a number
  [key:string]:string |number
}
const user1:User={
  id:1,
  name:"joel"
}
//No error because typescript is powerful to the minimal

console.log(user1)

const user2:User={
  id:34,
  number:1234,
  name:"Joel"
}
console.log(user2)


//UTILITY TYPES
//This is providing utilty funtions that make it easier to work with it
//Eg Partial<T>: This makes all the properties of a types optional
//Pick<T> creates types by picing a set of properties from an existing type

//Omit <T> Creates a new types by ommiting a set of properties from an existing type
type Person1={
  name:string
  age:number
  location:number
  school:string
}

const requiredperson:Partial<Person1>={
  name:"Joel",
  age:23

}
console.log(requiredperson)

//PICK CREATES A NEW TYPE
type Person2={
  name:string
  age:number
  location:string
}
type NameAndAge=Pick<Person2, "name"| "age">

//You can also craete  age and name by ommiting location
type WithoutLocation=Omit<Person2, "location">
const withoutLocation:WithoutLocation={
  name:"Joel",
  age:23

}
console.log(withoutLocation)
//DECLARATION MARGING
interface Person4{
  age:number
}
interface Person4{
  name:string
}
const person4={
  age:23,
  name:"joel"
}
console.log(person4)

//Type Assertion and Casting
const someValue: unknown = "hello Ts";
const strLength: number = (someValue as string).length;
console.log(strLength);

const fullName = {
  name: "Joel",
  age:23

} as { name: string, age: number };
console.log(fullName)

/*
UNIONS
Allow a variable to hold values of multiple types while ensuring type safety




*/
let value:string |number
value="Hello"
value=78
//Declaring Union Types using | symbol
const logId=(id:string|number)=>
  {
  console.log(id)
  
}
logId("1234erty")
//The log Function accepted a string a number

//Type Aliases With Union
//Allows you to define a unioon with a name, making your code cleaner and more readable
type ID=string |number
const userId:ID="ERYRURI23445"
const orderId:ID=1234
console.log(userId,orderId)
//Literal Types in unionstype Direction = "up" | "down" | "left" | "right";
type Direction ="up"|"down"|"left"|"right"|"forward"
const move: Direction = "up";  // Valid
const move2: Direction = "left";  // Valid
const move3: Direction = "forward";  // Error: Type '"forward"' is not assignable to type 'Direction'.
//EG MPESA STATE
type mpesaState = "Success" | "Failed" | "Pending";

function smsServices(transState: mpesaState) {
  if (transState === "Success") {  // Match the casing exactly
    return "Success";
  } else {
    return "Failed";
  }
}

// Test the function
console.log(smsServices("Success"));  // Valid
console.log(smsServices("Failed"));   // Valid
console.log(smsServices("Pending"));  // Valid
// smsServices("success");  // Error: Argument of type '"success"' is not assignable to parameter of type 'mpesaState'.



//COMBINING MORE UNION TYPES
type DigitalFormat = "mp3" | "FLAC";
type PhysicalFormat = "LP" | "CD" | "Cassette";
type AlbumFormat = DigitalFormat | PhysicalFormat;

// Using AlbumFormat to type a variable
let myAlbumFormat: AlbumFormat = "mp3";  // Valid
let myAlbumFormat1= "CD";
let myAlbumFormat2="mp3";
let myAlbumFormat3="LP" 
let myAlbumFormat4="Cassette" // Valid

console.log(myAlbumFormat+" "+myAlbumFormat1+" "+myAlbumFormat2+""+myAlbumFormat3+""+myAlbumFormat4);  // Output: "CD"

// Invalid example (will cause a type error)
// myAlbumFormat = "mp4";  // Error: Type '"mp

//Narrowing Union Types
const printValue = (value: string | number) => {
  if (typeof value === 'string') {  // Correct `typeof` usage
    console.log(value.toUpperCase());  // Call `toUpperCase()` with parentheses
  } else {
    console.log(value.toFixed(2));  // Call `toFixed(2)` correctly
  }
}

// Test the function
printValue("hello");  // Output: HELLO
printValue(123.456);   // Output: 123.46

//Literal Narrowing 
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function area(shape: Shape) {
  if ("radius" in shape) {
    // Inside this block, TypeScript knows `shape` is a `Circle`
    return Math.PI * shape.radius ** 2;
  } else {
    // Inside this block, TypeScript knows `shape` is a `Square`
    return shape.side ** 2;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", side: 4 };

console.log(area(circle));  // Logs: 78.53981633974483 (Circle area)
console.log(area(square));  // Logs: 16 (Square area)


//Discriminated Unions
type APIResponse =
  | { status: "success"; data: string }
  | { status: "error"; message: string }
  | { status: "loading"; progress: number };

function handleAPIResponse(response: APIResponse) {
  switch (response.status) {
    case "success":
      console.log("Data received:", response.data);
      break;
    case "error":
      console.error("Error occurred:", response.message);
      break;
    case "loading":
      console.log("Loading... Progress:", response.progress, "%");
      break;
    default:
      throw new Error("Unknown response status");
  }
}

const successResponse: APIResponse = { status: "success", data: "Some data" };
const errorResponse: APIResponse = { status: "error", message: "Something went wrong" };
const loadingResponse: APIResponse = { status: "loading", progress: 50 };

handleAPIResponse(successResponse);  // Logs: Data received: Some data
handleAPIResponse(errorResponse);    // Logs: Error occurred: Something went wrong
handleAPIResponse(loadingResponse);  // Logs: Loading... Progress: 50 %

//eXaple 2
interface Dog {
  kind: "dog";  // Discriminant property for Dog
  name: string;
  breed: string;
}

interface Cat {
  kind: "cat";  // Discriminant property for Cat
  name: string;
  color: string;
}

type Pet = Dog | Cat;  // Union type of Dog and Cat

function describePet(pet: Pet) {
  switch (pet.kind) {
    case "dog":
      console.log(`This is a ${pet.breed} dog named ${pet.name}`);
      break;
    case "cat":
      console.log(`This is a ${pet.color} cat named ${pet.name}`);
      break;
    default:
      throw new Error("Unknown pet type");
  }
}

const cat: Cat = { kind: "cat", name: "Fluffy", color: "white" };  // Logs: This is a German Shepherd dog named Rex
describePet(cat);  // Logs: This is a white cat named Fluffy

//Optimistic UI is about immediate, assumed success of actions (e.g., submitting data).

//Skeleton UI is about showing loading placeholders while content is being fetched.

//UNKNOWN THE MOST FLEXIBLE TYPE. Can be anything but requires type checking before usage

//  AND NEVER the most restrictive type. Represents 


type Car = {
  type: "Car";
  wheels: 4;
  gears: "5V";
};

type Bike = {
  type: "Bike";
  wheels: 2;
  gears: "1V" | "3V" | "5V";
};

type Vehicle = Car | Bike;

const getVehicleInfo = (vehicle: Vehicle) => {
  if (vehicle.type === "Car") {
    // TypeScript knows 'vehicle' is a Car here
    console.log(`This is a Car with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  } else if (vehicle.type === "Bike") {
    // TypeScript knows 'vehicle' is a Bike here
    console.log(`This is a Bike with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  } else {
    console.log("Unknown vehicle type");
  }
};

// Example usage:
const car: Car = { type: "Car", wheels: 4, gears: "5V" };
const bike: Bike = { type: "Bike", wheels: 2, gears: "5V" };

getVehicleInfo(car);  // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike); // Output: This is a Bike with 5V gears and 2 wheels.

//cUSTOMIZED
type Car2 = {
  type: "Car";
  wheels: 4;
  gears: "5V";
};

type Bike2 = {
  type: "Bike";
  wheels: 2;
  gears: "1V" | "3V" | "5V";
};

type Vehicle2 = Car | Bike;

// Custom Type Guard to check if the vehicle is a Car
function isCar(vehicle: Vehicle): vehicle is Car {
  return vehicle.type === "Car";
}

// Custom Type Guard to check if the vehicle is a Bike
function isBike(vehicle: Vehicle): vehicle is Bike {
  return vehicle.type === "Bike";
}

const getVehicleInfo1 = (vehicle: Vehicle) => {
  if (isCar(vehicle)) {
    // TypeScript knows that 'vehicle' is a 'Car' here
    console.log(`This is a Car with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  } else if (isBike(vehicle)) {
    // TypeScript knows that 'vehicle' is a 'Bike' here
    console.log(`This is a Bike with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  } else {
    console.log("Unknown vehicle type");
  }
};

// Example usage:
const car1: Car = { type: "Car", wheels: 4, gears: "5V" };
const bike1: Bike = { type: "Bike", wheels: 2, gears: "5V" };

getVehicleInfo(car);  // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike); // Output: This is a Bike with 5V gears and 2 wheels.

//instance of
class Car4 {
  type: "Car";
  wheels: 4;
  gears: "5V";

  constructor() {
    this.type = "Car";
    this.wheels = 4;
    this.gears = "5V";
  }
}

class Bike4 {
  type: "Bike";
  wheels: 2;
  gears: "1V" | "3V" | "5V";

  constructor() {
    this.type = "Bike";
    this.wheels = 2;
    this.gears = "5V";
  }
}

type Vehicle4 = Car | Bike;

const getVehicleInfo2 = (vehicle: Vehicle) => {
  if (vehicle instanceof Car4) {
    // TypeScript knows that 'vehicle' is a 'Car' here
    console.log(`This is a Car with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  } else if (vehicle instanceof Bike4) {
    // TypeScript knows that 'vehicle' is a 'Bike' here
    console.log(`This is a Bike with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  } else {
    console.log("Unknown vehicle type");
  }
};

// Example usage:
const car4= new Car4();
const bike4= new Bike4();

getVehicleInfo(car);  // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike)

//In 
type Car5 = {
  type: "Car";
  wheels: 4;
  gears: "5V";
};

type Bike5 = {
  type: "Bike";
  wheels: 2;
  gears: "1V" | "3V" | "5V";
};

type Vehicle3= Car5 | Bike5;

const isCar1= (vehicle: Vehicle3): vehicle is Car5 => "wheels" in vehicle && vehicle.wheels === 4;

const getVehicleInfo3 = (vehicle: Vehicle) => {
  if (isCar(vehicle)) {
    console.log(`This is a Car with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  } else {
    console.log(`This is a Bike with ${vehicle.gears} gears and ${vehicle.wheels} wheels.`);
  }
};

// Example usage:
const car5: Car = { type: "Car", wheels: 4, gears: "5V" };
const bike5: Bike = { type: "Bike", wheels: 2, gears: "5V" };

getVehicleInfo(car);  // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike); // Output: This is a Bike with 5V gears and 2 wheels.

//EXERCISE 1

function getUsername(username: string | null): string | null {
  if (username === null) {
     return null;
  }
  return username;
}
const result = getUsername('Alice')
//type test = Expect<Equal<typeof result, string |null>>

const result2 = getUsername(null)
//Argument of type 'null' is not assignable to parameter of type 'string'.

//type test2 = Expect<Equal<typeof result2, string>>

//Exercise 2
function move1(direction: "up"| "down"| "right"|"left", distance:number){

}
move1(
  // @ts-expect-error - "up-right" is not a valid direction
//Unused '@ts-expect-error' directive.
  'up-right',
  10,
)

move1(
  // @ts-expect-error - "down-left" is not a valid direction
//Unused '@ts-expect-error' directive.
  'down-left',
  20,
)
//
//Exercise
