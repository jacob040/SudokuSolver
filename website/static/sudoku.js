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
/* var board = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "81294576-",
]; */

var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

let selectedTile = "";
let correctCount = 0;
let incorrectCount = 0;

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
      tile.addEventListener("click", function () {
        //"CREATES" AND "ASSIGNS" AN EVENTLISTENER TO EACH TILE DURING INSTATIATION, LISTENING FOR A CLICK
        if (selectedTile !== "") {
          document.getElementById(selectedTile).classList.remove("highlight");
        }

        selectedTile = tile.id;
        tile.classList.add("highlight");
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

  document.addEventListener("keydown", function (event) {
    if (selectedTile !== "") {
      selectedTile = arrowMovement(selectedTile, event);
    }
  });
}

function arrowMovement(selectedTile, event) {
  let rowCol = selectedTile.split("-"); //Creates an array with the two digits
  let row = parseInt(rowCol[0]); // Convert row to integer
  let col = parseInt(rowCol[1]); // Convert col to integer


  console.log(selectedTile);
  console.log("After keydown");
  switch (event.key) {
    case "ArrowLeft": //LEFT
      if (col === 0) {
        col = 8;
      } else {
        col--;
      }
      break;

    case "ArrowUp": //UP
      if (row === 0) {
        row = 8;
      } else {
        row--;
      }
      break;

    case "ArrowRight": //RIGHT
      if (col === 8) {
        col = 0;
      } else {
        col++;
      }
      break;

    case "ArrowDown": //DOWN
      if (row === 8) {
        row = 0;
      } else {
        row++;
      }
      break;
  }
  
  document.getElementById(selectedTile).classList.remove("highlight");  //Remove old highlight
  selectedTile = row + "-" + col;
  document.getElementById(selectedTile).classList.add("highlight"); //Add new highlight
  
  console.log(selectedTile);
  console.log("function terminates");
  return selectedTile;
}

function checkForWin() {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== solution[r][c]) {
        return false;
      }
    }
  }
  console.log("you won yay!");
  return true;
}

function inputNumber(selectTile, event) {
  let number = null;

  if (event.key >= "1" && event.key <= "9") {
    number = parseInt(event.key);
    document.getElementById(selectTile).innerText = number;
  }

  let rowCol = selectTile.split("-"); //Creates an array with the two digits
  let row = parseInt(rowCol[0]); // Convert row to integer
  let col = parseInt(rowCol[1]); // Convert col to integer

  if (number !== null && number === parseInt(solution[row][col])) {
    correctCount++;
    document.getElementById("correct").innerText = "Correct: " + correctCount; // Update correct count on screen

    let numChar = number.toString();
    replaceCharacterInArray(board, row, col, numChar);

    checkForWin();
  } else {
    incorrectCount++;
    document.getElementById("incorrect").innerText =
      "Incorrect: " + incorrectCount; // Update incorrect count on screen

    let numChar = number.toString();
    replaceCharacterInArray(board, row, col, numChar);
  }
}

function replaceCharacterInArray(arr, row, col, newChar) {
  //In javascript, strings are immutable
  // Get the string at the specified row
  let currentString = arr[row];

  // Replace the character at the specified column with the new character
  let modifiedString =
    currentString.substring(0, col) +
    newChar +
    currentString.substring(col + 1);

  // Update the array with the modified string
  arr[row] = modifiedString;
}
