//change dice 1st contineously.
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//change dice 2nd contineously.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
//If player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
//If both get same
else {
  document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
