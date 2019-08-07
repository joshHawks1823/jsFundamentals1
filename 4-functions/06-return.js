// Return

// let hi = () => {
//   return "hi";
// };

// let newName = hi();

// console.log(newName);

// let capitalizeName = name => {
//   let capName = "";
//   for (let letter in name) {
//     if (letter == 0) {
//       capName += name[letter].toUpperCase();
//     } else {
//       capName += name[letter].toLowerCase();
//     }
//   }
//   return capName;
// };

// const myName = capitalizeName("Josh");
// console.log(myName + " how are you doing?");

// let tipCalculator = totalPrice => {
//   let billInput = "";
// };

let tipCalc = price => {
  let tipPercent = 0.2;
  let tip = price * tipPercent;
  return tip;
};

let tipDinner = tipCalc(50);
console.log(tipDinner);
