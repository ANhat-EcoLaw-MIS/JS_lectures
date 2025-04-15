/*
Basic syntax notes - ; | case-sensitive | whitespaces ignored | curly spaces

Data types: JS is dynamically typed language
+ Primitive types: number, string, boolean, null, undefined, symbol.
+ Complex - non-primitive type: object.
 */

/* Primitive types can be understood as the value itself, not a reference to a value
There are a few common properties of primitive types:
+ Immutable
+ Fixed size (in memory)
+ Built-in
*/

let str = "String";
let number = 127383999932; // Number
let numberNan=NaN;
let numberInfinity = Infinity;
let Bool = true;

// Null - Undefined
let nothing = null;
let have_not_declared = undefined;

function differences(){
    /*
    Both represent the absence of a meaningful value. But they are different !

    Undefined: uninitialized ! Unintentional
    Null: Explicitly programmed !
     */
    console.log(typeof null); // returns an object (object - historical bug)
    console.log(typeof undefined);
    /*
    Use cases: Best Practices:
    Use "undefined" to indicate a variable that hasn't been initialized yet !
    Use "null" to explicitly signify that a value has gone absent - null.
     */
}

