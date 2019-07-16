import log from "./logger.js";

export default name => {
	const before = new Date().getTime();
	const promise = new Promise((resolve, reject) => {
		//замыкание
		resolve();
	});
	promise.then(() => {
		//замыкание
		const after = new Date().getTime();
		log(name, before, after);
	});
};
