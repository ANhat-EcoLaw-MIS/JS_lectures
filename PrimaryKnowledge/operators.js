/*
Data types are very crazy when it comes to operators | Very interesting !
+ Arithmetic: (+, -, *, /, %)
+ Assignment: (=, +=, -=)
+ Comparison: (==, ===, !=, !==, >, <)
+ Logical (&&, ||, !)
 */

// Arithmetic - Operators
console.log(3+2);
console.log(3-2);
console.log(3*2);
console.log(10/3);
console.log(10%3); // %: remainder !
console.log(10**5); // **: exponential.

// Comparison Operators - Type coercion in the action !

// In javascript, "==" is often not recommended -> because it's loosely and unpredictable !
// console.log("5" == 5) # This is equal, as it is type coerced ! !
// console.log([1,2] == [1,2]) # this is not equal, as it checks for the object itself !
// For a more intuitive reason, '===' is more appreciated !
console.log("10" === 10) // As the error said, condition is always false since types string and number have no overlap
console.log("abc" === "abc")
console.log([1,2,3] === [1,2,3]); // TRUE NHOA !



// Logical Operators - For logical order
function logic (operator_choice){
    if (!operator_choice){
        throw new Error("Hey babe, please add the operator choice please !");
    }
    let viable_choice = ["and", "or", "not"]
    switch(operator_choice.toLowerCase()){
        case "and":
            // example of logical operator "and" ||
            let anhNhat = "Nguyen Anh Nhat";
            let ducDao="Me Qua";
            if (anhNhat === "Nguyen Anh Nhat" && ducDao==="Me Qua"){
                console.log(`${ducDao} ${anhNhat} quá bây ơi !`);
            }
            break;
        case "or":
            let vuiBen = "Nguyen Anh Nhat";
            let ducDon = false;
            if(vuiBen === "Nguyen Anh Nhat" || ducDon){
                console.log("This is an OR ||");
                console.log(`${vuiBen}`);
            }
            break;
        case "not":
            let ohyeah = false;
            if (!ohyeah){
                console.log(`finished the "not" ${ohyeah}`);
            }
            break;
        default:
            console.log(`Not intended operators ${viable_choice}`);

    }


}

function execute_logic(){
    logic("and");
    logic("or");
    logic("not");
}
execute_logic();

// Assignment operators:
function familiar_operators(){
    let bitmui = "Bit mui";
    console.log(`${bitmui}`);
    let x = 5;
    x %= 3;
    console.log(`${x}`);
}
function strange_operators(){
    // &&=, ||=, ??=
    // &&= is evaluated on the left side (if the left side is truthy)

    let a = true;
    let b ="this is assigned after a truthy value is evaluated";
    a &&= b;
    console.log(a);
    console.log('=============================')

    // ||= is only evaluated on the left side is falsy !
    let x= false;
    x ||= 3; // raise warning: y should not be assigned to x
    console.log(`${x}`);
    console.log('==============================')

    let m = null;
    let n=5;
    m ??= n;
    console.log(`${m}`);
    console.log('END !')
}

familiar_operators();
strange_operators();
