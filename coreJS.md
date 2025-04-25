# OH, BABY!

in this sketch session, we'll talk about the core
of JavaScript and stuff!

Things that subtly come to snatch your back sometimes.

## Fundaments:

### What kind of language JavaScript is?
    Javascript is dynamically-typed, interpreted (just-in-time compiled) high-level, multi-paradigm scripting language.

1. Dynamically-typed: support type inference and stuff (which sometimes is not so great). Offer flexibility but sometimes come with a cost.
2. Interpreted (JIT compiled): executed line by line via JavaScript engine | However, modern JS deploys JIT compilation, which compiles part of JS code into machine code.
3. high-level: abstract many low-level details for beginners to take up JS.
4. multi-paradigm: supports multiple programming paradigms: imperative, object-oriented, functional.
5. Scripting language: which means its primary job is to make scripts for automating tasks, adding interactivity on the web...

Last but not least, with the development of Node.js, JS now can do the server-side too,
However, I would like to entrust this to a more specialized language: Python, Java, or perhaps TypeScript.

### First-class citizens
The term first-class citizens refer to entities that support a few criteria:
+ Can be assigned to a variable (like function in Python or Haskell).
+ passed as an argument to a function (we have decorators in Python to demonstrate the idea).
+ be stored in data structure (a list contains multiple functions).
+ Can be created on the fly (function expression, lambda in Python).

And what's not?
+ Control flow: if else keywords...
+ labels, modules, namespaces and continuations...

⇒ The reason for a language to elevate some entities to be first-class comes down to which paradigms
the language wants to support.

### This keyword—Self keyword! 
(FIND MORE INFORMATION / INSIGHTS IN this_keyword.js)!

### Copy: Shallow - Deep in JS
(MORE INFORMATION / INSIGHTS IN copycats.js)!

### DOM STRUCTURE: Window - Document - Console Object!
These are objects that you'll likely come across...
+ Window object refers to the browser itself.
+ Document object refers to the entire webpage.
+ Console object refers to the console part (when we hit 'inspect' in the web browser).

In 'not-strict' mode, window and document are equivalent.
Another thing: The window object is a SHORTCUT,
which means if you don't have a dot preceding the particular element, it's likely the 'window' object precedes it.
For instance, we have 'alert' keyword → which turns out to be window.alert...
Last but not least, when you copy the inner HTML,
you can't copy the functionalities / dependencies that come with the element,
as it's just plain text!

### ADVANCED FUNCTIONS KNOWLEDGE:
#### Callback functions:
(FIND MORE INFORMATION ABOUT IT ON subtlety/callback.js)
As functions are first-class entity, well-rounded knowledge about advanced functions is crucial for better code...
Some properties of call-back function: 
+ passed as an argument.
+ Executed Later (Deferred execution).
+ Access outer-scope.
+ Often Anonymous.

#### CLOSURES:
(FIND MORE INFORMATION ABOUT IT ON subtlety/closure.js)
Closures are functions that have formed "closures" to the outer source of data.
You might be familiar with the term "closure" on outer function, inner function in Python. And this thing here is pretty much the same.
Unlike stack calls, closures are backbone-d by heap memory (which lives long) → therefore, they can reference data from one to another.
Yet, closures are quite expensive to use (more memory and processing power).
But there are practical reasons to use it | You can examine the closure.js for these practical reasons to the use cases.


#### Single Threaded JavaScript and JS - Node.js difference

Single-Threaded JavaScript is the reason why many people worry when it comes to using JavaScript.

In essence, JS and Node.js are very different, node is JRE whereas JS is the language for interacting with browser.
Basically, vanilla JavaScript is bound to the web browser's limitations itself -
no direct interaction with databases, local files.
Node.js, on the other hand, possesses the ability to execute JS on the server
(Interact with databases, environment modules...).


Node.js enables JS to do backend stuff. 
So...
We will have two different sections: JavaScript and Node.js before coming
back to things like Flask or Django...

**JavaScript Specifics**:

#### Modules | Export | Import
Before the module system is introduced (ES6),
developers tend to rely on script tags and global variables which are not so good to use securely.

Modules can solve problems like naming conflicts, global scope pollution via encapsulation. We have:
+ Named modules.
+ Default Exports.
+ Importing { Named | Default } and { Named && Default }.
~ Modules are introduced into the browser using script tag type module.

#### External Libs - Packages:
External Libraries provide collections of pre-written and reusable JavaScript code that developers can inject in
their project.
Often, you see it in a format where <script> encloses a very eccentric and long path.
The mechanism: 
1. Encounter <script> tag.
2. Download the <script> tag source: initiate an HTTP request to CDN servers.
3. CDNs: distributed networks of servers, upon request, the request is routed to the closest server, reduce latency.
4. Parsing - Executing.
5. Resume parsing HTML.

Due to **synchronous essence**,
if the browser were to download all the scripts from the external sources and execute them,
it would get increasingly slower as the dependencies expand in size, eventually affect the whole rendering performance.

To address the problem above, we can use 'async' and 'defer' to control how the scripts are downloaded, loaded into
the web browser.
In the real-world, these two solutions are highly encouraged for increased UX and initial loading.
+ Async: download and execute asynchronously, continue parsing HTML without waiting for all dependencies are loaded.
+ Defer: download the scripts asynchronously, yet defer the execution until all HTML has been parsed.

Last but not least, I shall analyze the differences between node modules and JS external libs.

The most significant nuance between them is the target environment and distribution method bound to them.
External Libs:
+ designed to run on the browser.
+ distribution across the document (exposing goods to global).
+ primarily focus on front-end tasks.

Node modules:
+ designed to run on the specific runtime.
+ distributed and managed via NPM.
+ used for a diverse range of tasks: server-side logic, build process tools, and even pre-processed front-end code.

They can in fact incorporate.
In modern front-end development, you install these packages via NPM and use **bundlers** to bundle JS, HTML, CSS
into one so that they can **embed** into each other.

Unlike Python's diverse collections of libraries, 
JS often finds things to be good enough with only some notable packages. Here are some:
+ UI libraries: React.
+ Array logic, fancy computation: Lodash.
+ bundler: Webpack, snowpack.

#### Object-Oriented Programming | Classes:
(Get more information at Paradigms/OOP.js code note).
OOP is all about objects, which are thought as 'an intuitive way of simulating the world.'
Objects are instances that mimic the real-world behavior of a real object, having properties and methods.

In JavaScript, you oft see objects are represented by brackets.

But later on, JavaScript introduces classes and stuff which are just syntactic sugar over prototypes.
JavaScript fully supports OOP, thus the four principles are encouraged to follow:
+ Encapsulation: the use of private variables, functions so as not to contamination or direct access.
+ Inheritance: the funny thing is inheritance isn't encouraged to use by many devs, 'extends' is the keyword.
+ Polymorphism: often seen in inheritance in action.
+ Abstraction: this is an alluring and complex bit, yet it is more of an implementation side.

The backbone of JS OOP derives from its prototypal nature.

#### Prototype nature of the Language.
(Get more information at Paradigms/PrototypalNature.js)


#### Functional Programming—Exporting functions:

**Next up is the basic of event handling and introduction to backend API**

#### ASYNCHRONOUS - SYNCHRONOUS code.

#### The event loop - event queue - FIFO.

#### The call stack - the LIFO principle !.

#### ASYNC finishing its promise → SYNCHRONOUSLY BACK TO THE EVENT QUEUE.

#### Promises—Fetch in JS

#### ASYNC - AWAITS

#### SERVER-SIDE HANDLING
Server-side can be understood as "Backend."
It's where you contain the business logic and interaction with the database.
Abstractly, 
the client-side will request (via protocols like HTTP, HTTPS) the backend for data,
the server-side will then response to the request.
This is called a request-response cycle.
The thing powered this process is a server side language or tool, such as Node.js, Python | Django, Flask...
**Node.js Specifics:**

