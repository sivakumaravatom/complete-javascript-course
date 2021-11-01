/* let js = 'amazing';
console.log(40 + 8 + 23 - 12);

console.log('Houshika');
console.log(23);*/
/*
let firstName = "Houshika"
let lastName = "Sivakumar"
*/
/*
console.log(firstName + ' ' + lastName + ' is ' + js);
console.log(firstName);

// Comment Data
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Houshika');
// console.log(typeof "Houshika");

javascriptIsFun = "YES!";

console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null); */
/*
const now = 2021
let ageHoushika = now - 2000;
let ageSiva = now - 1981;


console.log("Age of Houshika is : " + ageHoushika);
console.log("Age of Siva is : " + ageSiva);
console.log("Age of Siva is : " + ageSiva + " and", "Age of Houshika is : " + ageHoushika);

console.log(ageSiva * 2, ageSiva / 10, ageSiva ** 3)

if (ageHoushika < ageSiva) {
    console.log("Siva is Senior")

} else {
    console.log("Houshika is Senior")

};

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 ===> 15 + 10 ===> 25
x *= 2;
x++;
x++;
x--;
x--;
console.log(x);

//comparision Operators

console.log(ageHoushika >= 10);

const isFullAge = ageSiva >= 100;

console.log(now - 2011 > now - 2021);

ageHoushika = now - 2020;
ageSiva = now - 1981;

console.log(now - 2011 > now - 2021);

let age = ageHoushika;
console.log(age);
let eligibilityAge = 12;
let isOldEnough = age >= eligibilityAge;
let eligibilityGap;
if (isOldEnough) {
    eligibilityGap = age - eligibilityAge;
    const studentStatement = "I'm " + firstName + ', a ' + ageHoushika + ' year old student';
    console.log(studentStatement);
    console.log("Houshika is eligible for driving cycle. " + "She got eligibilty " + eligibilityGap + " year ago");

}
else {
    eligibilityGap = eligibilityAge - age;
    const studentStatement = "I'm " + firstName + ', a ' + ageHoushika + ' year old student';
    console.log(studentStatement);
    console.log("Houshika is not eligible yet for driving." + "She needs still " + eligibilityGap + " years for eligibility");

}

*/

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2021;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);