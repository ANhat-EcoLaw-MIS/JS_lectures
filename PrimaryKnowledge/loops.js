// loops are essential in language like JavaScript so... !

function for_loop(){
    for (let i = 0; i < 25; i++){
        console.log("YEAHYEAH for the ", i, "times");
    }
}

function for_loop_complex(height = null){
    if (height === null){
        throw new Error("Missing the numeric argument: height");
    }

    for (let i = 0; i < height; i++){
        let m = "";
        for (let j = 0; j < height; j++){
            m += '*';
        }
        console.log(m);
    }
}

function for_loop_triangle(height = null){
    if (height === null){
        throw new Error("Missing the numeric argument: height");
    }

    for (let i = 0; i < height; i++){
        let m = "";
        for (let j = 0; j < i+1; j++){
            m += "*";
        }
        console.log(m);
    }

}

function do_while(){
    // do {} will be executed at least once regardless of the while condition !
    let counter = 0;
    do{
        console.log("do_while");
        counter++;
    } while (counter < 5);
}

function while_loop(number, number_range, limit = null){
    // while loop with control flows |
    // Find all positive numbers that divisible by a number within a range of a given number.
    // limit should be a number !
    // Zero in JS does not equal to false, especially with strict evaluation !
    let flag = false;
    if (limit){
        if (typeof limit !== "number"){
            throw new Error("Limit must be a number");
        }else{
            flag = 0;
        }
    }

    let x = number_range // this is our range
    while (x > 0){
        if (x % number === 0){
            console.log(`${x} is divisible by ${number} = ${x/number}`);
            flag ++;
        }
        if (flag === limit){
            console.log('Stopped at', flag, x)
            break;
        }
        x -= 1;
    }
}
function main(){
    // for_loop();
    // for_loop_complex(5);
    // for_loop_triangle(5);
    do_while();
    while_loop(3, 100, 5);
}

main();