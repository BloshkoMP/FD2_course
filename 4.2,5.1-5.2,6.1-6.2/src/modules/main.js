let htmlElements;

let items = [
	{ color: "white", bgColor: "blue" },
	{ color: "black", bgColor: "yellow" },
	{ color: "green", bgColor: "whitesmoke", selected: true }
];

init();

function init() {
	htmlElements = {
		bgColorInput: document.querySelector("input.bg-color-input"),
		textColorInput: document.querySelector("input.text-color-input"),
		addButton: document.querySelector("button.add-button"),
		items: document.querySelector("div.items"),
		textColor: document.querySelector("div.hello-world")
	};
	render();
	initEventListner();
}

function initEventListner() {
	htmlElements.bgColorInput.addEventListener("focusout", function() {
		onInputFocusOut(this);
	});
	htmlElements.textColorInput.addEventListener("focusout", function() {
		onInputFocusOut(this);
	});
	htmlElements.addButton.addEventListener("click", addButtonClicked);
}

function addButtonClicked() {
	let bgColor = htmlElements.bgColorInput.value;
	let textColor = htmlElements.textColorInput.value;
	onInputFocusOut(htmlElements.bgColorInput);
	onInputFocusOut(htmlElements.textColorInput);

	if (
		checkIfColorCanBeAdded(bgColor) &&
		checkIfColorCanBeAdded(textColor) &&
		!checkIfElementExist(bgColor, textColor)
	) {
		items.push({ color: textColor, bgColor: bgColor, selected: false });
		render();
		reset();
	} else if (checkIfElementExist(bgColor, textColor)) {
		changeBorderColorToRed(htmlElements.bgColorInput, htmlElements.textColorInput);
	}
}

function changeBodyColor() {
	for (let i = 0; i < items.length; i++) {
		items[i].selected = false;
	}
	let todoElements = this.parentElement.querySelectorAll("div.todo");
	let index = Array.from(todoElements).indexOf(this);
	items[index].selected = true;
	render();
}

function deleteElementsClicked() {
	let buttons = document.querySelectorAll("button.delete-button");
	let index = Array.from(buttons).indexOf(this);
	items.splice(index, 1);
	render();
	event.stopPropagation();
}

function reset() {
	htmlElements.bgColorInput.value = "";
	htmlElements.textColorInput.value = "";
	htmlElements.bgColorInput.style.borderColor = "";
	htmlElements.textColorInput.style.borderColor = "";
}

function onInputFocusOut(input) {
	input.style.borderColor = !checkIfColorCanBeAdded(input.value) ? "red" : "green";
}

function changeBorderColorToRed(bgColor, color) {
	bgColor.style.borderColor = "red";
	color.style.borderColor = "red";
}

function checkIfColorCanBeAdded(color) {
	if (color.indexOf("rgb") > -1 || color === "") {
		return false;
	}
	let div = document.createElement("div");
	div.style.backgroundColor = color;
	let colorIsSetCorrectly = div.style.backgroundColor === color;
	return colorIsSetCorrectly;
}

function checkIfElementExist(bgColor, textColor) {
	return items.filter(item => item.color === textColor && item.bgColor === bgColor).length > 0;
}

function remove() {
	while (htmlElements.items.firstChild) {
		htmlElements.items.removeChild(htmlElements.items.firstChild);
	}
}

function removeBodyBgColor() {
	document.body.style.backgroundColor = "";
	htmlElements.textColor.style.color = "";
}

function render() {
	htmlElements.items.innerHTML = "";

	for (let i = 0; i < items.length; i++) {
		if (items[i].selected) {
			document.body.style.backgroundColor = items[i].bgColor;
			htmlElements.textColor.style.color = items[i].color;
		}
		let newDiv = createElement("div", "todo", items[i].bgColor, null, null, items[i].selected);
		newDiv.addEventListener("click", changeBodyColor);

		let newSpan = createElement(
			"span",
			"todo-text",
			null,
			items[i].color,
			items[i].color,
			null
		);

		let newButton = createElement("button", "delete-button", null, null, "X", null);
		newButton.addEventListener("click", deleteElementsClicked);

		newDiv.appendChild(newSpan);
		newDiv.appendChild(newButton);
		htmlElements.items.appendChild(newDiv);
	}
}

function createElement(tagName, className, backgroundColor, color, innerText, selected) {
	const element = document.createElement(tagName);
	if (selected === true) {
		element.classList.add("selected");
	}
	if (className) {
		element.classList.add(className);
	}
	if (backgroundColor) {
		element.style.backgroundColor = backgroundColor;
	}
	if (color) {
		element.style.color = color;
	}
	if (innerText) {
		element.innerText = innerText;
	}
	return element;
}
