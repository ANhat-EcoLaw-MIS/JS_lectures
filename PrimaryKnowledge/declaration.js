// You can declare variables and stuff by using let, const and var keywords.

// let (block-scoped) | can be re-assigned | can't be re-declared within the same scope.

function example(){
    if (1){
        let x = 10;
        console.log(x);
    }
    // return x; // unresolved ! as the x is defined within the if block
}

function example2(){
    for (let i = 0; i<10; i++) {
        console.log(i)
    }
    // console.log(i) | unresolved reference
}

function example3() {
    // unlike Python, you can't override a let declared variable in the same scope
    // let name = "Nguyen Anh Nhat"
    // let name = "Nguyen Anh Ton" -> Error
    // But you can re-assign the number -> which means name = "..."
    let name = "Nguyen Anh Nhat"
    console.log(name)
    name = "???"
    console.log(name) // Totally fine !
}


function main1(){
    example()
    example2()
    example3()
}
main1()

//==================================================================

// const: Block-scoped | Can't be re-assigned | Must be Initialized (Has a value) | Additional Behavior

function example4(){
    const name = "Nguyen Anh Nhat"
    for (let i = 0; i < 4; i++){
        console.log(name)
    }
}

function example5(controller){
    // Additional Behavior with List | Objects
    const myObject = {property: 'Nguyen Anh Nhat'};
    if (controller === true){
        myObject.property="Duong Dao Minh Duc" // This is still accepted
    }
    /*
    This behavior can be understood as while the Object is a constant, the element within it still can be changed.
     */
    console.log(myObject.property)
}

function main2(){
    example4()
    example5(true)
}
main2()
// ========================================================================================
function example6(){
    // Suppose this is a global environment -> var can be crazily error proned
    console.log(yeahyeah)
    var yeahyeah = "OMG !" // extremely error-prone !
}

function main3(){
    example6()
}

main3()