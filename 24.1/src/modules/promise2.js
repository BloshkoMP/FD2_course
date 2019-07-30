import { Logger } from "./logger.js";

export class Promise2 {
	constructor(name) {
		this.name = name;
	}

	run = url => {
		const before = new Date().getTime();
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.send();
			xhr.onload = () => {
				resolve();
			};
		}).then(() => {
			const after = new Date().getTime();
			return new Logger(this.name, before, after);
		});
	};
}
