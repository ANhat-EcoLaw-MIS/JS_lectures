/*
Closures refer to function that take not only the data from its definition but also data from external source.
 */

function outer(){
    let b = "Nguyen Anh Nhat";

    function inner(){
        return 'Hello ' + b; // as you can see here there the inner functions can access to data from outer scope.
        // in this case we say that the inner function has formed a closure around the outer function.
    }
    // return inner; Here's another variation -> it returns a function, which can be called with [1] code.
    return inner(); // this is giving back the RESULT OF AN FUNCTION as the result of the outer one.
}

console.log(outer()); // b: string -> return inner() -> return 'Hello ' + b (the data from outer scope);
// console.log(outer()()); this is traumatizing to watch ~~ Basically it calls two functions here !

// The most practical use-case of closures is data encapsulation.
// Prevents leaking data that is embedded within the closure -> prevents contaminated the embedded data.
// This is actually crucial in clean code approach, as in some cases, data leaking can cause contamination of data.

function mother(){
    let a = [1,2,3];
    function helper_increment(){
        // resources in here won't be accessible anywhere outside.
        const encapsulated = 'Better not to leak data | Inaccessible from the outer scope !';
        console.log(encapsulated);
        return a.map((item) => item + 1); // return a new array with the mapping applied
    }
    return helper_increment();
}

console.log(mother()); // this prevents data leaking, as the variable was only known, but not modified.

// Function factory is also another useful trick with closures.
function sayHello(to_whom = ''){
    return ()=>console.log('A hello to', to_whom);
}

const sayHelloToNhat = sayHello('Nguyen Anh Nhat'); // this becomes a function which can be passed...
sayHelloToNhat();

// Killing tricky question.
function interviewDevil(explain=false){
    // this is a popular interview question about JS hoisting and closures...
    for (let i = 0; i<3; i++){
        const log =() => {
            console.log(i);
        }
        setTimeout(log, 100);
    }
    if (explain){
        console.log(
            'As you notice, WebStorm goes difficult on the code written via throwing a bunch of warnings' +
            '\n The main problem stems from two main things: var keyword, closure function log()' +
            '\nvar keyword is associated with hoisting and stuff - which means by the declarations of var is on the global scope, which causes the variable declared to be globally mutable.' +
            '\nThat is like forming closures on the global environment, after the delay, the var has been mutated to value of 3.' +
            '\nThe next effect derives from the closure log function that is delayed 100ms for each loop' +
            '\nAnd because after the delay for each loop, the variable was mutated and the variable is not tied to the for loop' +
            '\nThe log after delay will reference to the hoisted, mutated variable (which is 3 now as the loop has finished before the delay ended)' +
            '\n Visualizer: For each loop (1: [var++ -> 1, delay], 2: [var++ -> 2, delay], 3: [var++-> 3, delay] => break | remains: delay' +
            '\n For each delay: delay 1 -free> console.log(i) -> i -closure> var = 3 (hoisted, mutated)' +
            '\n YOU CAN SIMPLY FIX IT BY CHANGING var -> let, this way, the value of each iteration is bound within the loop scope'
        )
    }
}
interviewDevil(true);