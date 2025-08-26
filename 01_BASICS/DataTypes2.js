/*
JAVASCRIPT is a Dynamically typed Language. Data type need not be declared explicitly at the time of variable creation
*/

// Primitive Data Types---CALL BY VALUE. A copy of the actual data from memory is given.
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);//false. each is handled uniquely!

// Reference Data Types --- CALL BY REFERENCE. The address of the memory occupied by the data is provided.
//Array, Objects, Functions