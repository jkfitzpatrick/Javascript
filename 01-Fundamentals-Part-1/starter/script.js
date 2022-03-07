/*
let js = "amazing";
console.log (40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
let firstName = "Jonas";
console.log(firstName);
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof "Jonas");

// javascriptIsFun = "Yes!";
// console.log(typeof javascriptIsFun)

// let year;
// console.log(typeof year);

// let age = 30;  //declare variables that can change later using let
// age = 31

// const birthYear = 1991;
// // birthYear = 1990;

// var job = "programmer";
// job = "teacher"

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah =  now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas/2, 2**3);
// // 2**3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName+ " " + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// console.log(x);

// //Comparison oerators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah)/2
// console.log(averageAge);

////////////////////////////////////////////////////
// Coding Challenege #1

/*
Mark and John are trying to compare the BMI (Body Mass Index), which 
is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variable
2. Calculate both their BMIs using the formula (you can even implement
    both versions)
3. Create a boolean veriable 'markHigherBMI' containing information aboiut
whether Mark has a bigher BMI than John.

TEST DATA !: Marks weights 78 kg and is 1.69 m tall.
John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Mark weighs 95 kg and is 1.88 m tall.
John weighs 85 kg and is 1.76 m tall.
*/

// const markHeight = 1.69;
// const markWeight = 78;
// const jamesHeight = 1.95;
// const jamesWeight = 92;
// console.log( markHeight, markWeight, jamesHeight, jamesWeight);

// const markBMI = markWeight / markHeight **2;
// console.log ("Mark's BMI: " + markBMI);
// const jamesBMI = jamesWeight /jamesHeight ** 2;
// console.log ("James' BMI: " + jamesBMI);

// const markHigherBMI = markBMI > jamesBMI;
// console.log("Is Mark's BMI Higher?  " + markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year-old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year-birthYear} year-old ${job}!`
// console.log(jonasNew);

// console.log('String with \n \multiple \n\ lines');

// console.log(`String with
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving license 😁');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah has to wait ${yearsLeft} years to start her license 🤦‍♂️`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

//type coercion
// console.log("I am " + 23 +" years old")

//Falsy value -> values that aren't false but will become false when we
//convert them to a boolean -> o, '', undefined, null, NaN
//
//truthy value -> values that aren't true but will become true when we
//convert them to a boolean -> String that is not blank, values that aren't null

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ❤");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if(height){
//     console.log("YAY! Height is defined!");
// } else {
//     console.log("Height is undefined");
// }

//Strict equal is the === and it does not perform type coercion
// const age = '18';
// if(age === 18) console.log("You just became an adult!");

// //Loose equality operator is == and it does perform type coercion
// if (age == 18) console.log("you just became an adult");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 23){
//     console.log("Cool, 23 is an amazing number!");
// } else if(favorite === 7){
//     console.log("7 is also a cool number");
// } else{
//     console.log("Your number is stupid!");
// }

// if (favorite !== 23){
//     console.log("Why not 23?");
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

//  const shouldDrive = hasDriversLicense && hasGoodVision;
//  if (hasDriversLicense && shouldDrive) console.log("Sarah is able to drive");
//  else console.log("someone else should drive");

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive");
// }

//Switch Statement
// const day = "Monday";

// switch(day){
//     case "Monday":
//         console.log("Plan course structure");
//         console.log("Go to coding meeting");
//         break;
//     case "Tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "Wednesday":
//     case "Thursday" :
//         console.log("Write code examples");
//         break;
//     case "Friday":
//         console.log("Record videos");
//         break;
//     case "Saturday":
//         console.log("Enjoy the Weekend!");
//         break;
//     default:
//         console.log("Not a valid day");

// }

//Ternary Operator

const age = 23;
// age >= 18 ? console.log("I like to drink wine 😜") : console.log("I like to drink water 😜")

const drink = age > +18 ? 'wine 🍷' : 'water 💦';
console.log(drink);

//The old way without the ternary oeprator
let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💦';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);
