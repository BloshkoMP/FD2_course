class Helper {
	constructor() {}
}

function removeClass(className, elements) {
	elements.forEach(element => {
		element.classList.remove(className);
	});
}

function addClass(className, elements) {
	elements.forEach(element => {
		element.classList.add(className);
	});
}
Helper.addClass = addClass;
Helper.removeClass = removeClass;
export { Helper };
