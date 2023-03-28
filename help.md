# A Basic Overview of Website Development
### HTML
Our `index.html` file will contain the code that explains the structure of our website - from buttons and sections to headers and body text.

An HTML file is broken up into two main sections, one is contained within the `<head>` tag, this contains all the ‘invisible’ information about our website. For example links to the CSS stylesheet(s), the page icon, page title etc…

The other section is contained in the `<body>`. This is where all of our HTML elements are declared - and is what you see when you are browsing a website.

These sections are wrapped in one `<html>` tag that represents the whole page, for example here’s a simple site that displays a header and a button:

```
<!DOCTYPE html>
<html>
	<head>
		<title>My First Website!</title>
	</head>
	<body>
		<h1 id="title">Welcome!</h1>
		<div class="container">
			<button onclick="alert("wow!")">
				Click Me!
			</button>
		</div>
	</body>
</html>
```

Learn more about html — https://www.w3schools.com/html/

### CSS
CSS is what gives our websites some flair and stands for “Cascading StyleSheets”.  With this we can change colours, fonts, add backgrounds and shadows, modify the layout of a site etc…

CSS works by defining a **rule**.  Rules start by stating what the rule should affect. The could be the name of an element, the name of a class group or the ID of an individual element. For example here is a CSS rule that changes the font size and colour of all `p` elements on a page:

```
p {
	font-size: 15px;
	colour: blue
}
```

And this is the result: 

<img src="outline/Screenshot%202023-03-27%20at%2011.23.25%20PM.png" width="200" />

You can also declare rules for a particular class. You assign classes to HTML elements through their `class` attribute:

`<div class="my-container"> ... </div>`

You can then create a rule for that class by adding a dot before the classname in the CSS — **note that the dot is used in the CSS but not the HTML**:

```
.my-container {
	display: flex;
	align-items: center;
}
```

You can also style a particular HTML element using it’s ID — which is also declared via its HTML attribute:

`<button id="start">START</button>`

In the CSS, much like class’s, you append a hashtag to the front of the ID to make a rule for it:

```
#start {
	padding: 10px 25px;
	border-radius: 15px;
}
```

You can find a more comprehensive explanation on CSS and all the different styles you can add to HTML elements at this link: https://www.w3schools.com/css/

## JavaScript
The main focus of this project will be using JavaScript to make the website intractable and dynamic.

JavaScript is a client-side programming language that is used by most websites you would see today. The fact it is client-side means that it’s code gets run in the user’s browser - on the user’s computer — compared to server-side languages that get run on the servers that provide the website files to the user (i.e. client).

#### Variables
In JavaScript, you store information (such as numbers, words, etc..) in what are called **variables**. There are three ways of declaring a new variable:

	* `let`  and  `var`  create variables that can be modified later on.
	* `const` which creates variables that have a fixed value and cannot be modified (i.e. they are constant).

For example:

```
// This is a comment and gets ignored by the browser

// Creating a variable with a number value of 5
let score = 5;

// score now has the value 15
score = 15;

// This creates a variable with a value of "john"
const name = "john";

// This line of code will not work since `name` is a constant
name = "paul";
```

If a variable doesn’t need to be changed it’s usually good practice to make it a `const`, otherwise use `var` or `let`.

Variables can be modified with values and other variables. Since JavaScript is a loosely-typed language, if a variable was a number it could be changed into a word (called a String), or even hold no value — in which case the variable would be `undefined` . 

For example:

```
let a = 5;
let b = 10;

let c = a + b; 	// c will have a value of 15 (5 + 10)
c++;				// c will have a value of 16 (15 + 1)
c += a;			// c will have a value of 21 (16 + 5)
c *= 2;			// c will have a value of 42 (21 * 2)
c = "C"			// c will have a value of "C"
```


#### Functions
JavaScript also allows you to declare a run **functions**. A function is a block of code that can be run multiple times and helps with reducing duplicate code and code readability.

You can define a function multiple ways in JavaScript, however, in this project we will primarily be looking at the ES6 method of declaring functions, for example:

```
/* (this is how you create multi-line comments btw)
 * Define a new function called `addTwo` that takes in a value
 * and adds 2 to it, returning the new value
 */
const addTwo = (value) => {
	let newValue = value + 2;
	return value + 2;
};

/* 
 * Call the above function with the value 3, which then
 * returns the value 5.
 */
let amount = addTwo(3);

// This will output the number 5
console.log(amount);
```


#### Arrays and Lists
You can also create lists of values known as arrays. You use square brackets to define an array. Values are separated by commas. You can initialise (create) empty arrays, or arrays with pre-filled values, for example:

```
let scores = [5, 2, 19, 7, 2];
let emptyArray = [];

// You can access values in an array by requesting an index:

// This will have a value of 2.
let score = scores[4];
// This will have a value of 5
let score2 = scores[0];

// Note that the indices start at 0. i.e: [0, 1, 2, 3, 4, ...]

```

Arrays also have built-in functions and properties that you can access to modify them:

```
let values = [];

// The .push() function adds a value to the end of an array
values.push(5);		// values is now [5]
values.push(2); 		// values is now [5, 2]

// The .pop() fucntion removes the last element from an array
let removed = values.pop();		// values is now [5]

// This will output the value 2
console.log(removed);

// You can get a count of how many elements an array contains
// with the .length property:
let size = values.length;		// size with have a value of 1
```

#### Objects
One of the most powerful things about JavaScript are its objects. Objects are variables that are similar to arrays, in the sense that they contain several values, however, instead of being a numbered list of values — values in an object are created and accessed as key-value pairs. And rather than square brackets, objects are defined using curly braces.

For example:

```
let obj = { 
	firstName: "John", 
	lastName: "Smith" ,
	age: 42
};

// Name with have a value of "John Smith"
let name = obj.firstName + obj.lastName;

// The value of age in the object is now 43 instead of 42
obj.age = 43;

/* 
 * You can also add a key-value pair to an object after
 * it has been created:
 */
obj.hairColour = "brown";

// obj would now look like this:
obj = {
	firstName: "John",
	lastName: "Smith",
	age: 43,
	hairColour: "brown"
};
```

#### Class’s
While JavaScript isn’t a proper Object Orientated programming language like C# or Python, you can still create class’s. In JavaScript a class is a template for how to create an object — kinda like we were doing manually before.

The basic syntax for a class is:

```
class Person {
	/* 
	 * The constructor function gets run when the class is
	 * created and can take in parameters for the class
   */
	constructor(name, age) {
		// You create and access class properties using the
		// `this` keyword:
		this.name = name;
		this.age = age;
	}

	/* You can also define functions for a class, they look a
	 * little different to how we defined functions before
	 * though
	 */
	setAge(newAge) {
		this.age = newAge;
	}
}

// You create a new `instance` of a class like this:
let person1 = new Person("Sam", 22);
let person2 = new Person("Sophie", 28);

// This will output "Sam"
console.log(person1.name);

/* Whereas this will output "Sophie", since person1 and
 * person2 are two unique objects, just created from the same
 * template
 */
console.log(person2.name);

// Using class functions
person1.setAge(24);
// This will now output 24
console.log(person1.age); 
```

#### Accessing HTML in JavaScript
What makes JavaScript so useful is the ability to be able to modify and create HTML elements without reloading the page. To do this we use the `document` global object. This is a a built-in variable that you don’t need to create and contains a number of functions that let you access the DOM (Document Object Model, i.e. the HTML).

For this project, we only need one of these functions — `document.getElementById()`. This lets us request an element by the value in its ID attribute.

`<button id="myButton">Click Me!</button>`

For example if we wanted to access the above element in our JavaScript, we would use `getElementById` like this:

`const button1 = document.getElementById('myButton');`

Now we have an `HTMLElement` object representing our button. This exposes several more functions we can now use to manipulate our button.

For example:

```
const button1 = document.getElementById('myButton');

/* 
 * We can add a click event to our button that will run a
 * function when clicked
 */
button1.addEventListener('click', () => {
	console.log("Button has been clicked!");

	// We can also change the text inside the button
	button1.textContent = "Clicked!";
});
```


### Learn more
This has been a **very** brief overview of JavaScript. If you want to learn more, check out https://www.w3schools.com/js/.
