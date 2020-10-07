console.log("AYO! This is Jeo!")

//Declare multiple things when the page loads
    // Buttons to add ingredients
    // Timer stuck at 3:00
let timer = 15;
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

function timeBegin() {
    const timeInterval = setInterval(() => {
        if (timer === 0) {
            clearInterval(timeInterval);
            document.querySelector("#timer").removeEventListener("click", beginGame);
        } else {
            timer--
            console.log(timer)
        }
        const timerText = document.getElementById("timer")
        timerText.innerHTML = `Timer: ${timer}s`
    }, 1000)
}

// Start Game!
let game = {
    playerBurger: [],
    customerBurger: ["topBun", "patty", "bottomBun"],
    // Create a button for starting the game
        // When clicked it will fire multiple functions
            // Timer Countdown

            // High Score

// Create a "customerBurger" function
    // Creates an array where it ALWAYS starts with a "topBun", randomizes the middle ingredients, ALWAYS has a "patty", and always ends with a "bottomBun"
    customerOrder: function () {
        let randomOrder = Math.floor(Math.random() * 4);
            if (randomOrder === 3) {
                game.customerBurger.splice(1, 0, "onion")
                game.customerBurger.splice(1, 0, "cheese")
                game.customerBurger.splice(1, 0, "tomato")
                game.customerBurger.splice(1, 0, "lettuce")
            } else if (randomOrder === 2) {
                game.customerBurger.splice(1, 0, "lettuce")
                game.customerBurger.splice(1, 0, "cheese")
                game.customerBurger.splice(1, 0, "onion")
            } else if (randomOrder === 1) {
                game.customerBurger.splice(1, 0, "lettuce")
                game.customerBurger.splice(1, 0, "cheese")
            } else {
                game.customerBurger.splice(1, 0, "cheese")
            }
        }
    }
    game.customerOrder();
    console.log(game.customerBurger)

// Create a "playerBurger" function
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