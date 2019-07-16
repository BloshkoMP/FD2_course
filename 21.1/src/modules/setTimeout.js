import log from "./logger.js";

export function runSetTimeOut(name, miliseconds) {
	const before = new Date().getTime();

	setTimeout(() => {
		const after = new Date().getTime();
		log(name, before, after);
	}, miliseconds);
}
