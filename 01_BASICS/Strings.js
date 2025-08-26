const name = "Debottam";
const deptName = "Information Technology";

//String interpolation
console.log(`Hello! I am ${name} from the ${deptName} department of NSEC`);

const gameName = new String('Debottam');

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

//in slice we can use negative values too. But if we use negatives in substring, javascript just ignores that andtkes that as 0
const anotherString = gameName.slice(-6, 4);
console.log(anotherString);


const url = "https://debottam.com/debottam%20talapatra";
console.log(url.replace('%20', '-'));
console.log(url.includes('debottam'));

console.log(gameName.split('-'));