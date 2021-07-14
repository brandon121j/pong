// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Gets the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Gets the users paddle 
const userPaddle = document.querySelector('.player-paddle')

// Gets the ball
const ball = document.querySelector('.ball');

// Score updater
let pScore = 0;
let cScore = 0;

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 0;

// The y-velocity of users paddle
let userPaddleYPosition = 175;
let userPaddleYVelocity = 0;

// The x and y velocity and position of the ball
let ballXPosition = 10;
let ballYPosition = 10;
let ballXVelocity = 5;
let ballYVelocity = 5;

// Shifts direction down
let down = +5;

// Shifts direction up
let up = -5;

// Shifts direction right
let right = +5;

// Shifts direction left
let left = -5;

// Up Arrow Feedback
upArrow = false;

// Down Arrow Feedback
downArrow = false;

// Update the pong world
function update() {

    // console.log('User Paddle Position: ', userPaddleYPosition);
    // console.log('Ball X Position: ', ballXPosition);
    // console.log('Ball Y Position: ', ballYPosition);

    // Player Score variable
    document.querySelector('#player').innerHTML = (pScore);

    // Computer Score variable 
    document.querySelector('#computer').innerHTML = (cScore);

    // Key press and release event listeners
    window.addEventListener('keydown', function(e) {
    // Gets keypress data
    switch(e.keyCode) {
        // Up arrow key 
        case 38:

        // Sets upArrow to true
        upArrow = true;
        break;

        // Down arrow key
        case 40:

        // Sets downArrow to true
        downArrow = true;
        break;
    }
});
    window.addEventListener('keyup', function(e) {
    // Gets keypress data
    switch (e.keyCode) {
        // Up arrow key 
        case 38:

        // Sets upArrow to true
        upArrow = false;
        break;

        // Down arrow key
        case 40:

        // Sets downArrow to true
        downArrow = false;
        break;
    }
});

    console.log('Player Score: ', pScore)

    // Controls AI paddle 
    computerPaddleYPosition === 0 ? computerPaddleYVelocity = down : 0;
    computerPaddleYPosition === 400 ? computerPaddleYVelocity = up : 0;
    
    // Prevents ball from leaving game area
    ballXPosition > 675 ? ballXVelocity = left : 0;
    ballXPosition < 5 ? ballXVelocity = right : 0;
    ballYPosition > 475 ? ballYVelocity = up : 0;
    ballYPosition < 5 ? ballYVelocity = down : 0;

    // Adds User Paddle collision 
    if (ballXPosition <= PADDLE_WIDTH && ballYPosition <= userPaddleYPosition + PADDLE_HEIGHT) {
        ballXVelocity = right;
    }

    // Controls for User Paddle
    if (upArrow === true) {
        userPaddleYVelocity = up;
    }
    else if (downArrow === true) {
        userPaddleYVelocity = down;
    }
    else {
        userPaddleYVelocity = 0;
    }

    // Prevents User Paddle from leaving game area
    if (userPaddleYPosition < 0) {
        userPaddleYPosition = 0;
    }
    if (userPaddleYPosition > 400) {
        userPaddleYPosition = 400;
    }

    // Player Scoring
    if (ballXPosition >= 680) {
        pScore++;
        ballXPosition = 10;
        ballYPosition = 10;
    }

    // Computer scoring
    if (ballXPosition <= 1) {
        cScore++;
        ballXPosition = 10;
        ballYPosition = 10;
    }

    // Updates the users paddle position
    userPaddleYPosition = userPaddleYPosition + userPaddleYVelocity;

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    //Apply the users y-position
    userPaddle.style.top = `${userPaddleYPosition}px`

    // Apply the computer y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    // Updates ball x position 
    ballXPosition = ballXPosition + ballXVelocity;

    // Updates ball y position 
    ballYPosition = ballYPosition + ballYVelocity;

    // Apply the ball x-position
    ball.style.left = `${ballXPosition}px`

    // Apply the ball y-position
    ball.style.top = `${ballYPosition}px`


    // Shows data in console
    // console.log('computerPaddleYPosition: ', computerPaddleYPosition);
}

// function reverse() {
    // Make Paddle move up as opposed to down
    // computerPaddleYPosition = computerPaddleYPosition - computerPaddleYVelocity;

    // Apply the shifting direction to the paddle
    // computerPaddle.style.top = `${computerPaddleYPosition}px`

    // Shows data in console
    // console.log('computerPaddleYPosition: ', computerPaddleYPosition);
// }



// Call the update() function every 35ms
setInterval(update, 35);







