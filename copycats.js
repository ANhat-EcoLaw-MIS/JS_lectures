/*
When it comes to copying and stuff, the most magnificent thing we can see briefly from it is MEMORY MANAGEMENT.

Well, memory management is a whole broad low-level stuff, but studying it, or at least know something about it
can do you lots of good.

With copying and thing in JS, we can understand how the language handle memory management, referencing...

But with a simple and intuitive mindset like this: too big, too complicated, too costly - those rather create new
-> should best be referenced ! (dynamic programming);
 */

// The first type of copy, we'll take a look at is copy by reference | which is often done on objects in JS.
function copy_by_reference(){
    // Basically copy THE REFERENCE IN MEMORY to the object.
    const obj1={
        id: 1,
        name: "Joshua My love !",
        price: 350
    }

    const obj2 = obj1;

    obj2.id = 2;

    console.log(obj2.id);
    console.log(obj1.id);

    if (obj2.id === obj1.id) {
        console.log('This is copy by reference !')
    }
    // copy by reference increases efficiency...
}

// There is also copying by value -> but that is just the primitive value.

/* BEFORE DELVING INTO shallow - deep -> I need you to understand that the terms
"reference" and "value" describe the job being done on an INDIVIDUAL LEVEL !
whereas "shallow" - "deep" describe the job being done on an WHOLE LEVEL OF THE OBJECTS, ARRAYS...
 */

// NEXT UP: We'll dive a bit deeper into shallow - deep copy()

function spreadSyntaxShallow(){
    // In most simple cases without things being too complicated -> spreadSyntax creates shallow copies.
    const arr = [1,2,3,4, [9,10]];
    const arr2 = [...arr];

    if (arr === arr2){
        console.log('YES !')
    }
    delete arr[2];
    arr[4].push(5);
    console.log(arr);
    console.log(arr2);
    /*
    This example will shed light to what I mean by attributing "reference - value" to "done on an INDIVIDUAL level"
    as you revise, primitive -> value ; complex -> reference
    In the example,
    Once you make changes to the nested list within the array -> the two lists are both modified as copy by reference.
    Whereas the changes made upon primitive values (Integer...) won't carry through across both lists.
     */
}

function JSONdeep(){
    // To have objects deep copied in JS is no mean feat...
    // To copy a whole new object without dependencies (functions that are unnecessary) -> JSON

    let obj1 ={id: {nested_id: 1}, name: "Joshua My love !", price: 350};
    let obj2 = JSON.parse(JSON.stringify(obj1)); // the act of deep copying - even though it's redundant !

    obj2.id.nested_id = 2; // this to demonstrate the object is actually deep-copied.
    return obj2.id.nested_id + ' is a copycat of ' + obj1.id.nested_id;
}


const main = function(){
    copy_by_reference();
    spreadSyntaxShallow();
    console.log(JSONdeep())
}

main();
