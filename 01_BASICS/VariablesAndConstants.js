console.log("Hello Debottam!");

const accountId = 144553; //THIS CAN NOT BE CHANGED! THEREBY CONST

let accountEmail = "debottam@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi"; //This is possible but not good syntax.
let accountState;//Not initialised. Hence when printed, says "undefined"

/*
Perfer not to use var 
Because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);