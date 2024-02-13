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
  console.log(alphabets);
}
