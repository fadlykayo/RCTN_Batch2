/*
Resourceful links for this session:
https://medium.com/skyshidigital/1-pendahuluan-seminggu-menjadi-master-react-js-seri-tingkat-dasar-7b6ec7b04af
https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4
https://www.reactenlightenment.com/react-jsx/5.1.html
https://www.w3schools.com/js/js_htmldom.asp
*/

// ========= React Flow =========

let reactFlow = {
  value: 0,
  add: function() {
    this.value = this.value + 1;
    return this.value;
  },
  minus: function() {
    this.value = this.value - 1;
    return this.value;
  },
};

console.log(reactFlow.value);
reactFlow.add();
console.log(reactFlow.value);

// ========= DOM =========

// <html>
// <body>
//
// <p id="demo"></p>
//
// <script>
// document.getElementById("demo").innerHTML = "Hello World!";
// </script>
//
// </body>
// </html>

// Notes:

// The HTML DOM can be accessed with JavaScript (and with other programming languages).
// In the DOM, all HTML elements are defined as objects.
// Each object has properties and methods.

// A property is a value that you can get or set (like changing the content of an HTML element).
// A method is an action you can do (like add or deleting an HTML element).

// In the example above the getElementById method used id="demo" to find the element.
// The innerHTML is the property for getting or replacing the content of HTML elements.

// ========= Virtual DOM =========

// A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM.
// It is a node tree that lists the elements, their attributes and content as Objects and their properties.

// Mengubah VirtualDOM jauh, jauh lebih ringan karena VirtualDOM sederhananya
// hanyalah struktur data atau kerangkanya saja jadi perubahan akan lebih cepat dan ringan.

// ========= JSX =========

// JSX is an XML/HTML-like syntax used by React so that XML/HTML-like text can co-exist with JavaScript/React code
// The syntax is intended to be used by preprocessors (i.e., transpilers like Babel)
// to transform HTML-like text found in JavaScript files into standard JavaScript objects

// By using JSX one can write the following JSX/JavaScript code:

// var nav = (
//     <ul id="nav">
//       <li><a href="#">Home</a></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#">Clients</a></li>
//       <li><a href="#">Contact Us</a></li>
//     </ul>
// );

// And Babel will transform it into this:

// var nav = React.createElement(
//    "ul",
//    { id: "nav" },
//    React.createElement(
//       "li",
//       null,
//       React.createElement(
//          "a",
//          { href: "#" },
//          "Home"
//       )
//    ),
//    React.createElement(
//       "li",
//       null,
//       React.createElement(
//          "a",
//          { href: "#" },
//          "About"
//       )
//    ),
//    React.createElement(
//       "li",
//       null,
//       React.createElement(
//          "a",
//          { href: "#" },
//          "Clients"
//       )
//    ),
//    React.createElement(
//       "li",
//       null,
//       React.createElement(
//          "a",
//          { href: "#" },
//          "Contact Us"
//       )
//    )
// );
