var button = document.getElementById("enter");
var inputN = document.getElementById("username");
var inputO = document.getElementById("userorder");
var ul = document.querySelector("ul");
// var clearButton = document.createElement("button");
var clearListButton = document.getElementById("clear");

function inputLengthName() {
	return inputN.value.length;
}

function inputLengthOrder() {
	return inputO.value.length;
}

function createListElement() {
		var li = document.createElement("li");
		var liItem = inputN.value + " " + inputO.value;
		var newListItem = document.createTextNode(liItem);
		li.appendChild(newListItem);
		// clearButton.innerText = "Clear";
		// li.appendChild(clearButton);
		ul.appendChild(li);		
		inputN.value = "";
		inputO.value = "";	
}

function addListAfterClick(event) {
	if (inputLengthName() > 0 && inputLengthOrder() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLengthName() > 0 && inputLengthOrder() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeThrough(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done")
	}
}

function clearList() {
	ul.innerHTML = "";
}

button.addEventListener("click", addListAfterClick)

inputO.addEventListener("keypress", addListAfterKeypress)

inputN.addEventListener("keypress", addListAfterKeypress)


clearListButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
// clearButton.addEventListener("click", strikeThrough):
