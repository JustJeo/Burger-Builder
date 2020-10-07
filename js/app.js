console.log("AYO! This is Jeo!")

//Declare multiple things when the page loads
    // Buttons to add ingredients
    // Timer stuck at 3:00
let timer = 15;
    // Current Score set at 0
let score = 10;
    // High Score set at whatever the current high score is
let highscore = 0;
        // NOTE! High score WILL reset with every reload

// Timer Countdown that runs when "begin" button is clicked

// Start Game!
let game = {
    playerBurger: [],
    customerBurger: ["topBun", "patty", "bottomBun"],
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
    },

// Create a "playerBurger" function
    // Starts with an empty array for players and with each ingredient button pressed will UNSHIFT the ingredient into the array.
    // Building from the bottom up will mean an UNSHIFT and not a POP
    // REMINDER that UNSHIFT will add one or more elements to the beginning of an array
    playerOrderr: function() {
        const playerChoices = playerBurger;
        
    },

// document.getElementById("bottomBun").addEventListener("click", buttonClick);
// document.getElementById("patty").addEventListener("click", buttonClick);
// document.getElementById("cheese").addEventListener("click", buttonClick);
// document.getElementById("lettuce").addEventListener("click", buttonClick);
// document.getElementById("tomato").addEventListener("click", buttonClick);
// document.getElementById("onion").addEventListener("click", buttonClick);
// document.getElementById("topBun").addEventListener("click", buttonClick);

// Burger Check!
    orderCheck: function() {
        if (playerBurger === customerBurger) {
            console.log("Great Job! 50 Points!")
        } else {
            console.log("Wait! Something's wrong!")
        }
    },

// Time's Done function
    timeDone: function () {
        if (timer === 0) {
            this.highscoreCheck()
            results.innerHTML = "Here's the results!"
        }
        game.highscoreCheck()
    },

    // When timer runs down to 0
        // End Game
        // Compare current score to high score
    highscoreCheck: function () {
        if (score > highscore) {
            highscore = score
            document.querySelector(".results").innerHTML = "Great job! You got a new high score! You are burger master!"
        } else if ((score > 0) && (score < highscore)) {
            document.querySelector(".results").innerHTML = "You've got some happy customers!"
        } else {
            document.querySelector(".results").innerHTML = "Wow. You did terrible. What was that?"
        }
    }
}
    let results = document.createElement("h2")
    results.setAttribute("class", "results")
    results.innerHTML = "Get those orders out!"
    document.body.appendChild(results)

    function timeBegin() {
        const timeInterval = setInterval(() => {
            if (timer === 0) {
                clearInterval(timeInterval);
                document.querySelector("#timer").removeEventListener("click", beginGame);
                game.timeDone()
            } else {
                timer--
                console.log(timer)
            }
            const timerText = document.getElementById("timer")
            timerText.innerHTML = `Timer: ${timer}s`
        }, 1000)
    }

const beginGame = document.getElementById("begin")
beginGame.addEventListener("click", () => {
    timeBegin()
    game.customerOrder()
    console.log(game.customerBurger)
})