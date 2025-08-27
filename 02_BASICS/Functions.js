function addTwoNumbers(number1,number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log(result);


function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

function loginUserMessageWithDefaultName(username="default user") {
    return `${username} just logged in`;
}

console.log(loginUserMessage("Debottam Talapatra"));
console.log(loginUserMessageWithDefaultName("Debottam Talapatra"));
console.log(loginUserMessageWithDefaultName());


//variable arguments in function(rest operator)
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200, 300));
console.log(calculateCartPrice(200, 300, 500));


console.log(addOne(3));
function addOne(num) {
    return num + 1;
}//when we declare functions like this then we can call the function before the function declaration


const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(3));//when we declare functions like this(an expression), then we can not call the function before the function declaration