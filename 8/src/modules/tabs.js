const htmlElements = {
	links: document.querySelectorAll(".container .links a"),
	tabs: document.querySelectorAll(".container .tabs [data-mode]")
};

function Tab() {}

Tab.prototype.initTabs = function() {
	showSelectedTab("clock");
	htmlElements.links.forEach(function(element) {
		element.addEventListener("click", onLinkClicked);
	});
};

function onLinkClicked() {
	switchToMode(this.dataset.mode);
}

function switchToMode(mode) {
	showClickedLink(mode);
	showSelectedTab(mode);
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

function showSelectedTab(mode) {
	htmlElements.tabs.forEach(function(element) {
		if (element.dataset.mode === mode) {
			element.classList.remove("hidden");
		} else {
			element.classList.add("hidden");
		}
	});
}

export { Tab };
