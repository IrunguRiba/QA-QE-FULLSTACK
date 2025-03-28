import { expect } from '@jest/globals';

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var processCart = function (cart) {
    // Do something with the cart in here
};
processCart({
    userId: "user123",
    items: ["item1", "item2", "item3"],
    //Object literal may only specify known properties, and 'items' does not exist in type 'ShoppingCart'.
});
console.log(processCart);
var processRecipe = function (recipe) {
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
var person1 = {
    name: "Joel",
    age: 30
};
console.log(person1);
var manager = {
    name: "Joel",
    id: 123445, // id should be a number, not a string
    department: "HR",
};
console.log(manager);
// Implementing the interface with the Dog class
var Dog = /** @class */ (function () {
    function Dog(name, sound, price) {
        this.name = name;
        this.sound = sound;
        this.price = price;
    }
    return Dog;
}());
// Creating an instance of the Dog class
var myDog = new Dog("GERMAN SHEPHERD", "Barks", 1234);
console.log(myDog);
//CREATING DYNAMIC KEYS WITH INDEX SIGNATURES
//const syntax:{[key:string]:string}
var dynamicKeyShape = {};
dynamicKeyShape["name"] = "joel";
dynamicKeyShape["age"] = "20";
console.log(dynamicKeyShape);
var user1 = {
    id: 1,
    name: "joel"
};
//No error because typescript is powerful to the minimal
console.log(user1);
var user2 = {
    id: 34,
    number: 1234,
    name: "Joel"
};
console.log(user2);
var requiredperson = {
    name: "Joel",
    age: 23
};
console.log(requiredperson);
var withoutLocation = {
    name: "Joel",
    age: 23
};
console.log(withoutLocation);
var person4 = {
    age: 23,
    name: "joel"
};
console.log(person4);
//Type Assertion and Casting
var someValue = "hello Ts";
var strLength = someValue.length;
console.log(strLength);
var fullName = {
    name: "Joel",
    age: 23
};
console.log(fullName);
/*
UNIONS
Allow a variable to hold values of multiple types while ensuring type safety




*/
var value;
value = "Hello";
value = 78;
//Declaring Union Types using | symbol
var logId = function (id) {
    console.log(id);
};
logId("1234erty");
var userId = "ERYRURI23445";
var orderId = 1234;
console.log(userId, orderId);
var move = "up"; // Valid
var move2 = "left"; // Valid
var move3 = "forward"; // Error: Type '"forward"' is not assignable to type 'Direction'.
function smsServices(transState) {
    if (transState === "Success") { // Match the casing exactly
        return "Success";
    }
    else {
        return "Failed";
    }
}
// Test the function
console.log(smsServices("Success")); // Valid
console.log(smsServices("Failed")); // Valid
console.log(smsServices("Pending")); // Valid
// Using AlbumFormat to type a variable
var myAlbumFormat = "mp3"; // Valid
var myAlbumFormat1 = "CD";
var myAlbumFormat2 = "mp3";
var myAlbumFormat3 = "LP";
var myAlbumFormat4 = "Cassette"; // Valid
console.log(myAlbumFormat + " " + myAlbumFormat1 + " " + myAlbumFormat2 + "" + myAlbumFormat3 + "" + myAlbumFormat4); // Output: "CD"
// Invalid example (will cause a type error)
// myAlbumFormat = "mp4";  // Error: Type '"mp
//Narrowing Union Types
var printValue = function (value) {
    if (typeof value === 'string') { // Correct `typeof` usage
        console.log(value.toUpperCase()); // Call `toUpperCase()` with parentheses
    }
    else {
        console.log(value.toFixed(2)); // Call `toFixed(2)` correctly
    }
};
// Test the function
printValue("hello"); // Output: HELLO
printValue(123.456); // Output: 123.46
function area(shape) {
    if ("radius" in shape) {
        // Inside this block, TypeScript knows `shape` is a `Circle`
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        // Inside this block, TypeScript knows `shape` is a `Square`
        return Math.pow(shape.side, 2);
    }
}
var circle = { kind: "circle", radius: 5 };
var square = { kind: "square", side: 4 };
console.log(area(circle)); // Logs: 78.53981633974483 (Circle area)
console.log(area(square)); // Logs: 16 (Square area)
function handleAPIResponse(response) {
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
var successResponse = { status: "success", data: "Some data" };
var errorResponse = { status: "error", message: "Something went wrong" };
var loadingResponse = { status: "loading", progress: 50 };
handleAPIResponse(successResponse); // Logs: Data received: Some data
handleAPIResponse(errorResponse); // Logs: Error occurred: Something went wrong
handleAPIResponse(loadingResponse); // Logs: Loading... Progress: 50 %
function describePet(pet) {
    switch (pet.kind) {
        case "dog":
            console.log("This is a ".concat(pet.breed, " dog named ").concat(pet.name));
            break;
        case "cat":
            console.log("This is a ".concat(pet.color, " cat named ").concat(pet.name));
            break;
        default:
            throw new Error("Unknown pet type");
    }
}
var cat = { kind: "cat", name: "Fluffy", color: "white" }; // Logs: This is a German Shepherd dog named Rex
describePet(cat); // Logs: This is a white cat named Fluffy
var getVehicleInfo = function (vehicle) {
    if (vehicle.type === "Car") {
        // TypeScript knows 'vehicle' is a Car here
        console.log("This is a Car with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
    else if (vehicle.type === "Bike") {
        // TypeScript knows 'vehicle' is a Bike here
        console.log("This is a Bike with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
    else {
        console.log("Unknown vehicle type");
    }
};
// Example usage:
var car = { type: "Car", wheels: 4, gears: "5V" };
var bike = { type: "Bike", wheels: 2, gears: "5V" };
getVehicleInfo(car); // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike); // Output: This is a Bike with 5V gears and 2 wheels.
// Custom Type Guard to check if the vehicle is a Car
function isCar(vehicle) {
    return vehicle.type === "Car";
}
// Custom Type Guard to check if the vehicle is a Bike
function isBike(vehicle) {
    return vehicle.type === "Bike";
}
var getVehicleInfo1 = function (vehicle) {
    if (isCar(vehicle)) {
        // TypeScript knows that 'vehicle' is a 'Car' here
        console.log("This is a Car with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
    else if (isBike(vehicle)) {
        // TypeScript knows that 'vehicle' is a 'Bike' here
        console.log("This is a Bike with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
    else {
        console.log("Unknown vehicle type");
    }
};
// Example usage:
var car1 = { type: "Car", wheels: 4, gears: "5V" };
var bike1 = { type: "Bike", wheels: 2, gears: "5V" };
getVehicleInfo(car); // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike); // Output: This is a Bike with 5V gears and 2 wheels.
//instance of
var Car4 = /** @class */ (function () {
    function Car4() {
        this.type = "Car";
        this.wheels = 4;
        this.gears = "5V";
    }
    return Car4;
}());
var Bike4 = /** @class */ (function () {
    function Bike4() {
        this.type = "Bike";
        this.wheels = 2;
        this.gears = "5V";
    }
    return Bike4;
}());
var getVehicleInfo2 = function (vehicle) {
    if (vehicle instanceof Car4) {
        // TypeScript knows that 'vehicle' is a 'Car' here
        console.log("This is a Car with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
    else if (vehicle instanceof Bike4) {
        // TypeScript knows that 'vehicle' is a 'Bike' here
        console.log("This is a Bike with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
    else {
        console.log("Unknown vehicle type");
    }
};
// Example usage:
var car4 = new Car4();
var bike4 = new Bike4();
getVehicleInfo(car); // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike);
var isCar1 = function (vehicle) { return "wheels" in vehicle && vehicle.wheels === 4; };
var getVehicleInfo3 = function (vehicle) {
    if (isCar(vehicle)) {
        console.log("This is a Car with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
    else {
        console.log("This is a Bike with ".concat(vehicle.gears, " gears and ").concat(vehicle.wheels, " wheels."));
    }
};
// Example usage:
var car5 = { type: "Car", wheels: 4, gears: "5V" };
var bike5 = { type: "Bike", wheels: 2, gears: "5V" };
getVehicleInfo(car); // Output: This is a Car with 5V gears and 4 wheels.
getVehicleInfo(bike); // Output: This is a Bike with 5V gears and 2 wheels.
//EXERCISE 1
function getUsername(username) {
    if (username === null) {
        return null;
    }
    return username;
}
var result = getUsername('Alice');
//type test = Expect<Equal<typeof result, string |null>>
var result2 = getUsername(null);
//Argument of type 'null' is not assignable to parameter of type 'string'.
//type test2 = Expect<Equal<typeof result2, string>>
//Exercise 2
function move1(direction, distance) {
}
move1(
// @ts-expect-error - "up-right" is not a valid direction
//Unused '@ts-expect-error' directive.
'up-right', 10);
move1(
// @ts-expect-error - "down-left" is not a valid direction
//Unused '@ts-expect-error' directive.
'down-left', 20);
//
//Exercise
