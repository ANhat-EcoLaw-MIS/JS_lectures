// this keyword -> pretty similar to self in python.
/*
Thing to bear in mind that the "this" keyword value behaves based on the execution contexts.
Execution contexts are the contexts in which the code is executed (runtime environment).
You can examine this behavior by straightforwardly console.log(this) -> which returns a warning in Node.js -> the keyword is useless
as it is at the top level -> which means that it references the global object,
which, in most of the case, proves useless.

This keyword is useful when it comes to functions and objects...
 */

// This in function scope
function logThis(){
    'use strict'; // in non-strict, it will return the global object!
    console.log(this); // in strict mode, this returns null - undefined as the function doesn't belong to anyone
    // the global owns it, but in order not to contaminate the global...
}

// This in method context owned by objects.
const myObj ={
    id: 1,
    greet: function (name){ // normal method without this referencing to anything.
        console.log(name);
    },
    toId: function()
    {
      console.log(this.id); // This is called implicit binding...
        // Which binds myObj to the function...
        // this equals to call myObj.id...
    }
}


// This in constructor functions.
function ObjFactory(id, name)
{
    this.id = id;
    this.name = name;
    this.greet = function (object){
        console.log(`${this.name} is sending hello to ${object.name}`); // this.name refers to the object's name.
    }
}

function runObjFactory(){
    let John = new ObjFactory(1, "John");
    let Joshua = new ObjFactory(2, "Joshua");
    console.log(typeof John);
    John.greet(Joshua);
}

function call_bind_method(){
    // call method calls a function with the bindings - params that were given to it, with this keyword
    // You can reference to the object.
    const testCall = {name: 'Alice'};
    function greet(occupation, city){
        return `Hello, ${this.name} with ${city} and ${occupation} !`;
    }
    console.log ('Here is the call() method !', greet.call(testCall, 'Software engineering', 'NewYork'));

    // Bind method returns a new function that links to a specific object during its lifetime.
    const newFunc = function () {
        return `Hello, ${this.name} !`;
    }
    let AfterNewFunc = newFunc.bind(testCall);
    console.log('Bind method here', AfterNewFunc());
}

const ArrowThis = {
    name: 'Nguyen Anh Nhat',
    greet: function(){
        console.log(this.name); // this name refers to the object's name -> Nguyen Anh...
        // const object = this; to fix the warning -> undefined.
        const inner = function(){
            console.log(`${this.name} is going`); // undefined; gets warned! Will be debunked later...
        };
        const arrow = () => console.log(`${this.name} is going`); // this is okay, as it inherits this from lexical scope.
        inner();
        arrow();
    }
}

// Arrow functions -> arrow functions do not have this keyword.
// Instead, it inherits the 'this' object from the context of the object enclosing it - we call this LEXICAL SCOPE.
// Lexical scope basically refers to the context scope that the function is demanded.
const main = () =>
{
    logThis();
    runObjFactory();
    myObj.greet("Hello World");
    myObj.toId();
    call_bind_method();
    ArrowThis.greet();
}

main();

/* WELCOME BABE to DEBUNKING SESSION:
The main question in this lecture is 'why the inner function can't simply refer to this within an outer scope'
And that also answers the question of why we need an Arrow function at the beginning.

This keyword value depends on execution contexts.
And for each time a function is called, a new execution context is created -> this is our main problem here.
The inner() when called creates a new execution context bound with no object, no bind(), apply()... methods.
To explain more,
when the inner() is called, there is no explicit receiver, handler, no objects owning, no bind()...
no whatsoever taking charge of it, thus 'this' value is interpreted as 'undefined' as nothing bound with it in the execution phase (call).
And unlike arrow function, regular function does not climb up the trees to find out what this is. It simply invokes a new execution context.
And for this to be glorious, I introduced a new bonus section talking about chaining and how it works...
 */

console.log('============================ THIS IS THE BONUS SECTION ===================================');
const greet = {
    name: 'Anh Nhat',
    sayHi: function () {
        console.log(`${this.name} is going`);
        return this // this returns the object -> which can be used for chaining!
    }
};

greet.sayHi().sayHi().sayHi();
