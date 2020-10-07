console.log("AYO! This is Jeo!")

//Declare multiple things when the page loads
    // Buttons to add ingredients
    // Timer stuck at 3:00
let timer = 180;
    // Current Score set at 0
let score = 0;
    // High Score set at whatever the current high score is
let highscore = 0;
        // NOTE! High score WILL reset with every reload

// document.getElementById("bottomBun").addEventListener("click", buttonClick);
// document.getElementById("patty").addEventListener("click", buttonClick);
// document.getElementById("cheese").addEventListener("click", buttonClick);
// document.getElementById("lettuce").addEventListener("click", buttonClick);
// document.getElementById("tomato").addEventListener("click", buttonClick);
// document.getElementById("onion").addEventListener("click", buttonClick);
// document.getElementById("topBun").addEventListener("click", buttonClick);

// Start Game!
let game = {
    
}
    // Create a button for starting the game
        // When clicked it will fire multiple functions
            // Timer Countdown
function timeBegin() {
    const timeInterval = setInterval(() => {
        if (timer === 0) {
            clearInterval(timeInterval);
            document.querySelector(".timer").removeEventListener("click", buttonClick);
        } else {
            timer--
            console.log(timer)
        }
        const timerText = document.getElementsByClassName("timer")
        timerText.innerHTML = `Timer: ${timer}s`
    }, 1000)
}
            // High Score

// Create a "customerOrder" function
    // Creates an array where it ALWAYS starts with a "topBun", randomizes the middle ingredients, ALWAYS has a "patty", and always ends with a "bottomBun"

// Create a "playerOrder" function
    // Starts with an empty array for players and with each ingredient button pressed will UNSHIFT the ingredient into the array.
    // Building from the bottom up will mean an UNSHIFT and not a POP

// Burger Check!
// if (playerBurger === customerBurger) {
//     console.log("Great Job! 50 Points!")
// } else {
//     console.log("Wait! Something's wrong!")
// }

// Time's Done function
    // When timer runs down to 0
        // End Game
        // Compare current score to high score
            // if (score > highscore) {
            //     highscore = score
            //     console.log("Great job! You got a new high score!")
            // } else if (score > 0) && (score < highscore) {
            //     console.log("You've got some happy customers!")
            // } else {
            //     console.log("Wow. You did terrible. What was that?")
            // }

const beginGame = document.getElementById("begin")
beginGame.addEventListener("click", () => {
    timeBegin()
})