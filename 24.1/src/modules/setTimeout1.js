import { Logger } from "./logger.js";

export class SetTimeOut1 {
	constructor(name) {
		this.name = name;
		this.milliseconds = 150;
	}

	run = () => {
		const before = new Date().getTime();
		return new Promise(resolve => {
			setTimeout(() => {
				const after = new Date().getTime();
				resolve(new Logger(this.name, before, after, `timeout: ${this.milliseconds}`));
			}, this.milliseconds);
		});
	};
}
