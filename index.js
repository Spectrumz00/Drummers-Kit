function soundGenerator(condition) {
  switch (condition) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  //0.1 seconds delay for animation purpose
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

//Detecting  click
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    soundGenerator(buttonInnerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function(e) {
  // converting to lower case so that even with capital , it can work the same way.
  var key = e.key.toLowerCase();
  buttonAnimation(key);
  soundGenerator(key);
});
