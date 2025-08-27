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
})(2,4,"Debottam");