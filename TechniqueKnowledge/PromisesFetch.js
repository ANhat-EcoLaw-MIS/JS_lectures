// Promise and fetch are strategies for handling async code more efficiently.

// Promises can be understood as placeholders of value that will appear later on.
// They represent the eventual output of the async operation, whether it fails or succeeds.

// A promise can have three states: pending, fulfilled and rejected.
// Pending is when a promise is still 'finishing the work', it's the 'unavailable' state.
// Fulfilled / resolved and rejected are two states of promises that both finalize the eventual output
// It is fulfilled when successfully responded and vice versa.
// Once finalized, the state becomes 'settled'.

// Create a promise.
function createPromise(consume = false){
    // creating new promise with new keyword.
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>
        {
            let decision = Math.random() < 0.5;
            if (decision){
                resolve(decision); // If the random picks true.
            } else{
                reject(new Error(`Failed to create promise due to final decision = ${decision}`));
                // If the random picks false.
            }
        }, 3000); //ms
    });

    // Consuming promises.

    if (consume)
    {
        promise.then( // if the thing is finalized (resolved && rejected), it will proceed 'then'...
            (result) => console.log(result)) // the result is the future value of promise we all need.
    }
    return promise; // embed this for DRY...
}
// A bit of analytics:
// Pending state: waiting for timing out... (we don't count the time for executing function here!).
// After a delay, the result is returned (in this case resolved).
// Once finalized, it can 'then' be ready for other operations.


function consumingPromises(){
    // we will perform consume promises via chaining methods, as 'then', 'catch' itself returns a new promise object.
    const promise = createPromise();

    promise.then(
        (result) => console.log(result),
    ).catch(
        (err) => console.log('Powered by catch function', err)
    ).finally(
        () => console.log('Finally done!')
    )
}

function fetchAPI(information=false){
    // fetch is a modern way to raise a request to the backend server via API call.
    // fetch(url, option) -> a new promise.
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(
        (response)=>
        {
            if(!response.ok){
                throw new Error(`Failed to fetch API response ${response.status}`);
            }
            return response.json(); // the api call is successful.
            // response.json() also returns a new Promise, which can be chained.
        }
    ).then(
        (data) =>
        {
            if(information){console.log(data);}
            return data;
        }
        // the next then take the result of the first then (which is in a Promise-like form).
    ).then(
        (data) =>
        {
            console.log(typeof data);
            let count = 0;
            data.abilities.forEach((ability)=> // This has a few workarounds. One of them is switching to TypeScript...
            {
                console.log(ability);
                count++;
            })
            console.log(count);
        }
    ).catch(
        (err) => console.log(`Oh no, something went wrong: ${err}`)
        // Catch will stop the chaining 'then' once an error is raised.
    ).finally(
        () => console.log('Finally done!')
    )

}
const main = ()=>{
    // consumingPromises();
    fetchAPI();
}
main();