import log from "./logger.js";

export default name => {
	const before = new Date().getTime();

	document.querySelector("button").addEventListener("click", function() {
		//замыкание функции
		const after = new Date().getTime();
		log(name, before, after);
	});
};
