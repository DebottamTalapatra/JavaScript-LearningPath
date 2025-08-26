let score = "33";
console.log(typeof score);//string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number

let score1 = "123abc";
console.log(typeof score1);//string

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);//number!!

//BUT---->
console.log(valueInNumber1);//even though this yields NaN, still its typeof function returns number as its data type. BEWARE!

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN

//Just like Number(), we also have String() and Boolean() functions!

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);//true

//1 => true; 0 => false
//"" => false
//"hello world" => true