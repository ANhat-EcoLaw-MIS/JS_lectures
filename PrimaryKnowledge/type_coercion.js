/*
type coercion is what makes a lot of javascript developers frustrated !

Basically, type coercion is type conversion of values from one data type to another.
 */

function implicit_type_coercion(){
    // In this we'll demonstrate how type coercion works in a simplified and brief manner.
    // We'll start with string concatenation !
    console.log('Implicit_type_coercion()');
    let a = '5' + 5; // this is a STRING CONCATENATION as the JS tries to interpret the value behind as string.
    let b = 5+5;

    if (a === b){
        console.log("Yes they're the same !")
    }
    else{
        console.log("Not the right type huh !", typeof a, typeof b);
    }
    console.log('End of Implicit_type_coercion() function');
}

/*
That is pretty much for the type coercion problem ! The thing is there is also more !
Yet you need to know that wreaks havoc upon many things that you'll pick up during the journey.
And just please use the '===' instead for more predictable behavior !
 */
function main(){
    implicit_type_coercion();
}
main();

