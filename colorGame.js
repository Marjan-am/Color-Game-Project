var numSqares = 6;
var colors = generateRandomColors(numSqares); 
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.getElementById("message");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSqares = 3;
	colors = generateRandomColors(numSqares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}

	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSqares = 6;
	colors = generateRandomColors(numSqares); 
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}
})

reset.addEventListener("click", function(){
	colors = generateRandomColors(numSqares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	this.textContent = "NEW COLOR"
	message.textContent = "";


})
colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clicekedColor = this.style.background;
		if(clicekedColor === pickedColor){
			for(var i = 0; i< squares.length; i++){
			squares[i].style.background  = pickedColor;
			}
			message.textContent = "Correct!";
			h1.style.background = clicekedColor;
			reset.textContent = "Play Again?";

		}else{
			this.style.background = "#232323";
			message.textContent = "Try Again";

		}
	})
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	//add a random color to array
	for(i = 0; i< num; i++){
        arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var rgb = "rgb(" + r +", " + g + ", " + b +")";
	return rgb; 
}