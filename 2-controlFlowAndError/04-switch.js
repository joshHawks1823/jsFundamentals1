// Switch

let friend = "Bob";

switch (friend) {
  case "Autumn":
    console.log("Hey Autumn, when are we going rock wall climbing?");
    break;
  case "Dave":
    console.log("Hey Dave, how is Cooper?");
    break;

  case "Alex":
    console.log("Hey Alex, when are we playing DnD?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let dessert = "cookies";

switch (dessert) {
  case "pie":
    console.log("Pie, pie, me oh my!");
    break;
  case "cake":
    console.log("Cake is great");
    break;
  case "ice cream":
    console.log("I scream for ice cream");
    break;
  default:
    console.log(`I'm sorry, ${dessert} are not on the menu.`);
}

let age = 32;

switch (true) {
  case age >= 25:
    console.log("Yay, you can rent a car!");
    break;
  case age >= 21:
    console.log("Yay you can drink!");
    break;
  case age >= 18:
    console.log("I scream for ice cream");
    break;
  default:
    console.log("I'm sorry you're to young to do anything! ");
}
