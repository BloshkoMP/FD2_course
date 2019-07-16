import log from "./logger.js";

export default (name, url) => {
	const before = new Date().getTime();

	fetch(url).then(() => {
		//замыкание
		const after = new Date().getTime();
		log(name, before, after); //замыкание
	});
};
