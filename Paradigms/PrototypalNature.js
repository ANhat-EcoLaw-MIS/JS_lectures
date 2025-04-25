// The top most of an object's prototype chain is null value.
function firstOfPrototypes()
{
    const firstEmployee = {
        id: 0,
        name: "John"
    };
    console.log(Object.getPrototypeOf(firstEmployee)); // this gets null as it's only an OBJECT.
    // the prototype chain at the topmost points to null.
}

// To establish a new object and a chain of prototypes.
function chainOfPrototypes()
{
    const animal = {
        speaks: true,
        makeSound: function() {
            if (this.speaks === true){
                console.log('Generic animal sound');
            }else{
                console.log('This animal is sound-less...');
            }
        }
    };

    let fish = Object.create(animal);
    // the create method for creating an object based on an existing one.
    fish.speaks = false; // adding properties.
    fish.makeSound = function(){
        console.log('Something fishy !'); // override methods.
    }
    // Log info for testing.
    console.log(Object.getPrototypeOf(fish)); // this returns the object that the fish is prototyped from.
}



// Things get exciting when we use the new keyword.
// In essence, the new keyword is to create a new object via constructors.

// But if you call it directly on an object in hoping for a prototype chain to be established.
// What you'll get back is a 'copy by reference' of the existing object.
function newOnObjects()
{
    const firstEmployee = {
        id: 0,
        name: "John"
    };
    const anotherEmployee = new Object(firstEmployee);

    anotherEmployee.bark = () => {console.log('GAU GAU')}; // the method gets inserted into the initial ref as well.
    anotherEmployee.bark();
    console.log(anotherEmployee);
    console.log(firstEmployee);
}

// 'new' keyword on constructors does a few things:
// create a brand-new object, add the new object to the prototype chain, binds 'this' to the new object.
function prototypeOnConstructors(){
    const basePrototype = {
        welcome: ()=>console.log('Welcome to the end!'),
        isBase: () => true
    };
    const myConstructor = function(name, age) {
        this.name = name; // the properties will be bound for the specific object constructed later on.
        this.age = age;
        this.introduce = ()=>{console.log(`${this.name}: ${this.age}`);};
    };
    // Object.setPrototypeOf(myConstructor.prototype, basePrototype);
    myConstructor.prototype = basePrototype;
    // This is the part where the inheritance takes place.
    console.log(myConstructor.prototype);


    // create a brand-new object.
    const personOne = new myConstructor('personOne', 18);
    const personTwo = new myConstructor('personTwo', 20);
    console.log(personOne);
    console.log(personTwo);
    console.log(personOne===personTwo); // false -> do not refer to the same object.

    // the object will be added to the prototype chain.
    console.log(Object.getPrototypeOf(personOne));
    console.log(Object.getPrototypeOf(personTwo));
    console.log(Object.getPrototypeOf(personOne)===Object.getPrototypeOf(personTwo));

    personOne.welcome();
    if (personOne.isBase()){console.log('YES!')}
}

prototypeOnConstructors();

