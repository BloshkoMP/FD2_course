const link = document.querySelector(".container .myLink");

link.addEventListener("click", event => {
	event.preventDefault();
	document.location = "https://google.com";
});
