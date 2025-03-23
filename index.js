var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice-" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) +1;

var ranadomDiceImage1 = "dice-" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + ranadomDiceImage1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource1);