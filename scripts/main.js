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
    // Setup the initial direction and body array here
  }

  grow() {
    // Increase the size of the snake here (i.e. add another sqaure to the body)
  }

  draw() {
    // Use the canvas context to draw the snake here
  }

  update() {
    // Move the snake forwards one position
  }

  checkCollision() {
    // Check if the snake has hit a wall

    // Check if the snake has hit itself

    // Check if the snake has eaten some food
  }

  setDirection(direction) {
    // Change the snakes direction.
  }
}
c