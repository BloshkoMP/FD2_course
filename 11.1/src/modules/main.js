const checkButton = document.querySelector("button");
checkButton.addEventListener("click", onButtonClicked);

function onButtonClicked() {
	let password = prompt("Enter the password");
	if (password === "mypassword") {
		alert("OK");
		return true;
	} else {
		return onButtonClicked();
	}
}
