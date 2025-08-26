const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));// The number inside bracket indicates how many decimal places to consider

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));// The number inside bracket indicates how many digits to consider in the whole number!

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); //Adds commas according to Indian standard

// console.log(Math.abs(-5));
// console.log(Math.round(123.67));
// console.log(Math.ceil(123.67));
// console.log(Math.floor(123.67));

console.log(Math.random());//values between 0 and 1

//normally values range from 0 to 1. By multiplying it by 10 we ensure to get values starting from 0 onwards. But we do not want 0. Hence we add a 1 at the end!
console.log((Math.random() * 10) + 1);

//now, if we are given a range between max and min. Use this --->
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);