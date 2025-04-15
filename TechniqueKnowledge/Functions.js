/*
It's so great that we have started embark on a more intermediate level of JS
Functions !
And functions are actually manifold in types in JS.
Functions are blocks of code useful for re-using code, increasing readability, maintainability and deconstructing
Functions can return values, if not -> they return undefined instead !
Functions can have parameters, if not -> they still execute !
We have:
+ Named function;
+ Anonymous function;
+ Arrow function;
+ Immediate Function;

Also, you need to know what hoisting is in JS ! (might delve deeper in another session)
Hoisting is the declarations of variables and functions are "hoisted" !
Moved to the top of their scope (global, function) - during compilation phase !
Which mean that they're immediately declared and known within the scope during compilation.
Knowing what to be hoisted is also important !
hoisted: var keyword, functions definition !
not hoisted: let, const keyword, function expressions...

 */

console.log('Start the lecture...');

// Named functions are functions WITH a name.
function add(x,y){
    return `total of ${x} and ${y} is ${x+y}`; // this function returns something !
}

// Anonymous functions are called function expressions.
const hello = function (name){
    return `Hello ${name}`;
}
// Arrow functions are anonymous functions but more concise and differ in ways of "this" binding
const multiply = (a,b) => {return a * b;};
const squared = (a) => a*a; // this looks like functions in a functional model ! :(((

function main(){ // this is a function without a name or a value returned
    add(1,2); // for example !
    let greet = hello("Nguyen Anh Nhat");
    console.log(greet);
    let mul = multiply(5, 3);
    console.log(mul);
    console.log(squared(4));
    console.log(Math.random())
}

main();
