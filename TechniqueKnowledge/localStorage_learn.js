/*
Local storage is to load things into what to be known as a Cache if you will!
So that things were in the browser won't be lost after refreshing.
You can think of this beech is a small, client-side database.

And as this is 'client-side database', local storage doesn't exist in Node.js environment!

Its mechanics - our way of using:
localStorage uses a strategy of using a key-value pair model, basically registering thing to another thing
You need to bear in mind that localStorage only takes strings and only interprets strings.

We can work around this by using JavaScript Object Parsing, like you have a string in a specific format
that can be efficiently converted back to the OBJECT type in JavaScript.

A subtlety to grasp, local storage is a global object and read-only!

When it comes to lifecycle,
local storage's lifetime is persistent without a built-in expiration time.

Local storage is designed to
Persistence Across Sessions: Data stored in localStorage is designed to last.
It remains in the user's browser even if:

    The user closes the specific browser tab.
    The user closes the entire browser application.
    The user shuts down and restarts their computer.
    The user navigates away from the website and comes back later.

Because local-storage (in non-incognito mode) sticks with the local environment of the user,
also its persistence, local storage is widely used for different use cases:
- Caching.
- Storing User Preferences - Settings.
- Application State.
- Offline Data Storage.
...
 */


// Basic setting item for local storage
localStorage.setItem('user', 'Nguyen Anh Nhat ne !');

// A more complex use-case: constructor -> objects -> storing the objects within a JSON string format!
const constructor = function (name, major){
    this.name = name;
    this.major = major;
    this.introduce = () =>{
        console.log(`${this.name} - from ${this.major}`);
    };
};

firstEmployee = new constructor('Nguyen Anh Nhat', 'MIS');
firstEmployee.introduce();

localStorage.setItem('first-employee', JSON.stringify(firstEmployee)); // this stores an JSON object as string
// and removes all dependencies
// that are functions, etc. just raw data!

console.log(localStorage.getItem('first-employee'));


localStorage.clear(); // clear all to watch out contamination.