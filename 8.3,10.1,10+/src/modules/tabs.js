const htmlElements = {
	links: document.querySelectorAll('.container .links a'),
	tabs: document.querySelectorAll('.container .tabs [data-mode]'),
	output: document.querySelector('.container .tabs [data-mode="timer"] .output')
};
function Tab() {}

Tab.prototype.initTabs = function() {
	showSelectedTab('clock');
	htmlElements.links.forEach(function(element) {
		element.addEventListener('click', function() {
			onLinkClicked(this);
		});
	});
	htmlElements.output.addEventListener('dblclick', function() {
		onLinkClicked(htmlElements.tabs[3]);
	});
};

function onLinkClicked(value) {
	switchToMode(value.dataset.mode);
}

function switchToMode(mode) {
	showClickedLink(mode);
	showSelectedTab(mode);
}

function showClickedLink(mode) {
	htmlElements.links.forEach(function(element) {
		if (element.dataset.mode === mode) {
			element.classList.add('selected');
		} else {
			element.classList.remove('selected');
		}
	});
}

function showSelectedTab(mode) {
	htmlElements.tabs.forEach(function(element) {
		if (element.dataset.mode === mode) {
			element.classList.remove('hidden');
		} else {
			element.classList.add('hidden');
		}
	});
}

export {Tab};
export {switchToMode};
