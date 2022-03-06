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

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 😁');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah has to wait ${yearsLeft} years to start her license 🤦‍♂️`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
