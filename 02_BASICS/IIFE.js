//Immediately Invoked Function Expressions

//named IIFE
(function IIFEFunction() {
    console.log("DB Connected");
})();//this semicolon is mandatory. Otherwise next part wont be executed

//unnamed IIFE
(() => {
    console.log("DB Connected 2");
})();

((username) => {
    console.log(`Hey! ${username}`)
})("Debottam");

((num1, num2, username) => {
    result = num1 + num2;
    console.log(`Hey! ${username}, the sum is ${result}`)
})(2, 4, "Debottam");


//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values(the tricky ones)
//"0","false"," ",[],{},function(){}

//Nullish Coalescing Operator (??)
let val1 = 5 ?? 10;//5
let val2 = null ?? 10;//10
let val3 = undefined ?? 15;//15

console.log(val1, val2, val3);