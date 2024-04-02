
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

let selectedTile = "";

function setGame() {
    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }   
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", function () {  //"CREATES" AND "ASSIGNS" AN EVENTLISTENER TO EACH TILE DURING INSTATIATION, LISTENING FOR A CLICK
                if(selectedTile !== "") {
                    document.getElementById(selectedTile).classList.remove("highlight");
                }

                selectedTile = tile.id;
                tile.classList.add("highlight");

                console.log("Selected Tile: " + selectedTile);
            });

            tile.classList.add("tile");

            document.getElementById("board").append(tile);
        }
    }

    document.addEventListener("keypress", function (event) {
        if (selectedTile !== "") {
            inputNumber(selectedTile, event);
        }
    });

}


function inputNumber(selectTile, event) {
    let number = null;

    console.log(event.key);
    if (event.key >= '0' && event.key <= '9') {
        number = parseInt(event.key);
        document.getElementById(selectTile).innerText = number;
        console.log("Number: " + number);
    }
}





