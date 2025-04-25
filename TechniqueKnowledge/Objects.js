/*
Objects are key-value pairs, where each key is typically a string (or Symbol) and each value can be assigned to
any value!
 */

// Creating objects in JavaScript!
const myBankObj = { // Create using declarations | Object literal !
    account_id: 1,
    account_name: "John",
    email: "john@example.com",
    amount: 1500,
    deposit: function(){console.log("Depositing...");},
    withdraw: function(){console.log("Withdraw...");}
};

// this is a constructor function that uses 'new' keyword to create a new object.
function BingXue(name, price) {
    this.name = name;
    this.price = price;
    this.run = function (vroom) {
        return "Running..." + vroom;
    };
}

function main(){
    console.log(myBankObj.account_id);
    myBankObj.deposit();
    myBankObj.withdraw();
    let myCar = new BingXue('Yeah-yeah', 35);
    console.log(myCar.price)
    console.log(myCar.run('vroom vroom'));

    console.log('END OF main1() function about creating objects');
    console.log()
}

// main();

// ================================== Accessing an object's properties===============================================

function dot_notation(){
    // Used when you know the attribute name
    let a = {
        id: 1,
        name: 'Joshua',
        email: 'joshua@example.com',
        walk: function(to_where){
            return `${this.name} is going to ${to_where}`;
        }
    };

    console.log(a.id);
    console.log(a.name);
    console.log(a.email);
    console.log(a.walk('Việt Nam'));
}

function bracket_notation(){
    // Used when the identifier (key) is pretty... special (do not comply to JS key name) -> dictionary
    let e = {
        id: 2,
        name: 'Fly like a bird !',
        price: 15,
        'adored by': 'a lot of music critics, gays and folks',
        'play music': function playMusic(type_of_audio){
            return `${this.name} is playing via ${type_of_audio}`;
        }
    }
    console.log(e['id']);
    console.log(e['adored by']);
    console.log(typeof e['play music']); // this returns a function type !
    console.log(e['play music']('MP3/MP4')); // this is to call a function using ();
}

function main2(){
    dot_notation();
    bracket_notation()

    console.log('END OF main2() function about accessing attributes');
    console.log()
}
// main2()

// ========================= Some other things ================================

function static_method(object){
    // this function comprises a lot of different static methods built-in objects themselves.
    // through these static methods -> performing loops !
    console.log(Object.keys(object), '1');
    console.log(Object.values(object), '2');
    console.log(Object.entries(object), '3'); // returns a 2D matrix !
}

function destructuring(){
    console.log('Destructuring...');
    const object1 = {
        id:1,
        name: 'Joshua'
    };
    console.log(typeof ({id,name}=object1));
    return {id, name} = object1; // this is allowed -> returned an OBJECT (as you create new {})
}

function spreadSyntax(arr){
    // This is getting quite advanced, remember list comprehension and stuff.
    // Spread syntax is to create new objects with some "magical looking" syntax.
    // Formally, it is used to create shallow copies of objects or merge objects | pretty much like extend.
    // A very crazy example about this is filtering duplicates / finding uniques within an array.
    console.log('before filtering out', arr);
    return [...new Set(arr)];
    // the spread syntax here works like the list function "extend"
    // Basically, brings all the set elements into an array.
}

function JSON_stuff(obj){
    // this function is to transform a JavaScript Object -> JSON for exchanging information.
    // this returns a JSON object via parse method -> this will make the object loses its methods.
    return JSON.parse(JSON.stringify(obj));

}
function main3(){
    const obj = {
        id: 1,
        name: 'Marceline',
        credibility: 15,
        // in case I want to deploy this kind of pattern !
        // method: function (x){
        //     const multiply = (y) => this.credibility * y
        //     return multiply(x); // this logic can be broken down like x = y as they're being re-assigned circularly.
        // }
        method: (x) => obj.credibility * x
        // This is fine BUT the credibility belongs STRICTLY to the object constant !
    };
    static_method(obj);
    console.log(destructuring());
    console.log('after filtering', spreadSyntax([1,1,1,23,3,5,4,12,53,3]));
    console.log(obj.method(15));
    console.log(Object.keys(JSON_stuff(obj)));
    console.log(typeof JSON_stuff(obj));
}

main3();

/*
To recap, I have learned: object creating, accessing, some other things related
object creating:
    normal creating through curly braces (literal objects).
    constructor functions with the new keyword to create a new object

accessing objects' properties:
    + through dot notation !
    + through brackets for special naming variables.

Few other things:
    + Static methods -> to get keys, values and entries for performing loops.
    + Destructuring -> creating new objects by destructuring it.
    + Spread syntax.
    + JSON built-ins.
 */