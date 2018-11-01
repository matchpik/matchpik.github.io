var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var randomButton = document.querySelector(".randomizer");

function setGradient(){body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";}

// generate a random gradient
function getRandomColors(){
	// generate two random numbers and assign them to color1 and color2, respectively
	var first = Math.random().toString(16).slice(2, 8);
	var second = Math.random().toString(16).slice(2, 8);
	// # + number
	color1.value = "#" + first;
	color2.value = "#" + second;

	setGradient();
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

randomButton.addEventListener("click", getRandomColors)