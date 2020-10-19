var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button = this.innerHTML;
    switch (button){
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:
        console.log(button);
    }
  });
}

//Detecting the keypress
document.addEventListener("keypress", function(){
  var key = event.key;
  if(key == "w" || key == "W"){
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
  }
  else if(key == "a" || key == "A"){
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
  }
  else if(key == "s" || key == "S"){
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
  }
  else if (key == "d" || key == "D") {
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
  else if (key == "j" || key == "J") {
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
  }
  else if (key == "k" || key == "K") {
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
  }
  else if (key == "l" || key == "L") {
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
  }
  else{
    console.log(key);
  }
});
