var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

//Creating my list element
function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //takes the input text and applies it to the li element
	ul.appendChild(li); //adds each li into the ul in HTML file
	input.value = ""; //Resets the input field

	//Toggle for item completion
	function complete() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",complete);
	
	//Button to remove item
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	
	//Class of deleted items which will not be displayed
	function deleteListItem(){
		li.classList.add("delete")
	}
}

//Ensuring you cannot create empty list items
function inputLength(){
	return input.value.length;
} 

function addListAfterClick(){
	if (inputLength() > 0) { //makes sure input field contains text
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) { //note, 13 represents the keystroke 'enter'
		createListElement();
	} 
}

function listLength(){
	return item.length;
}

//event listeners to create new item
enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);