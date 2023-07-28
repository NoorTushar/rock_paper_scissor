// Main Play Game Function Start

// we are retreiving our saved localstorage JSON strings - scores from previous rounds which are saved on local storage.
let getScoresFromLocal = localStorage.getItem("scores");
// we are converting the JSON strings into JavaScript Object
let localJSONToObject = JSON.parse(getScoresFromLocal);

// this default operator only applies if we click on the reset score and remove the local storage. cause if local storage is removed there will be no score object in the first place.

let scores = localJSONToObject || {
  wins: 0,
  losses: 0,
  ties: 0,
};

//
function resetScore() {
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;

  alert(`Scores have been reset!`);
  // remove the localStore item
  localStorage.removeItem("scores");
}

//
function updateScore() {
  document.querySelector(
    ".js-showScores"
  ).innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
}

//
updateScore();

//
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Scissors") {
      result = "It is a Tie!";
    } else if (computerMove === "Rock") {
      result = "You Lose!";
    } else if (computerMove === "Paper") {
      result = "You Win!";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Paper") {
      result = "It is a Tie!";
    } else if (computerMove === "Scissors") {
      result = "You Lose!";
    } else if (computerMove === "Rock") {
      result = "You Win!";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "It is a Tie!";
    } else if (computerMove === "Paper") {
      result = "You Lose!";
    } else if (computerMove === "Scissors") {
      result = "You Win!";
    }
  }
  // updating the score
  if (result === "You Win!") {
    scores.wins += 1;
  } else if (result === "You Lose!") {
    scores.losses += 1;
  } else if (result === "It is a Tie!") {
    scores.ties += 1;
  }

  // displaying the result in P tag of the website
  document.querySelector(".js-result").innerHTML = result;

  // displaying the moves in P tag of the website
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img class="move-image" src="img/${playerMove}-emoji.png" alt="" />
      <img class="move-image" src="img/${computerMove}-emoji.png" alt="" />
      Computer`;

  //
  updateScore();

  // here we convert our object score into JSON strings
  let jsonScores = JSON.stringify(scores);
  // here we use the JSON string to store it in the local storage
  localStorage.setItem("scores", jsonScores);
}

// Main Play Game Function End

// pickComputerMove() function start
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
// pickComputerMove() function end
