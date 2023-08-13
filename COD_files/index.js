// loading display
var loader = document.getElementById("preloader");

function preloader() {
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000);
}
window.onload = preloader;

// text color and changing
var words = [
  { text: "Hubby", colorClass: "pay" },
  { text: "Life", colorClass: "red" },
  { text: "Output", colorClass: "green" },
];
var currentIndex = 0;

function changer() {
  var word = words[currentIndex];
  var colorElement = document.getElementById("color");

  // Apply fade-out effect by reducing opacity
  colorElement.style.opacity = 0;

  setTimeout(function () {
    // Update text and color class
    colorElement.classList.remove("pay", "red", "green");
    colorElement.classList.add(word.colorClass);
    colorElement.innerHTML = word.text;

    // Apply fade-in effect by increasing opacity
    colorElement.style.opacity = 1;

    // Move to the next word after 2 seconds
    setTimeout(function () {
      currentIndex = (currentIndex + 1) % words.length;
      changer();
    }, 2000);
  }, 500); // Wait for 500ms before fading in
}
changer();

// toggle icon sign-up
let signUp_btn = document.querySelector("#btn");
let signUp = document.querySelector(".sign-up");
let closeBtn = document.querySelector("#close-btn");

function hideSignUp() {
  signUp.style.display = "none";
  console.log("Sign up is hidden");
}

signUp_btn.onclick = () => {
  signUp.style.display = "block";
};

closeBtn.onclick = () => {
  hideSignUp();
};
