//object literals

const mysym = Symbol("key1");

const JsUser = {
    name: "Debottam",
    "full name": "Debottam Talapatra",
    [mysym]:"mykey",
    age: 21,
    location: "Naihati",
    email: "debottam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
};
console.log(JsUser.email);
console.log(JsUser.age);
console.log(JsUser["full name"]);//no other way to access it!
console.log(JsUser[mysym]);//no other way to access the symbol


JsUser.greetings = function () {
    console.log("Hello user!");
}
JsUser.greetingsTwo = function () {
    console.log(`Hello, JS user ${this["full name"]}`);
}

console.log(JsUser.greetings); //a reference of the function is returned
console.log(JsUser.greetings());//actual function being called

console.log(JsUser.greetingsTwo());

// JsUser.email = "debottam@google.com";
// console.log(JsUser["email"]);

// Object.freeze(JsUser);//no more changes could be done to the object!

// JsUser.email = "debottam@microsoft.com";
// console.log(JsUser["email"]);