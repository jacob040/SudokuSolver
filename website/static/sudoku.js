
window.onload = function() {
    setGame();
}

function setGame() {
    console.log("setGame function called"); // Debugging statement
    for (let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            let randomNumber = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
            tile.textContent = randomNumber; // Set the text content of the tile to the random number
            document.getElementById("board").append(tile);
            console.log("tile appended"); // Debugging statement
        }
    }
}