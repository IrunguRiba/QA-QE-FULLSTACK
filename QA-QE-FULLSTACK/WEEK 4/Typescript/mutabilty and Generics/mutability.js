"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//NOTES
console.log("Hello");
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
var str = "hello";
str.toUpperCase();
console.log(str); // OUTPUT = hello
var array = [1, 2, 3, 5, 67, 8, 8];
array.push(6);
console.log(array); //prints the 6 added...this is mutability
var obj = { name: "Alice", age: 45 };
obj.age = 67;
console.log(obj);
var user = { name: "Joel", age: 21 };
user.age = 34;
console.log(user);
//We can also say
var readOnlyObj = { name: "Joel", age: 25 };
console.log(readOnlyObj);
function identity(value) {
    return value;
}
console.log(identity("Hello")); // Correct usage
console.log(identity(23)); // Correct usage
console.log(identity({ name: "Hello", age: 34 })); // Corrected object type usage
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2); // Merge the two objects
}
var mergedObject = merge({ name: "Alice" }, { age: 30 });
console.log(mergedObject); // { name: "Alice", age: 30 }
//Array in TS
var fruits = ["IRUNGU", "JOEL", "RIBA"];
console.log(fruits);
fruits.push("VIVIAN", "SHARON");
console.log(fruits);
//
// PROMISES IN TS
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve("Hello, world!");
                    }, 10);
                })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
// Function that returns a Promise<UserType>
var fetchUserData = function () {
    return new Promise(function (resolve, reject) {
        // Simulate asynchronous behavior (e.g., fetching data)
        setTimeout(function () {
            var user = {
                name1: "Joel",
                age: 23,
                location: "233rdfg"
            };
            resolve(user); // Resolving the promise with user data
        }, 1000); // Simulate 1 second delay
    });
};
// Example usage:
fetchUserData()
    .then(function (user) {
    console.log(user); // Logs the user data
})
    .catch(function (error) {
    console.error("Error fetching user data:", error);
});
//Using Await
var fetchUserDataAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve({
                            name1: "Joel",
                            age: 23,
                            location: "233rdfg"
                        });
                    }, 10);
                })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
// Example usage with async/await
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetchUserDataAsync()];
            case 1:
                user_1 = _a.sent();
                console.log(user_1); // Logs the user data
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Error fetching user data:", error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
getUser();
//Sets in TS
//A set is a collectin of unique values
var mySet = new Set([1, 2, 3, 5, 5, 6, 7, 4]);
mySet.add(4657);
console.log(mySet);
var emptySet = new Set();
emptySet.add('Hello');
console.log(emptySet);
//Types Assertion and Casing
//Using as syntax
//Using angle bracket syntax
//
//AS SYNTAX
var jsonString = "{\"name\": \"Joel\"}";
var parseData = JSON.parse(jsonString);
console.log(parseData);
//Default parameters
var greet = function (name, greetings) {
    if (greetings === void 0) { greetings = "Hello"; }
    console.log("".concat(greetings, " ").concat(name));
};
greet("Bob");
greet("Joel", "How are you");
//rest parameter
var sum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, next) { return prev + next; }, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
var logMsg = function (message) {
    console.log(message); // log the message to the console
};
logMsg("Hello");
var modifyButtons = function (attributes) {
};
var buttonsToChange = [
    {
        type: "button",
    },
    {
        type: "submit",
    },
];
modifyButtons(buttonsToChange);
//EXERCISE 2
function printNames(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
    // No need for @ts-expect-error
    names.push("Joel");
    // No need for @ts-expect-error
    names[0] = "Becky";
}
printNames(["Alice", "Bob"]);
function person1(person) {
    return { name: person.name, age: person.age, location: person.location };
}
console.log(person1({ name: "Joel", age: 23, location: 254 }));
//# sourceMappingURL=mutability.js.map