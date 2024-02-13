function play() {
  // hide home screen
  const homeSection = document.getElementById("home-screen");
  homeSection.classList.add("hidden");
  // show the playground
  const playgroundSection = document.getElementById("playground-screen");
  playgroundSection.classList.remove("hidden");
}
