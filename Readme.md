# Snake Game

The Snake game is a classic arcade game that has been enjoyed by players for decades. In this game, the player controls a snake that moves around the game board, eating food and growing longer. 

The goal of the game is to eat as much food as possible without running into the walls or the snake’s own body.

In this project, we will design and build a website that allows users to play the Snake game. We will be using a combination of HTML, CSS and JavaScript to design the game board, snake, food and implement the game logic.

Hopefully by the end of this project you should have something that looks similar to the below game.

<img src="outline/Screenshot%202023-03-28%20at%201.34.15%20PM.png" width="250" />


# Setting Up
Before we can start creating the game you will need to setup a development environment on your computer (if you haven’t already).

If you are using a computer that has been provided for you, this will already be setup. You can find the project folder on the desktop.

1. **Code Editor** — You will need a text editor to write your website’s code. Some popular options include Visual Studio Code, Sublime Text, and Atom.
2. **Project Folder** — Create a new folder on your computer to store your project files.
3. **Download Project Files** — A project template has already been setup, you can download it from: https://github.com/luke-finlayson/snake-template/releases/download/v1.0/snake-template.zip. Alternatively, feel free to setup the website yourself.

See the sections at the end, or https://w3schools.com for more help on using HTML, CSS and/or JavaScript.

# How it Works
In the template folder you will find a couple of files and folders. In the root of the folder you’ll find an `index.html` file. This is where your HTML code will live, and you’ll open this file to view your website in a browser. At the moment if you try to open it, you’ll just get a blank page. That’s because we haven’t added any HTML elements yet.

In the folder named `styles` you’ll find a `styles.css` file. This will contain all the CSS rules that you’ll use to fine-tune the layout and visual design of your website.

In the folder named `scripts` you’ll find a `main.js` file. This is where most of the action will be happening, and will contain all the game logic and functions. You’ll notice there is already some code in here that will help later on when you write the code for your snake.


## The Page Layout
Now that you’ve got everything setup and ready to go, we’ll start by putting together the basic layout of your site. This includes adding some HTML elements and using CSS to adjust the layout and visual style of those elements.

Most of our game will be drawn onto an HTML `<canvas>` element. This element lets us use javascript to draw shapes onto a blank rectangle. (More on this later).

We will also need a button that lets users start and restart the game, along with some text element, like a `<p>`  or `<h1>` tag to display the current score. _(See the image in the introduction for an example of this)_

Open the `index.html` file and replace the comment `<!— Page elements go here -->`  with a header section that contains at least a text element to display the current score, and button that will start the game. Feel free to add more elements, like headers and labels etc…

Try aiming for a layout similar to the one below (which you’ll notice is the same layout as what was used in the exemplar).

You can use `display: flex` in your CSS rules for the section containers (represented by `<header>` and `<div …>` in this image. This will sort the child elements using flex box, which is a powerful layout format that lets you easily align items how you want using the rules `align-items` and `justify-content`. Have a look at https://css-tricks.com/snippets/css/a-guide-to-flexbox/ for a great guide on how to use flexbox CSS rules.

<img src="outline/Screenshot%202023-03-28%20at%201.24.57%20AM.png" width=600 />

One way you could achieve the above layout in the `<header>` would be with the following CSS rule:
```
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
```

Note: `justify-content: space-between` will put as much of a gap as possible between child elements. `align-items: center` centres the child elements vertically.

You’ll also need to add a `<canvas>` element outside of your header section. For this project, add the canvas element with a width and height of 500. Don’t add any text or child elements to this element, just make sure you include the opening and closing tags:

`<canvas width="500" height="500"></canvas>`

Play around with CSS rules to get your website to look however you want. Check out W3Schools for a whole bunch of CSS rules you can use. Just don’t change the width or height of the canvas element as that could cause issues with the game later on.

## The Canvas
As mentioned before, an HTML canvas is a blank rectangle that we can draw shapes onto. We created the canvas with a fixed width and height of 500 — this means that our canvas will be 500 pixels wide and 500 pixels high.

When we draw shapes onto this canvas, we specify their position using coordinates. However, unlike the coordinates starting from the **bottom left** corner like you might be used to, in computer graphics coordinates generally start from the **top left** corner, and `y` values increase the lower you get.

This can make things a little unintuitive if you’re used to graphs in maths, however hopefully the below image helps. Essentially, increasing the `y` coordinate moves the point further down the canvas — instead of up.

<img src="outline/Screenshot%202023-03-28%20at%201.50.53%20AM.png" width="600" />


### Drawing onto a Canvas

Before we can start drawing onto our canvas, we need to grab a reference to the canvas and its “context”. To access your canvas in JavaScript you can use the `document.querySelector` function. You can pass in a query as the function parameter, and it will return the first element it finds that matches that query. In this case we will simply pass it the name of the element we want to get — `"canvas"`, e.g:

`const canvas = document.querySelector("canvas");`

Now that we have access to the canvas in our JavaScript, we can do things like access the width and height, and other properties of our canvas that can be useful when trying to position things. For example we will need to use the width and height properties later on when checking if we are colliding with the ‘walls’ of the game.

`let width = canvas.width;`

Another object we need to get from the canvas is the canvas **context**. This context object is how we draw things onto the canvas. To retrieve the context we can use the `getContext('2d');`, for example:

`const context = canvas.getContext('2d);`

With the `context` we can now use a number of functions to draw shapes and other graphical elements onto our canvas. For this project we will just be focusing on drawing rectangles in various colours — but feel free to play around with drawing other types of shapes. You can even draw images onto a canvas. Learn more here: https://www.w3schools.com/html/html5_canvas.asp

#### Drawing a rectangle
As mentioned before, the `drawRect` function takes 4 parameters. The `x` and `y` coordinates of the top left corner of the rectangle, and the `width` and `height` of the rectangle. For example:

```
// context.drawRect([x], [y], [width], [height]);
context.drawRect(10, 10, 50, 80);
```

The above code will draw a rectangle like this:

<img src="outline/Screenshot%202023-03-28%20at%201.28.25%20PM.png" width="500" />


#### Setting the colour to use
Rather than specifying the colour when you draw a shape — you instead set the colour to use when drawing before calling the `drawRect` function by setting the `fillStyle` property. For example:

```
// Set the fill style to blue
context.fillStyle = "blue";
// Draw a rectangle - this rectangle will be blue
context.drawRect(x, y, width, height);

// Now set the fill style to red
context.fillStyle = "red";
// Draw another rectangle - this rectangle will be blue
context.drawRect(x2, y2, width2, height2);
```

You can also use hex colour codes to use even more colours than the default named ones - you can use a tool like https://g.co/kgs/qthJQr to pick out a colour and get its hex code.

`context.fillStyle = "#ababab;`

Have a go at drawing various sized and coloured rectangles on the canvas, try using the width and height of the `canvas` to draw a rectangle that takes up the entire canvas.


### Using a Grid

For the snake game we are making, we want to make sure our snake adheres to a grid so that its movements line up with previous movements, as well as the food. 

Using a grid will also make it easy to understand what’s going on in the code, as game elements can occupy the same square on the grid which makes collision detection (is one object touching another) easy.

While we could just use the existing grid of pixels, the grid squares will be too small for the game to be usable. Instead — we can decide on a **resolution** or grid density. Instead of using the raw pixel coordinates - we apply our own coordinate system onto the canvas one. 

That sounds complicated, but basically we define the size of a grid square in pixels and each square is one unit of our coordinate system. Then our snake and food elements can be positioned on this grid instead - and when we go to draw the shapes that make up these game objects we just multiply by the grid square size to get the actual coordinate on the canvas.

This can be seen in action in the below image. Here we have chosen a grid resolution of 16x16. This means that each grid square will need to be 31.25px wide and 31.25px high. Our snake can then have a position like **(7, 7)** and a width of one grid square. 

<img src="outline/Screenshot%202023-03-28%20at%202.11.32%20AM.png" width="600" />

Note how the position of the snake is centred on its top left corner. This is because of how drawing rectangles on canvases work — you define the coordinates of that top left corner and as well as a width and height.

e.g: `context.drawRect(x, y, width, height);`

In your `main.js` define a grid square size to use. This can just be a `const` that has a number value. e.g:

`const resolution = 30`;

Now we can use that value when we need to draw onto the canvas.

```
// x and y coordinates in our grid
let x = 2;
let y = 5;

// Convert x and y into actual coordinates on the canvas
let xPos = x * resolution;
let yPos = y * resolution;

/* 
 * Now we use xPos and yPos when calling drawRect.
 *
 * We can also use our resolution value again as the
 * width and height to make the rectangle take up one
 * grid square.
 */
context.fillStyle = "green";
context.drawRect(xPos, yPos, resolution, resolution);
```


## Putting together our Snake
Now that we know how to use HTML canvases, and have an idea of how we will organise the positions of our snake and its food on the game board we can start writing the code of the actual snake.

We will be representing our snake in our code using a JavaScript class. We will make a class that contains all the functions our snake will need — i.e:

* `draw()` -> that will draw the current snake onto the canvas
* `update()` -> that will update the snakes position to move forwards one square
* `grow()` -> that will increase the size of the snake by one square
* `checkCollision()` -> that will check to see if the snake has hit anything, or itself and returns the value `true` if it has
* `setDirection()` -> which takes in a string representing a direction, like `”up"`, and changes the snakes direction to that new direction if it can.

We will also include a constructor that will setup the initial direction and snake body shape.

While our snake could be drawn as one big rectangle, this gets complicated when our snake start to turn corners and take on different shapes. Instead, we will represent our snake as a line of squares.

<img src="outline/Screenshot%202023-03-28%20at%201.46.21%20PM.png" width="550" />

This way each square has its own unique position, and can be placed anywhere. (Although we want to make sure that our snake stays in one piece).

We can store the position of each of these square sections in an array. Each element in the array can be an object that has an `x` property and a `y` property that stores the coordinates of that square.

For example, if we want to store the above snake in array form:

```
this.body = [
	{ x: 7, y: 7 },
	{ x: 7, y: 8 },
	{ x: 7, y: 9 },
	{ x: 7, y: 10 },
	{ x: 7, y: 11 }
];
```

In your `Snake` class constructor, create a body like the above example. Remember that you declare and access variables in a class using `this.` .

Now in your `draw()` function, write some code that will loop through your `body` array and draw each square on the canvas. You can use a `forEach` loop like this:

```
context.fillStyle = "green";

/* 
 * Here is our forEach loop. The forEach function exists on 
 * every JavaScript array
 */
this.body.forEach((square) => {
	// Don't forget to convert the squares grid coordinates
	let x = square.x * resolution;
	let y = square.y * resolution;

	context.drawRect();
});
```

You should end up with something like this:

```
// Setup canvas, context and resolution here

class Snake {
	// Setup the new instance of the Snake
	constructor() {
		this.body = [ { x: 5, y: 5 }, { x: 4, y: 5 } ];
	}

	// Draw the snakes body
	draw() {
		context.fillStyle = "green";

		this.body.forEach((square) => {
			let x = square.x * resolution;
			let y = square.y * resolution;

			context.drawRect();
		});
	}
	
	// These dots just mean there is more code here
	...
}

// Rest of the game logic goes here
```

We can test if this is working by creating a new instance (object) of our `Snake` class and calling the `draw()` function:

```
let snake = new Snake();
snake.draw();
```

Add the above code to your `main.js` file below the `Snake` class and open your `index.html` file in a web browser (or reload the page if it’s already open).

You should hopefully be greeted by a green rectangle on your canvas element. This is your snake.

## Making the snake move a little
Now that we can draw the snake on our canvas — we want to try make it move. We make the snake move by updating the position of each square and calling the `draw()` function again to redraw the snake in the new position. We will write an `update()` function in our `Snake` class to do this.

For this snake game, we want the tail of the snake to follow the path laid out by the head of the snake. Otherwise the snake would just move as one big chunk and wouldn’t be very fun.

An easy way to accomplish this is to set the position of each square to the position of the one in front of it. You can see this in action in the below image:

<img src="outline/Screenshot%202023-03-28%20at%202.30.31%20PM.png" width="500" />

After the update function, you can see that square **3** is now in the same position that was occupied by square **2**.

This works around corners too, since we store the squares in an array which is just one line of elements:

<img src="outline/Screenshot%202023-03-28%20at%202.33.21%20PM.png" width="550" />

We keep the head of the snake as the first element in the array, and the tail at the end of the array. We do this so that we can easily access the head with `this.body[0]`. This also makes adding squares to the snake easy, since the `.push()` function adds elements to the end of an array (i.e. it will add a square to the tail of the array).

Setting the position of each square to the one in front of it works perfectly for every square except the head of the snake — as it doesn’t have any square in front of it. Instead — we check which direction the snake is travelling in, and increase or decrease the head squares position according to that direction.

<img src="outline/Screenshot%202023-03-28%20at%202.42.42%20PM.png" width="600" />

To be able to do this we will need another property in our `Snake` class to store the current direction. You’ll see that we already have an object in our `main.js` that contains all the possible directions. We can use this object like this to choose a direction:

`this.direction = Direction.Right;`

Set a direction for the snake in the `Snake`  constructor function. Doesn’t matter too much what the initial direction is at this point — but keep in mind later on you don’t want your snake doubling back on itself (the head crossing over the body).

Your constructor should now look something like this:

```
constructor() {
	this.body = [ { x: 5, y: 9 } ];
	this.direction = Direction.Right;
}
```

Now add code to the `update()` function in the `Snake` class that starts by looping through the body of the snake from the tail to the head (start at the end of the array and work your way forwards). Set each squares position to the position of the one in front of it [in the array].

For this loop, we want to use a `for` loop rather than the `forEach` loop we used before since it will give us more control over how we loop through the array:

```
for (let i = this.body.length - 1; i > 0; i--) {
	// Retreive the square in front of this one from the array
	let former = this.body[i - 1];
	
	// Update the position of this square
	this.body[i] = {
		x: former.x,
		y: former.y
	};
}
```

Here you can see we declare the `for` loop by setting up the starting index, in this case we make it the index of the last element of the array:

`let i = this.body.length - 1`

We then tell the `for` to loop while the value of  `i` is more than `0` . i.e. we stop the loop when we reach the head of the snake.

`i > 0`

The third parameter tells the `for` loop how to change `i` after each iteration of the loop. In this case we want to reduce `i` by `1` each time, since we are starting from the back of the array (the highest value) and working our way to the front (the smallest value).

`i--` which can also be written as `i = i - 1`

We can then move the head of the snake depending on the direction. To check what the direction is, and apply the appropriate movement we’ll use a `switch` statement. A `switch` statement takes in a value and depending on what the value is, will run the code in the matching `case` For example:

```
switch (this.direction) {
	case Direction.Up:
		this.body.y -= 1; // Decrease y by 1
		break; 
	case Direction.Down:
		this.body.y += 1; // Increase y by 1
		break;
	case Direction.Left:
		this.body.x -= 1;
		break;
	case Direction.Right:
		this.body.x += 1;
		break; // Don't forget to break after each case
}
```

Add a `switch` statement to change the position of the head of the snake below your loop from before in the `update()` function.

Add another line of code above your previous `snake.draw()` to call the `update()` method.

```
let snake = new Snake();
snake.update(); // Add this line here
snake.draw();
```

Refresh your website — you should notice that the snake will have moved one square in the direction you told it to.

## Making the snake move a lot
Now that we can move the snake one square, we want to continuously call that `update()` and `draw()` function every couple of milliseconds so that our snake appears to slither along the canvas.

We can accomplish this using the built-in `setInterval()` function. This function takes two parameters, a function to repeatably call, and a time in milliseconds that will be delay between each call of the given function.

Before we use `setInterval()` though, we will need to write a function **outside** of our `Snake` class that will call the snakes `update` function, wipe any previous shapes from the canvas and redraw using the snakes `draw` function. For example we can make another function called `update`:

```
const update = () => {
	// Update the snakes position
	snake.update();

	// clearRect will erase a rectangluar section of the canvas
	// Here we clear the whole canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Redraw the snake on the canvas
	snake.draw();
}
```

Remove the previous lines where you update and draw the snake - but leave the one where you create the snake and add a new `update` function **below** your `Snake` class that will update and redraw the snake.

Your `main.js` should now look something like this:

```
// Retrieve the canvas and context
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const resolution = 20;

// Declare the snake class
class Snake { ... }

// Declare a function that updates the game elements
const update = () => {
	snake.update();
	context.clearRect(0, 0, canvas.width, canvas.height);
	snake.draw();
}

// Create the snake
let snake = new Snake();

// Start exectuing the update function every 0.2s
let interval = setInterval(update, 200);
```

If you reload the page your snake should now move across the canvas in the direction you specified earlier.

We can adjust how fast the snake moves by increasing or decreasing the delay of `setInterval`. The higher the number, the more time between snake updates and therefore the slower the snake moves. Feel free to adjust this time to get the snake moving the speed you want it to.

## Change the snakes direction
Now that our snake moves, we want to be able to control its direction so that it doesn’t just run off the page.

Since we already created the `switch` statement that handles multiple directions, we only need to add a keyboard listener that updates the snakes `direction` property depending on which key was pressed, and the snake should move in that direction.

To add a keyboard event listener, we use the `document` object along with the `addEventListener` function. This function take two parameters, the type of event to listen for, and the function to run when that event occurs. The function that gets called will be passed an `event` object that contains information about the event that occurred — in this example it will give us the key code of the key that was pressed.

Since we are listening for key presses, we want to listen for the `keydown` event. We can determine which key was pressed with another `switch` statement:

```
document.addEventListener('keydown', (event) => {
	switch (event.code) {
		case "ArrowUp":
			snake.direction = Direction.Up;
			break;
		case "ArrowDown":
			snake.direction = Direction.Down;
			break;
		case "ArrowLeft":
			snake.direction = Direction.Left;
			break;
		case "ArrowRight":
			snake.direction = Direction.Right;
			break;
	}
});
```

Setup this event listener somewhere in your code — just make sure it’s **outside** of your `Snake` class.

Reload the page and you should now be able to control the snake using the arrow keys!

One issue you may notice however though, is that you are able to make the snake do a 180º turn — which isn’t how we want the game to behave because then the snake overlaps itself as it travels the other way.

I.e. if the snake is going up — we don’t want to be able to change its direction to go down. Instead the player would need to turn left or right first and then go down.

We can fix this by checking the current snake direction before changing it, only changing it if the current direction is not the opposite of the new direction:

```
case "ArrowUp":
	if (snake.direction !== Direction.Down) {
		snake.direction = Direction.Up;
	}
	break;
```

Modify your `switch` statement to include these direction checks for all four directions.

Reload your website and make sure you can’t suddenly turn in the other direction.

## Collisions
Now we can control our snake to prevent it from going off the page, but we want to go further. If the snake hits the edge of the canvas, we want the game to end.

To do this, we can add a check after every `snake.update()` to check to see if the head of the snake has gone off the edges of the canvas.

The head will have gone outside the canvas if its `x` coordinate is less than 0 (the left edge) or more than the width of the canvas (the right edge).

Likewise with checking the `y` coordinate, the snake will have gone off the edge if the `y` value is less than 0 (the top of the canvas) or more than the height of the canvas (the bottom of the canvas).

Remember that we need to convert the grid coordinates of the snakes head square to actual coordinates of the canvas before comparing with the canvas width and height.

We return a boolean (true or false) as the result:

```
checkCollision() {
	let x = this.body[0].x * resolution;
	let y = this.body[0].y * resolution;

	// Return true if the x coordinate is outside the canvas
	if (x < 0 || x >= canvas.width) {
		return true;
	}

	// Return true if the y coordinate is outside the canvas
	if (y < 0 || y >= canvas.height) {
		return true;
	}

	// Otherwise we return false -> no collisions
	return false;
}
```

To stop the game we will need to stop that `setInterval`  function from calling our `update` function. If you notice from before, when we called that function we saved it in a variable called `interval`.

`let interval = setInterval(update, 200);`

To stop that function from running, we can call the `clearInterval` function with `interval` as the parameter:

`clearInterval(interval)`

Add the code for checking for collisions with walls in your `Snake` class. Then implement this function in your main `update()` function outside the `Snake` class:

```
const update = () => {
	snake.update();
	
	if (snake.checkCollision()) {
		// Here we want to end the game,
		clearInterval(interval);
		// Return early so we don't draw the incorrect position
		return;
	}

	context.clearRect(0, 0, canvas.width, canvas.height);
	snake.draw();
}
```



## Spawn food for the snake to eat

## Add functionality to the start button

## Bonus Challenges


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
