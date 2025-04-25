

// Objects are often represented in 'key-value pair' format enclosed within a brackets.
// Objects must be DEFINED (var, let, const) before referencing.
const myTeacher = {
    name: 'Joana',
    teaching: 'Humanity Science',
    greet: function() {console.log(`Hello every body ! I'm ${this.name},  currently teaching ${this.teaching}`)}
};

myTeacher.greet();

// We touch on class, which now turns to entire OOP.
class Person{
    #password; // this introduces a private variable for encapsulation.
    static #id = 0; // this introduces a private class attribute
    constructor(name, email, password = ''){
        Person.#id++; // this imitates the behavior of class methods.
        this.name = name;
        this.email = email;
        this.#password = Person.hashPassword(password);
    }; // constructor to construct properties.

    static hashPassword(unhashed_password){
        return {'HashedPassword': unhashed_password};
    } // the 'static' method is used for generating static methods.

    introduce(){
        console.log(`My id: ${Person.#id}. I'm ${this.name}, ${this.email}`);
    }; // adding a new method called introduce | on a side note, I find this pretty counter-intuitive.

    peekatPassword(){
        return `${this.name}: ${this.#password['HashedPassword']}`;
    }

    /*
    The static keyword and class thingy in Python and JavaScript differ.
    In JS, static means that the responsibility is taken on the class itself.
     */
}

// To instantiate a new person -> use 'new' keyword.
function tryPerson(){
    const studentA = new Person('Nguyen', 'nguyen@gmail.edu.com', 'HUHUHUHUHU');
    studentA.introduce();
    console.log(studentA.peekatPassword());
}

function tryToConsoleLog(){
    let studentB = new Person('So so def', 'soso@edu.com');
    console.log(studentB);
    console.log(myTeacher);
    // These are different!
    // As in the class one, you can peek what the thing was instantiated from.
    // While in the object one, you can see the functions embedded.
}

/*
In essence, classes are just 'syntactic sugar' over JS underlying prototype-based inheritance.
The topic will be discussed soon in sections devoted to it.
*/


function main(){
    tryToConsoleLog();
    tryPerson();
}
main();