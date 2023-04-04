class Snake {
  constructor() {
    /* Create the initial snake body with an array of squares
     * (remember squares are represented as coordinate 
     * pairs: { x: 1, y: 4 }) 
     */

    // Set the initial snake direction, i.e. this.direction = Direction.Left
    this.body = [{ x: 5, y: 1 }];
      
      this.direction = Direction.Right;
  }

  grow () {
    // Add another square to the end of the snake 
    this.body.push({
      x: this.body[-1]
    });
  }

  draw() {
    // Set the fill style to the snakeColor

    // Loop through the snakes body, using fillRect to draw each square on the canvas
    context.fillStyle = snakeColor;

    this.body.forEach(square => {
      let x = square.x * resolution;
      let y = square.y * resolution;

      context.fillRect(x, y, resolution, resolution);
    });
  }

  move() {
    /* Loop through every square of the snakes body from the tail to
     * the head (excluding the 0th element (the head)) setting the position to the square in front of it
     */

    // Move the 0th element of the snakes body (the head) depending on the direction of the snake
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i] = { ...this.body[i - 1] };
    }

    switch(this.direction) {
      case Direction.Up:
        this.body[0].y--;
        break;
      case Direction.Down:
        this.body[0].y++;
        break;
      case Direction.Left:
        this.body[0].x--;
        break;
      case Direction.Right:
        this.body[0].x++;
        break;
    }
  }

  checkCollision() {
    // Check if the snake has hit a wall (convert head coordinates to actual position)
    let x = this.body[0].x * resolution;
    let y = this.body[0].y * resolution;

    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
      return true;
    }

    // Now we just want to use the grid coordinates of the head
    x = this.body[0].x;
    y = this.body[0].y;

    // Check to see if the snake has hit itself
    if (this.body.length > 1) {
      for (let i = 4; i < this.body.length; i++) {
        if (this.body[i].x === x && this.body[i].y === y) {
          return true;
        }
      }
    }

    // Check to see if the snake has "eaten" (collided with) some food 
    if (x == gameState.food.x && y == gameState.food.y) {
      this.grow();
      spawnFood();
      setScore(gameState.score + 1);
    }
  }
}