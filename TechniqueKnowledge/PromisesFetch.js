// Promise and fetch are strategies for handling async code more efficiently.

// Promises can be understood as placeholders of value that will appear later on.
// They represent the eventual output of the async operation, whether it fails or succeeds.

// A promise can have three states: pending, fulfilled and rejected.
// Pending is when a promise is still 'finishing the work', it's the 'unavailable' state.
// Fulfilled and rejected are two states of promises that both finalize the eventual output
// It is fulfilled when successfully responded and vice versa.
// Once finalized, the state becomes 'settled'.

// Create a promise.
function createPromise() {
    let decision;
    const myPromise = new Promise((resolve) => {
        // Perform an asynchronous operation here.
        setTimeout(function () {
            decision = Math.random() < 0.5;
            resolve(decision);
        }, 3000);
        // signifies done.
    });
    return myPromise;
}

createPromise().then(
    (result) =>
    {
        console.log('Output: ', result);
    });