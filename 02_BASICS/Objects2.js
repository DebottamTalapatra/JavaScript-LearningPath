//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Debottam",
            lastname:"Talapatra"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
};
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = Object.assign({}, obj1, obj2);//{} is the target object. initially an empty one. The code basically says to combine object 1 and 2 into a single object and store the result in an initially empty object

//or,
const obj4 = { ...obj1, ...obj2 };

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

const course = {
    coursename: "ReactJs",
    price: 999,
    courseInstructor: "Debottam"
}

//destruturing
const { courseInstructor:instructor } = course;
//now we do not have to write course.courseInstructor to access the value. We have destructured it from course object and will now call it instructor directly

console.log(instructor);

