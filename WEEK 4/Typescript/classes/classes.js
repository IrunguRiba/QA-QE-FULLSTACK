"use strict";
/*
1: Creating class based on pascal method
class StudentMarks{
name:string;
marks:number[];

}
 Create constructors


*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var StudentMarks = /** @class */ (function () {
    function StudentMarks(studObj) {
        this.name = studObj.name;
        this.marks = studObj.marks;
    }
    return StudentMarks;
}());
// Example usage:
var student = new StudentMarks({ name: "Joel", marks: [90, 80, 85] });
console.log(student);
var StudentMarks1 = /** @class */ (function () {
    function StudentMarks1(studObj) {
        this.name = (studObj === null || studObj === void 0 ? void 0 : studObj.name) || "Unknown";
        this.marks = (studObj === null || studObj === void 0 ? void 0 : studObj.marks) || [];
    }
    return StudentMarks1;
}());
// Example usage:
var LoopMarks = new StudentMarks1(); // No arguments passed
console.log(LoopMarks);
//Class Properties
//1:Default vlues property initializer
//You can set default values for properties for your properties
var Album3 = /** @class */ (function () {
    function Album3() {
        this.title = "Unknown Albums";
        this.artist = "Unknown Artist";
        this.releaseYear = 0;
    }
    return Album3;
}());
// This is creating a new anonymous class with the same name "Album3"
// but it does not override the original Album3 class.
new /** @class */ (function () {
    function Album3() {
        this.title = "Albums";
        this.artist = " Artist";
        this.releaseYear = 90;
    }
    return Album3;
}());
// This will create an instance of the anonymous Album3 class (inside `new class`)
var newAlbum = new Album3();
console.log(newAlbum.title); // Output: "Albums"
console.log(newAlbum.artist); // Output: " Artist"
console.log(newAlbum.releaseYear); // Output: 90
//OVERRIDING with optionals 
var Album4 = /** @class */ (function () {
    function Album4() {
        this.title = "Unknown Albums";
        this.artist = "Unknown Artist";
        this.releaseYear = 0;
    }
    return Album4;
}());
var CustomAlbum = /** @class */ (function (_super) {
    __extends(CustomAlbum, _super);
    function CustomAlbum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "Albums";
        _this.artist = " Artist";
        _this.releaseYear = 90;
        return _this;
    }
    return CustomAlbum;
}(Album4));
var album = new CustomAlbum();
console.log(album.title); // Output: "Albums"
console.log(album.artist); // Output: " Artist"
console.log(album.releaseYear); // Output: 90
//Visibilty Modifiers
//public can be accessed anywhre
//private cannot be accessed everywhere
//protected can only be accessed within and its subclasses
var Album5 = /** @class */ (function () {
    function Album5() {
        this.title = "Unknown Albums";
        this.artist = "Unknown Artist";
        this.releaseYear = 0;
    }
    return Album5;
}());
var Student = /** @class */ (function () {
    function Student(studObj) {
        this.name = studObj.name;
        this.marks = studObj.marks;
    }
    return Student;
}());
//Inheritance
//Super constructors calls the parent class constructor
// Base class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
// Derived class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this; // Call the constructor of the base class
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog;
}(Animal));
// Example usage:
var dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks
var animal = new Animal("Generic Animal");
animal.speak(); // Output: Generic Animal makes a sound
//Abstract class
// Abstract class
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    // Concrete method (can be used as is)
    Animal1.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    return Animal1;
}());
// Derived class
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        return _super.call(this, name) || this; // Call the constructor of the base class
    }
    // Implement the abstract method
    Dog1.prototype.sound = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog1;
}(Animal1));
// Derived class
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Animal));
//GETTERS AND SETTERS
//These allows you to control access of private classes
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Getter for 'name'
        get: function () {
            return this._name;
        },
        // Setter for 'name'
        set: function (value) {
            if (value.length < 3) {
                console.log("Name must be at least 3 characters long.");
            }
            else {
                this._name = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        // Getter for 'age'
        get: function () {
            return this._age;
        },
        // Setter for 'age'
        set: function (value) {
            if (value < 0) {
                console.log("Age cannot be negative.");
            }
            else {
                this._age = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("John", 30);
// Using getters
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
// Using setters with validation
person.name = "Jo"; // Output: Name must be at least 3 characters long.
person.age = -5; // Output: Age cannot be negative.
person.name = "Alice";
person.age = 25;
// Using getters again after setting new values
console.log(person.name); // Output: Alice
console.log(person.age); // Output: 25
// Implement the interface in the Dog class
var Dogs = /** @class */ (function () {
    function Dogs(name) {
        this.name = name;
    }
    // Implement the 'sounds' method from the interface
    Dogs.prototype.sounds = function () {
        console.log("".concat(this.name, " barks!"));
    };
    return Dogs;
}());
// Implement the interface in the Cat class
var Cats = /** @class */ (function () {
    function Cats(name) {
        this.name = name;
    }
    // Implement the 'sounds' method from the interface
    Cats.prototype.sounds = function () {
        console.log("".concat(this.name, " meows!"));
    };
    return Cats;
}());
var dog1 = new Dogs("Buddy");
dog1.sounds(); // Output: Buddy barks!
var cat = new Cats("Whiskers");
cat.sounds(); // Output: Whiskers meows!
//GENERICS IN TS//
//GENERIC FUNCTION
function identity1(arg) {
    return arg;
}
var output1 = identity1("Hello, world!");
var output2 = identity1(42);
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
function reverseArr(arr) {
    return arr.reverse();
}
var numArr = [1, 2, 3, 5];
console.log(reverseArr(numArr));
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log(numberBox.getValue()); // 123
var stringBox = new Box("Generic Example");
console.log(stringBox.getValue()); // "Generic Example"
var pair = { first: 1, second: "one" };
console.log(pair); // { first: 1, second: "one" }
function merge1(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var obj1 = { name: "Alice", age: 30 };
var obj2 = { name: "Bob", age: 25 };
var mergedObj = merge1(obj1, obj2);
console.log(mergedObj); // { name: "Bob", age: 25 }
//GENERIC CONSTRAINTS
//function functionName<T extends SomeType>(arg: T): T { ... }
function getLonger(obj1, obj2) {
    return obj1.length > obj2.length ? obj1 : obj2;
}
var obj4 = { name: "Alice", length: 5 };
var obj5 = { name: "Bob", length: 10 };
var result = getLonger(obj4, obj5);
console.log(result); // { name: "Bob", length: 10 }
/*
function functionName<T = DefaultType>(arg: T): T {
  return arg;
}


*/
function echo(value) {
    return value;
}
console.log(echo("Hello")); // Output: "Hello" (T inferred as string)
console.log(echo(123)); // Output: 123 (T inferred as number
var stringContainer = {
    item: "Generics in TypeScript",
    getItem: function () {
        return this.item;
    }
};
var booleanContainer = {
    item: true,
    getItem: function () {
        return this.item;
    }
};
//CONDITIONAL TYPES IN GENERICS
function identity(value) {
    if (typeof value === "string") {
        return value; // cast to match the expected return type
    }
    else {
        return 42; // cast to match the expected return type
    }
}
var result1 = identity("Hello"); // string
var result2 = identity(123); // number
console.log(result1); // "Hello"
console.log(result2); // 42
//# sourceMappingURL=classes.js.map