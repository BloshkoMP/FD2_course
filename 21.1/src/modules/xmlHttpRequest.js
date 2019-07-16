import log from "./logger.js";

export default (name, url) => {
	const before = new Date().getTime();
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.send();
	xhr.onload = () => {
		//замыкание функции
		const after = new Date().getTime();
		log(name, before, after);
	};
};
