console.log("AYO! This is Jeo!")

//Declare multiple things when the page loads
    // Buttons to add ingredients
    // How the game works
    // Timer stuck at 3:00
    // Current Score set at 0
    // High Score set at whatever the current high score is
        // NOTE! High score WILL reset with every reload

document.getElementById("bottomBun").addEventListener("click", buttonClick);
document.getElementById("patty").addEventListener("click", buttonClick);
document.getElementById("cheese").addEventListener("click", buttonClick);
document.getElementById("lettuce").addEventListener("click", buttonClick);
document.getElementById("tomato").addEventListener("click", buttonClick);
document.getElementById("onion").addEventListener("click", buttonClick);
document.getElementById("topBun").addEventListener("click", buttonClick);

// Create a HUD
    // Include a timer
    // Include a current score
    // Include a high score

// Start Game!
    // Create a button for starting the game
        // When clicked it will fire multiple functions

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