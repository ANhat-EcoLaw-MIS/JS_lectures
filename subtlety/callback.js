// callback functions are very helpful when it comes to handling arrays and stuff...

// Callbacks are functions that take functions as an input and execute them

function greet(name, callback){
    if (typeof(callback) !== 'function'){
        console.log(typeof callback);
        return null;
    }
    console.log(`Hello ${name}!`);
    callback();
}

const goodMorning = () => console.log('good morning !'); // this arrow function can be passed as arguments.

// greet('Nguyen Anh Nhat', goodMorning());

/*
 The thing happens above snippet is the fact that you call immediately the goodMorning one
 -> but the function itself does not return any value -> the value is defaulted to undefined !
 If you were to remove the null check -> the 'undefined' returned shall get 'called' -> which raises an error.
 */

greet('Nguyen Anh Nhat', goodMorning);

// Callbacks are proved useful when dealing with things like arrays.

// Built-ins params for a callback function in a forEach method.

function forEachLoop_ArrowFunction() {
    // deprived of 'MoreOnLoops.js' file.
    const arr = [1, 2, 3, 4, 5];
    arr.forEach((e, index, array) => {
        array[index] = e + 1;
    })
    console.log(arr);
    // looking at the forEach method, it TAKES A FUNCTION (IN THIS CASE AN ARROW FUNCTION);
    // the parameters are built-in for the function.
}
forEachLoop_ArrowFunction();

// There are also methods in arrays.
function reduceMethodOnArray(){
    const arr = [1, 2, 3, 4, 5];
    let a = arr.reduce((a, b) => a + b, 2); // to examine this is a callback function !
    console.log(a); // this does something... HUHU, I don't know !
}
reduceMethodOnArray();

function filterMethodOnArray(){
    const arr = [1, 2, 3, 4, 5];
    let returned = arr.filter((number) => number%2 === 0);
    console.log(returned);
}
filterMethodOnArray();