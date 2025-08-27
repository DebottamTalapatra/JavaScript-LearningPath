const user = {
    username: "Debottam",
    price : 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website!`);
        // console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sammy";
user.welcomeMessage();

console.log(this);//if we run this in node environment(here), we get an empty object {}. But if we run this in the dev tools of browser, we get window object

const helloWorldPrinter = () => {
    console.log("Hello World!");
}
helloWorldPrinter();

//implicit return
const addTwoNums = (num1, num2) => num1 + num2;
console.log(addTwoNums(2, 8));

//using {}, so return keyword is mandatory/Explicit return
const func1 = (num1, num2) => {
    return num1 * num2;
}

//using (), so return keyword is not needed
const func2 = (num1, num2) => (num1 * num2)


console.log(func1(2, 3));
console.log(func2(2, 3));