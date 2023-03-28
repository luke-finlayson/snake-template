// A simple object that declares possible directions the snake could move in
// We could just use strings - but this way reduces the chance of spelling mistakes
const Direction = {
  Left: "left",
  Right: "right",
  Up: "up",
  Down: "down"
};

// Here's a template for our snake class
class Snake {
  constructor() {
  }

  grow() {
    // Increase the size of the snake here (i.e. add another sqaure to the body)
  }

  draw() {
    // Draw the snake's body on the canvas
  }

  update() {
    // Move the snake forwards one square
  }

  checkCollision() {
    // Check to see if the snake has collided with a wall

    // Check to see if the snake has collided with itself

    // Check to see if the snake has eaten some food
  }
}