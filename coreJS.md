# OH, BABY !

in this sketch session, we'll talk about the core
of JavaScript and stuff !

Things that subtly come to snatch your back sometimes.

## Fundaments:

### What kind of language JavaScript is ?
    Javascript is dynamically-typed, interpreted (just-in-time compiled) high-level, multi-paradigm scripting language.

1. Dynamically-typed: support type inference and stuff (which sometimes is not so great). Offer flexibility but sometimes come with a cost.
2. Interpreted (JIT compiled): executed line by line via JavaScript engine | However, modern JS deploys JIT compilation, which compiles part of JS code into machine code.
3. high-level: abstract many low-level details for beginners to take up JS.
4. multi-paradigm: supports multiple programming paradigms: imperative, object-oriented and functional.
5. Scripting language: which means it's primary job is to make scripts - for automating tasks, adding interactivity on web...

Last but not least, with the development of Node.js, JS now can do the server-side too, however I would like to entrust this to a more specialized language: Python, Java, or perhaps TypeScript.

### First-class citizens
The term first-class citizens refer to entities that support a few criteria:
+ Can be assigned to a variable (like function in Python or Haskell).
+ Can be passed as an argument to a function (we have decorator in Python to demonstrate the idea).
+ Can be stored in data structure (a list contains multiple functions).
+ Can be created on the fly (function expression, lambda in Python).

And what's not ?
+ Control flow: if else keywords...
+ labels, modules, namespaces and continuations...

=> The reason for a language to elevate some entities to be first-class comes down to which paradigms the language wants to support.

### This keyword - Self keyword ! 
(FIND MORE INFORMATION / INSIGHTS IN this_keyword.js) !

### Copy: Shallow - Deep in JS
(MORE INFORMATION / INSIGHTS IN copycats.js) !

### DOM STRUCTURE: Window - Document - Console Object !
These are objects that you'll likely come across...
+ Window object refers to the browser itself.
+ Document object refers to the entire webpage.
+ Console object refers to the console part (when we hit inspect).
In not-strict mode, window and document are equivalent.
Another thing: Window object is a SHORTCUT -> which means if that you don't have a dot preceding the particular element -> it's likely the 'window' object precedes it
for instance, we have 'alert' keyword -> which actually is window.alert...
Last but not least, when you copy the inner HTML, you can't actually copy the functionalities / dependencies that come with the element, as it's just plain text !

### ADVANCED FUNCTIONS KNOWLEDGE:
#### Callback functions:
(FIND MORE INFORMATION ABOUT IT ON subtlety/callback.js)
As functions are first class entity, a well-rounded knowledge about advanced functions is crucial for better code...
Some properties of call-back function: 
+ passed as an argument.
+ Executed Later (Deferred execution).
+ Access outer-scope.
+ Often Anonymous.