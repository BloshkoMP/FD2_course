import { Logger } from "./logger.js";

export class SyncDelay1 {
	constructor() {
		this.name = name;
	}
	static seconds() {
		return 2;
	}
	run = () => {
		if (seconds() === undefined) {
			throw new Error("not defined");
		}

		const before = new Date().getTime();

		for (let i = 0; i < seconds(); i++) {
			for (let j = 0; j < 700000000; j++) {
				let a = 123;
			}
		}
		const after = new Date().getTime();
		return new Logger(this.name, before, after);
	};
}
