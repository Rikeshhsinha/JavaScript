// What is an Event?

// An event is an action that happens in the browser.

// Examples:

// Mouse click
// Double click
// Typing
// Scrolling
// Pressing a key
// Submitting a form
// Loading a page



const button = document.querySelector("button");

button.addEventListener("click", function ()  {
    console.log("Button Clicked");
},false );  //=> there is third paramerter for true and false value by default it is false so, we rarely used.


// Bubbling 
//Propogation

// What is Event Propagation?

// Event propagation is the process of deciding how an event travels through the DOM.

// When you click an element, the event doesn't happen only on that element.

// It travels through the DOM in a specific order.

// There are two phases:

// Capturing (Trickling)

// Document
//    ↓
// Body
//    ↓
// Parent
//    ↓
// Button





// Bubbling

// Button
//    ↑
// Parent
//    ↑
// Body
//    ↑
// Document


//   e.stopPropagation();

// stops the event from moving further

