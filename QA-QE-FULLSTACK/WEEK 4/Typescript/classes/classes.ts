/*
1: Creating class based on pascal method
class StudentMarks{
name:string;
marks:number[];

}
 Create constructors


*/

import { Console } from "console";

interface Std {
    name: string;
    marks: number[];
  }
  
  class StudentMarks implements Std {
    name: string;
    marks: number[];
  
    constructor(studObj: Std) {
      this.name = studObj.name;
      this.marks = studObj.marks;
    }
  }
  
  // Example usage:
  const student = new StudentMarks({ name: "Joel", marks: [90, 80, 85] });
  console.log(student);
  
  //When we create an instance of StudentMarks, the properties will be initailized
  interface Std {
    name: string;
    marks: number[];
  }
  
  class StudentMarks1 implements Std {
    name: string;
    marks: number[];
  
    constructor(studObj?: Std) {
      this.name = studObj?.name || "Unknown";
      this.marks = studObj?.marks || [];
    }
  }
  
  // Example usage:
  const LoopMarks = new StudentMarks1();  // No arguments passed
  console.log(LoopMarks);

  //Class Properties
  //1:Default vlues property initializer
  //You can set default values for properties for your properties
  class Album3 {
    title = "Unknown Albums";
    artist = "Unknown Artist";
    releaseYear = 0;
}

// This is creating a new anonymous class with the same name "Album3"
// but it does not override the original Album3 class.
new class Album3 {
    title = "Albums";
    artist = " Artist";
    releaseYear = 90;
}

// This will create an instance of the anonymous Album3 class (inside `new class`)
const newAlbum = new Album3();
console.log(newAlbum.title);  // Output: "Albums"
console.log(newAlbum.artist); // Output: " Artist"
console.log(newAlbum.releaseYear); // Output: 90

//OVERRIDING with optionals 
class Album4 {
    title? = "Unknown Albums";
    artist? = "Unknown Artist";
    releaseYear? = 0;
}

class CustomAlbum extends Album4 {
    title = "Albums";
    artist = " Artist";
    releaseYear = 90;
}

const album = new CustomAlbum();
console.log(album.title);  // Output: "Albums"
console.log(album.artist); // Output: " Artist"
console.log(album.releaseYear); // Output: 90

  //Visibilty Modifiers
  //public can be accessed anywhre
  //private cannot be accessed everywhere
  //protected can only be accessed within and its subclasses

  class Album5 {
    private title = "Unknown Albums";
    private artist = "Unknown Artist";
    protected releaseYear = 0;
}

//Methods are functions defined within a class
//Thye can interact with the class 
interface Std {
    name: string;
    marks: number[];
  }
  
  class Student {
    name: string;
    marks: number[];
  
    constructor(studObj: Std) {
      this.name = studObj.name;
      this.marks = studObj.marks;
    }
  }

  //Inheritance
  //Super constructors calls the parent class constructor
  // Base class
class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(): void {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  // Derived class
  class Dog extends Animal {
    constructor(name: string) {
      super(name); // Call the constructor of the base class
    }
  
    speak(): void {
      console.log(`${this.name} barks`);
    }
  }
  
  // Example usage:
  const dog = new Dog("Buddy");
  dog.speak(); // Output: Buddy barks
  
  const animal = new Animal("Generic Animal");
  animal.speak(); // Output: Generic Animal makes a sound
    //Abstract class




    // Abstract class
abstract class Animal1 {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // Abstract method (must be implemented by subclasses)
    abstract sound(): void;
  
    // Concrete method (can be used as is)
    move(): void {
      console.log(`${this.name} is moving`);
    }
  }
  
  // Derived class
  class Dog1 extends Animal1 {
    constructor(name: string) {
      super(name); // Call the constructor of the base class
    }
  
    // Implement the abstract method
    sound(): void {
      console.log(`${this.name} barks`);
    }
  }
  
  // Derived class
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
}

//GETTERS AND SETTERS
//These allows you to control access of private classes


class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for 'name'
    get name(): string {
        return this._name;
    }

    // Setter for 'name'
    set name(value: string) {
        if (value.length < 3) {
            console.log("Name must be at least 3 characters long.");
        } else {
            this._name = value;
        }
    }

    // Getter for 'age'
    get age(): number {
        return this._age;
    }

    // Setter for 'age'
    set age(value: number) {
        if (value < 0) {
            console.log("Age cannot be negative.");
        } else {
            this._age = value;
        }
    }
}

const person = new Person("John", 30);

// Using getters
console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30

// Using setters with validation
person.name = "Jo";   // Output: Name must be at least 3 characters long.
person.age = -5;      // Output: Age cannot be negative.
person.name = "Alice";
person.age = 25;

// Using getters again after setting new values
console.log(person.name);  // Output: Alice
console.log(person.age);   // Output: 25

  //implements keyword
  // Define an interface
// Define the interface with the correct name
interface Animal2 {
    name: string;
    sounds(): void;  // Method defined in the interface
}

// Implement the interface in the Dog class
class Dogs implements Animal2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Implement the 'sounds' method from the interface
    sounds(): void {
        console.log(`${this.name} barks!`);
    }
}

// Implement the interface in the Cat class
class Cats implements Animal2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Implement the 'sounds' method from the interface
    sounds(): void {
        console.log(`${this.name} meows!`);
    }
}

const dog1 = new Dogs("Buddy");
dog1.sounds();  // Output: Buddy barks!

const cat = new Cats("Whiskers");
cat.sounds();  // Output: Whiskers meows!


//GENERICS IN TS//
//GENERIC FUNCTION
function identity1<T>(arg: T): T {
  return arg;
}

let output1 = identity1<string>("Hello, world!");
let output2 = identity1<number>(42);

console.log(output1); // "Hello, world!"
console.log(output2); // 42


//GENERIC CLASS
/*
function functionName<T>(arg: T): T {
  return arg;
}
T: This is the placeholder for the type parameter. It can be any name, but T is commonly used.
arg: T: The parameter arg is of type T, which means it can accept any type when the function is called.
: T: The return type is also T, ensuring the function returns the same type that was passed in.


*/


function reverseArr <T>(arr:T[]): T[]{
  return arr.reverse()

}
const numArr=[1,2,3,5]
console.log(reverseArr(numArr))

class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getValue()); // 123

const stringBox = new Box<string>("Generic Example");
console.log(stringBox.getValue()); // "Generic Example"

//GENERIC INTERFACE
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<number, string> = { first: 1, second: "one" };
console.log(pair); // { first: 1, second: "one" }



function merge1<T extends { name: string }>(obj1: T, obj2: T): T {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Bob", age: 25 };

const mergedObj = merge1(obj1, obj2);
console.log(mergedObj); // { name: "Bob", age: 25 }

//GENERIC CONSTRAINTS
//function functionName<T extends SomeType>(arg: T): T { ... }

function getLonger<T extends { name: string; length: number }>(obj1: T, obj2: T): T {
  return obj1.length > obj2.length ? obj1 : obj2;
}

const obj4 = { name: "Alice", length: 5 };
const obj5 = { name: "Bob", length: 10 };

const result = getLonger(obj4, obj5);
console.log(result); // { name: "Bob", length: 10 }

/*
function functionName<T = DefaultType>(arg: T): T {
  return arg;
}


*/
function echo<T = string>(value: T): T {
  return value;
}

console.log(echo("Hello")); // Output: "Hello" (T inferred as string)
console.log(echo(123)); // Output: 123 (T inferred as number


//gENERICS WITH TYP ALIASES
type Container<T> = {
  item: T;
  getItem: () => T;
};

const stringContainer: Container<string> = {
  item: "Generics in TypeScript",
  getItem: function() {
    return this.item;
  }
};

const booleanContainer: Container<boolean> = {
  item: true,
  getItem: function() {
    return this.item;
  }
};
 //CONDITIONAL TYPES IN GENERICS
 function identity<T>(value: T): T extends string ? string : number {
  if (typeof value === "string") {
    return value as T extends string ? string : never; // cast to match the expected return type
  } else {
    return 42 as T extends string ? never : number; // cast to match the expected return type
  }
}

const result1 = identity("Hello"); // string
const result2 = identity(123);     // number

console.log(result1); // "Hello"
console.log(result2); // 42



//WITH UNION TYPES
type ExtractString<T> = T extends string | number ? string : never;

type Test11 = ExtractString<string>;  // "string"
type Test22 = ExtractString<number>;  // "string"
type Test33 = ExtractString<boolean>; // "never"
