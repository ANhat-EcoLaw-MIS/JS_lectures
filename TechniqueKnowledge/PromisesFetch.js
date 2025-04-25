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

/* Address callback hell with Promises.
The most annoying stuff about having a "callback hell" - which refers to deeply nested callbacks
- will eventually kill the readability, maintainability of the code...
 As it doesn't really give any sense of what to do next and stuff | In my way of addressing,
 I would splice up the functions, but this avenue gives a foggy sense to the code.
 As a product / result-based beech, this is actually deplorable.

 As for why callbacks can 'create', allow asynchronous code:
 This is common confusion as callbacks can't create asynchronous code,
 actually it allows asynchronous code to 'happen'...

 The gist is that callbacks can operate on an asynchronous result...
 That basically reflects to the resolve() in promise objects.

 You know that callbacks are NATURALLY delayed - which means their execution is naturally deferred
 - so that act of awaiting resembles 'the wait for' resolve() method in the promise object.
 It waits for the OUTER FUNCTION to be done (which returns, allows or does something) before
 calling back other functions.

 And this, generally, creates a 'callback hell' if you would.
 Also this is a 'then()' if you also would...

 Promise mechanism, at its core, gives this kind of pattern a much more smooth and easier
 time to deal with.

 Why to use async, if the time execution is so slow, such that there's no need?
 If the process is extremely fast
 -> Blocking the main thread!
 */

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
    consumingPromises();
    fetchAPI();
}

function interviewResult(){
    const letter = new Promise((resolve,reject)=>
    {
        const pickRandom = Math.random() < 0.5; // randomly true.

        if(pickRandom){
            resolve(pickRandom); // approve ! return a value
        }else{
            reject("We're very sorry to inform you that you die!")
            // reject ! return a note!
        }
    }
    );
    letter.then(
        (result) => console.log(result)
    ).catch(
        // the usage is quite abstract; basically it catches all errors raised without
        // specifying the reason why, how it was raised.

        // In this case, it will also catch an 'unhandled rejection' flaw.
        // But using it is actually recommended as it cleans out a lot of things.
        (err) => console.log(err)
    )
}

function sneakPeakAtAsyncAwait() {
    // Async and Await makes working with promise objects less 'callback hell'...
    // I will be doing the same thing with the 'interviewResult' function.

    async function fetchData() { // this is asynchronous!
        return new Promise((resolve, reject) =>
            {
                setTimeout(() =>
                    {
                        const decision = Math.random() < 0.5;
                        if (decision)
                        {
                            resolve(decision); // returns the decision value to the next step.
                        } else
                        {
                            reject(new Error("Failed to make decision!"));
                        }
                    }
                , 2000);
            }
        )

    }

    // async returns an await object, which awaits...
    async function callData(){
        try
        {
            const myData = await fetchData();
            console.log(myData);
        }catch(err){
            console.log(err);
        }

    }
    callData().finally(
        ()=>console.log('Finally done!')
    );
}

function more(){
    interviewResult();
    sneakPeakAtAsyncAwait()
}


// Executing code.
more();
main();
