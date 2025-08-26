const marvel_heroes = ["Spiderman", "Ironmn", "Captain America"];
const dc_heroes = ["Batman", "Superman", "Flash"];

const combined_array = marvel_heroes.concat(dc_heroes);
console.log(combined_array);
//or
const combined_array2 = [...marvel_heroes, ...dc_heroes];//spread function
console.log(combined_array2);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_array = another_array.flat(Infinity);//inside bracket we mention the depth..here we take infinity
console.log(real_array);


console.log(Array.isArray("Debottam"));//false
console.log(Array.from("Debottam"));//['D', 'e', 'b','o', 't', 't', 'a', 'm']
console.log(Array.from({ name: "Debottam" }));//[] can't form an array hence returns empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));