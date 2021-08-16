var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1 to dice 6 png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - image/dice6.png
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
