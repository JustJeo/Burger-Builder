console.log("AYO! This is Jeo!")

//Declare multiple things when the page loads
    // Buttons to add ingredients
    // Timer stuck at 3:00
let timer = 10;
    // Current Score set at 0
let score = 10;
    // High Score set at whatever the current high score is
let highscore = 10;
        // NOTE! High score WILL reset with every reload

// Timer Countdown that runs when "begin" button is clicked
function timeBegin() {
    const timeInterval = setInterval(() => {
        if (timer === 0) {
            game.highscoreCheck()
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
        // When clicked it will fire multiple functions
            // Timer Countdown
            // High Score

// Create a "customerBurger" function
    // Creates an array where it ALWAYS starts with a "topBun", randomizes the middle ingredients, ALWAYS has a "patty", and always ends with a "bottomBun"
    customerOrder: function () {
        let randomOrder = Math.floor(Math.random() * 5);
        if (randomOrder === 4) {
            game.customerBurger.splice(1, 0, "cheese")
            game.customerBurger.splice(1, 0, "lettuce")
            game.customerBurger.splice(1, 0, "tomato")
            game.customerBurger.splice(1, 0, "onion")
        } else if (randomOrder === 3) {
            game.customerBurger.splice(1, 0, "cheese")
            game.customerBurger.splice(1, 0, "lettuce")
            game.customerBurger.splice(1, 0, "onion")
        } else if (randomOrder === 2) {
            game.customerBurger.splice(1, 0, "cheese")
            game.customerBurger.splice(1, 0, "lettuce")
        } else if (randomOrder === 1) {
            game.customerBurger.splice(1, 0, "cheese")
        } else {
            game.customerBurger
        }
    },

// Create a "playerBurger" function
    // Starts with an empty array for players and with each ingredient button pressed will UNSHIFT the ingredient into the array.
    // Building from the bottom up will mean an UNSHIFT and not a POP
    // REMINDER that UNSHIFT will add one or more elements to the beginning of an array
    playerOrderr: function() {
        const playerChoices = playerBurger;
        
    },

    buttonClick: function(event) {
        const gameChoice = ["topBun", "onion", "tomato", "lettuce", "cheese", "patty", "bottomBun"]
        if (event.target.id === "topBun") {
            console.log("Top Bun")
        } else if (event.target.id === "onion") {
            console.log("Onion")
        } else if (event.target.id === "tomato") {
            console.log("Tomato")
        } else if (event.target.id === "lettuce") {
            console.log("Lettuce")
        } else if (event.target.id === "cheese") {
            console.log("Cheese")
        } else if (event.target.id === "patty") {
            console.log("Patty")
        } else {
            console.log("Bottom Bun")
        }
    },

// Burger Check!
    orderCheck: function() {
        if (playerBurger === customerBurger) {
            console.log("Great Job! 50 Points!")
        } else {
            console.log("Wait! Something's wrong!")
        }
    },

    // When timer runs down to 0
        // End Game
        // Compare current score to high score
    highscoreCheck: function () {
        if (score > highscore) {
            highscore = score
            document.querySelector(".results").innerHTML = "Great job! You got a new high score! You are a burger master!"
        } else if ((score >= 0) && (score <= highscore)) {
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

    document.getElementById("topBun").addEventListener("click", game.buttonClick);
    document.getElementById("onion").addEventListener("click", game.buttonClick);
    document.getElementById("tomato").addEventListener("click", game.buttonClick);
    document.getElementById("lettuce").addEventListener("click", game.buttonClick);
    document.getElementById("cheese").addEventListener("click", game.buttonClick);
    document.getElementById("patty").addEventListener("click", game.buttonClick);
    document.getElementById("bottomBun").addEventListener("click", game.buttonClick);

const beginGame = document.getElementById("begin")
beginGame.addEventListener("click", () => {
    timeBegin()
    game.customerOrder()
    console.log(game.customerBurger)
})