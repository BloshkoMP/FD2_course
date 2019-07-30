import { Logger } from "./logger.js";

export class Promise1 {
	constructor(name) {
		this.name = name;
	}

	run = () => {
		const before = new Date().getTime();
		return Promise.resolve().then(() => {
			return new Promise(resolve => {
				const after = new Date().getTime();
				resolve(new Logger(this.name, before, after));
			});
		});
	};
}
