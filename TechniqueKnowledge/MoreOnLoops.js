// loops in JavaScript - We actually examined this previously but to further extend the knowledge !

function for_loop(){
    // for loop syntax: for (initialization; condition; increment/decrement){...}
    for (let i = 0; i <= 10; i++){
        console.log('this is the normal for loop for the', i, 'time');
    }
}

// for...in and for...of are also loops
// in -> mostly used to iterate over objects' props and the INDEX, ORDER OF ITERATION (with primitives)...
// of -> mostly used for iterable as it remembers the value.
function for_in(){
    // for...in -> iterate over the enumerable properties of an object. (obj is not an iterable itself);
    let obj1 = {
        id: 1,
        name: 'Joshua',
        city: 'New York',
        arr: [1, 2, 3]
    };

    for (let key in obj1){
        console.log(obj1[key]); // console.log -> value
    }

    for (let key in obj1.arr){ // also works with array -> not recommended as the order of iteration is not okay !
        console.log(key); //
    }
}

function for_of(){ // for_of is more popular on ES6 and stuff -> perform on arrays and iterables.
    const colors =['red', 'blue', 'green', 1, {id: 1, name:'Joshua'}];
    const string = "Joshua"; // also works on strings.
    for (let color of colors){
        console.log(color);
    }

    for (let e of string){ // return the value of each character, other than the index (order of iteration).
        console.log(e);
    }
}

// Array Iteration Methods -> The most crucial part of today's lecture:

function forEachLoop(){
    // for each iterates over elements of a given array and APPLY a function magic to the element.
    // Nevertheless, you can't directly modify the structure of an array via for each !
    // As its core, it only relies on the input the array gives not on the ARRAY itself.
    const arr = [1,2,3,4,5];
    let x = 0; // give x -> to save the number
    arr.forEach(function(e){ // the e refers to each element within the arr that will be the input
       // e += 1; -> this won't directly change the elements within the array.
        // Here's a more boilerplate -> correct code for this via local var x;
        console.log(e);
        arr[x] = e + 1;
        x++;
    });
    console.log(arr);
}
function forEachLoop_ArrowFunction(){
    // this used an arrow function for doing the exact same thing on forEachLoop exam;
    const arr = [1,2,3,4,5];
    arr.forEach((e, index, array)=>{
        // this is the built-in params structure of a call-back function (which in this case the arrow function provided);
        // callback functions behave pretty much like a decorator in Python but with a bit trickier syntax.
        array[index] = e+1; // say take 'this' array with 'this' index -> make changes to the list !
    })
    console.log(arr);
}
forEachLoop_ArrowFunction();


function mapOnArray(){
    // map is another helpful array method.
    // map takes an iterable and put the magic of the function on each of the element within
    // The key difference of map and forEach is that map for consistency | each for more control.
    const numbers =[1,2,3,4,5];
    const doubleNum = numbers.map((number) => number*2);
    console.log(doubleNum);
}
mapOnArray();

function findOnArray(){
    // find the first element that passes some criteria.
    const numbers = [1,2,3,4,5];
    const foundFirst = numbers.find((number) => number > 3);
    console.log(foundFirst);
}
findOnArray();

