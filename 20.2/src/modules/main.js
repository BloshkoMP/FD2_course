window.plus = () => {
	let elem = document.querySelector("form");
	elem[2].value = parseInt(elem[0].value) + parseInt(elem[1].value);
};

window.subtract = () => {
	let elem = document.querySelector("form");
	elem[2].value = parseInt(elem[0].value) - parseInt(elem[1].value);
};
window.multiply = () => {
	let elem = document.querySelector("form");
	elem[2].value = parseInt(elem[0].value) * parseInt(elem[1].value);
};
window.divide = () => {
	let elem = document.querySelector("form");
	elem[2].value = parseInt(elem[0].value) / parseInt(elem[1].value);
};
