import { onStopButtonClicked } from "./timer.js";
const htmlElements = {
	links: document.querySelectorAll(".container .links a"),
	tabs: document.querySelectorAll(".container .tabs [data-mode]"),
	output: document.querySelector('.container .tabs [data-mode="timer"] .output')
};
let storageMode = "clock";
function Tab() {}
Tab.prototype.initTabs = function() {
	if (localStorage.getItem("mode")) {
		storageMode = localStorage.getItem("mode");
	}
	switchToMode(storageMode);
	htmlElements.links.forEach(function(element) {
		element.addEventListener("click", function() {
			onLinkClicked(this);
		});
	});
	htmlElements.output.addEventListener("dblclick", function() {
		onLinkClicked(htmlElements.tabs[3]);
		onStopButtonClicked();
	});
};

function onLinkClicked(value) {
	switchToMode(value.dataset.mode);
}

function switchToMode(mode) {
	showClickedLink(mode);
	showSelectedTab(mode);
	if (mode === "input") {
		hideLinks();
	} else {
		showLinks();
	}
}

function showClickedLink(mode) {
	htmlElements.links.forEach(function(element) {
		if (element.dataset.mode === mode) {
			element.classList.add("selected");
		} else {
			element.classList.remove("selected");
		}
	});
}
function hideLinks() {
	htmlElements.links.forEach(function(element) {
		element.classList.add("hidden");
	});
}

function showLinks() {
	htmlElements.links.forEach(function(element) {
		element.classList.remove("hidden");
	});
}

function showSelectedTab(mode) {
	htmlElements.tabs.forEach(function(element) {
		if (element.dataset.mode === mode) {
			element.classList.remove("hidden");
			localStorage.setItem("mode", mode);
		} else {
			element.classList.add("hidden");
		}
	});
}

export { Tab };
export { switchToMode };
