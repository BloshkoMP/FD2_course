function addClass(className, elements) {
	elements.forEach(element => {
		element.classList.add(className);
	});
}
function removeClass(className, elements) {
	elements.forEach(element => {
		element.classList.remove(className);
	});
}
function Helper() {}
Helper.addClass = addClass;
Helper.removeClass = removeClass;

export {Helper};
