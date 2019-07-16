import log from "./logger.js";

export function makeSyncDelay(name, seconds) {
	const before = new Date().getTime();

	for (let i = 0; i < seconds; i++) {
		for (let j = 0; j < 8000000; j++) {
			let a = 111;
		}
	}
	const after = new Date().getTime();
	log(name, before, after);
}
