console.log("Starting...");

const username = prompt("What is your name?");

if (typeof (username) === "undefined") {
    alert("Please enter a valid username");
}

console.log('Here is your username recorded', username);

console.log('Thank you for using our website !');