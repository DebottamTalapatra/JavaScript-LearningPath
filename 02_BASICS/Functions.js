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
console.log(calculateCartPrice(200,300,500));