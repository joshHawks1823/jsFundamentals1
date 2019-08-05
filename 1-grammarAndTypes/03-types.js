// Boolean

let i = true;

let j = false;

let on = true;
let off = false;

console.log(on, off);

// Null
// Null = empty value; not 0, not undefined

let empty = null;
console.log(empty);

//undefined
// undefined = no value assigned

let undef = undefined;
console.log(undef);

// Numbers

let degrees = 90;
console.log(degrees);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// Strings
let stringOne = "double quotes";
let stringTwo = "single quotes";
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = "1050" + "100";

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

// Objects

let car = {
  color: "red",
  tires: 4,
  extras: "Ac and Radio",
  cool: true
};
console.log(car);
console.log(car.tires);

// Arrays
let list = ["item1", "item2", "item3"];

let burritos = ["large", 4, true];
console.log(burritos);

console.log(typeof burritos);

// Addition vs. Concatentation

let third = 1050 + "100";
console.log(third);

// Challenge

let firstName = "Josh";
let lastName = "Hawkins";
let houseNumber = "31";
let street = "Manchester Ct";
let city = "Carmel";
let state = "Indiana";
let zipcode = "46032";

console.log(
  "Hi my name is " +
    firstName +
    " " +
    lastName +
    " and I live at " +
    houseNumber +
    " " +
    street,
  city + ", " + state,
  zipcode + "."
);

// Strings - Properties

let myName = "Josh";
console.log(myName.length);

// Methods
let myNameIs = "Josh";
console.log(myNameIs.toUpperCase());
console.log(myNameIs.toLocaleLowerCase());

let home = "My home is Indianapolis";
console.log(home.includes("Indianapolis"));

// Challenge

let sent = "This sentence will be split into individual parts";

console.log(sent.split(" "));
