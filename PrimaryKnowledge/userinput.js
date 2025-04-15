/*
In this lecture, we'll be covering how to take user input !

Note to take: something went off ! -> the function prompt doesn't have any reference to in Node.js
 */

function simple_user_input(){
    const age = prompt('Enter age'); // prompt function is built in TypeScript.

    if (age !== null){
        console.log('Your age is: ' + age);
    }
    else{
        console.log('User cancel the prompt !')
    }
}

simple_user_input();