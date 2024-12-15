const gameText = document.getElementById("game-text");
const gameButtons = document.getElementById("game-buttons");
const gameVisual = document.getElementById("game-visual");

// Game State
function makeChoice(choice) {
    if (choice === "start") {
        gameText.innerHTML = "You see a forest with a path and a tree. What do you observe?";
        updateButtons(["Look at the Tree", "Walk the Path"]);
    } 
    else if (choice === "Look at the Tree") {
        gameText.innerHTML = "The tree glitches, pixelating as if it's incomplete. Is it fully rendered?";
        gameVisual.innerText = "TREE ERROR: MISSING RENDER DATA";
        updateButtons(["Walk the Path", "Restart"]);
    } 
    else if (choice === "Walk the Path") {
        gameText.innerHTML = "The path forms slowly as you move forward. Reality seems to render on demand.";
        gameVisual.innerText = "RENDERING PATH...\n######";
        updateButtons(["Enter the White Room", "Restart"]);
    } 
    else if (choice === "Enter the White Room") {
        gameText.innerHTML = "You enter a room with two doors: 'Reality' and 'Simulation'. Which do you open?";
        gameVisual.innerText = "";
        updateButtons(["Open Reality Door", "Open Simulation Door", "Restart"]);
    } 
    else if (choice === "Open Reality Door") {
        gameText.innerHTML = "The Reality door glitches and disappears. Reality cannot be accessed.";
        gameVisual.innerText = "GLITCH ERROR: REALITY UNDEFINED";
        updateButtons(["Restart"]);
    } 
    else if (choice === "Open Simulation Door") {
        gameText.innerHTML = "You see binary code cascading down. You are part of the simulation.";
        gameVisual.innerText = "SIMULATION LOADING...\n101010101010";
        updateButtons(["Restart"]);
    } 
    else if (choice === "Restart") {
        restartGame();
    }
}

// Update Buttons
function updateButtons(options) {
    gameButtons.innerHTML = "";
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => makeChoice(option);
        gameButtons.appendChild(button);
    });
}

// Restart the Game
function restartGame() {
    gameText.innerHTML = "Welcome, Observer. You are entering a simulated world where reality depends on your choices.";
    gameVisual.innerText = "";
    updateButtons(["Start"]);
}
