// function play() {
//   // hide home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   // show the playground
//   const playgroundSection = document.getElementById("playground-screen");
//   playgroundSection.classList.remove("hidden");
// }

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
