//mixed data types allowed. Resizing allowed.


//shallow copy --> copies share  the same reference points
//deep copy --> copies share separate reference points

//Arrays use shallow copy. So any change in its copy will be reflected in the original array in memory as well

const myArr = [3, 2, 5, 4, 6, 3];
const newArr = new Array(2, 3, 5, 1, 3);

console.log(newArr);
newArr.push(4);//adds an element at the end of the array
console.log(newArr);
newArr.pop();//removes an element from the end of an array
console.log(newArr);

myArr.unshift(9);//adds an element at the start of the array
console.log(myArr);

console.log(myArr.includes(2));
console.log(myArr.indexOf(2));

//slice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);//does not include the 3rd index
console.log(myn1);
console.log("B", myArr);

//splice
console.log("A", myArr);
const myn2 = myArr.splice(1, 3);//includes the 3rd index too
console.log(myn2);
console.log("B", myArr);

//slice --> Does not hamper the original array
//splice --> Does hamper the original array
