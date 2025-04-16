/*
In this section we'll learn about arrays in JS ! :((
The project for practicing is a to-do list.
 */

// array is a collection of values - which are first-class entiites.

const myArr = [1,2,3,
    [1,23,56],
    {
        first: "Loving me",
        method: function (){
            console.log('hello world');
        }
    }
    ]; // to demonstrate how complex an array can be !

// Need to remember copy by reference - copy by value !

console.log(myArr[4]); // Indexing...
console.log(myArr.length); // length of the array.
myArr.push(5); // Added a value
console.log(myArr);
console.log(myArr.at(-1));

myArr2=[1,2,3,4,5]
console.log(myArr2.every((e) => (typeof e === 'number'))); // kinda like all in Python | we have .some -> any in Python
console.log(myArr.findIndex((e) => !Array.isArray(e) && (typeof e === 'object')));

myArr.entries().forEach(e=> (
    console.log(typeof e[1] === 'object' && !Array.isArray(e[1]))
));

myArr.entries().forEach(e=> (
    console.log(typeof e[1] === 'object' && !Array.isArray(e[1]))
));

// every | some
// findIndex
// for Each
// splice...