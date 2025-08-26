let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23);//Year,Month(months start from 0 in JavaScript),Day
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("2023-01-23");//Year,Month,Day
let myCreatedDate2 = new Date("01-23-2023");//Day,Month,Year
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());



let myTimeStamp = Date.now();
console.log(myTimeStamp);//in miliseconds starting from january 1st 1970
console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

myDate.toLocaleString('default', {
    weekday: "long",
    //etc etc 
})

