// function play() {
//   // hide home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // show the playground
//   const playgroundSection = document.getElementById("playground-screen");
//   playgroundSection.classList.remove("hidden");
// }

// detect key press and its value
document.addEventListener("keyup", function handleKeyboardButonPress(e) {
  const playerPressed = e.key;
  // console.log("player pressed key:", playerPressed);

  // get expected alphabate
  const currentAlphabateElement = document.getElementById("current-alphabate");
  const currentAlphabate = currentAlphabateElement.innerText;
  const expectedAlphabate = currentAlphabate.toLowerCase();
  // console.log(expectedAlphabate, playerPressed);

  // check matched or not
  if (playerPressed === expectedAlphabate) {
    // update the score

    // start a new round
    continueGame();
    removeBackgroundColorById(expectedAlphabate);
  } else {
    console.log("you missed a life");
  }
});

function continueGame() {
  // generate a random alphabate
  const alphabate = getRandomAlphabet();
  //   set generated alphabet to display
  const currentAlphabateElement = document.getElementById("current-alphabate");
  currentAlphabateElement.innerText = alphabate;

  //   set background color

  addBackgroundColorById(alphabate);
}

function play() {
  hideElementById("home-screen");
  showElementById("playground-screen");
  continueGame();
}
