function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabateString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabateString.split("");

  //   get a random number
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  console.log(alphabet);
}

getRandomAlphabet();
