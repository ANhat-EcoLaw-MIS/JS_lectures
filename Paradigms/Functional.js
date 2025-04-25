// the most important aspect of writing functional code is to leverage 'functions'
// - which in this case refer to a much broader sense - to minimize side effects.
// In this section, we'll discuss four concepts of functional paradigm.

//I. Pure functions:
// Functions can be divided into two categories:
// + Pure functions → the output stays the same no matter what, causing no side effects.
// + Impure function → modifies the external source.
function pureFunction(){
    // Impure functions.
    let counter=0;
    function impurity_Increment(incrementBy){
        counter +=incrementBy; // this modifies the global object.
        return counter; // the result is not deterministic.
    }
    impurity_Increment(3);

    // Pure functions
    function addTogether(a=0,b=0){
        return a + b; // always return a + b no matter what! Deterministic and not Contaminating.
    }
    let total = addTogether(3, 5);

    console.log(counter);
    console.log(total);
}

// II. Immutability:
// Data structures when defined are not mutable.
// This enables a lot of safety.
function Immutability(){

    // Mutable approach
    const arr = [1,2,3];
    arr.push(5);
    console.log(arr);

    // Immutable approach.
    const originalArr = [1,2,3];
    const newArr = [...originalArr, 4, 5]; // creates a new array and adding elements.

    console.log(newArr);
    console.log(arr);
}

// First-class citizens and HOF are actually discussed thoroughly in past sections.

// We'll talk a bit more the high-order functions that are technically decorators.
// A function that can take a function as an input then return a function as the result.
function HOF(){
    const numbers = [1,2,3];
    const doubledNumbers = numbers.map( // the Higher Order function here
        function(value){ // call another function.
            return value *2;
        }
    ); // this is functional as it does not modify the original source.
    // return doubledNumbers;

    if (doubledNumbers){ // this is just redundant logic.
        return numbers.map((value)=>value*2);
    }
}
console.log(HOF());

// The last to understand is that, functions in JS are all value in essence,
// which enables you to composition upon function.

const add = (a, b) => a + b;
const multiplyBy2 = (a) => a * 2;

const myNewTotal = (x,y) => multiplyBy2(add(x,y));

console.log(myNewTotal(2,3));