import { Logger } from "./logger.js";

export class Xhr1 {
	constructor(name) {
		this.name = name;
	}

	run = url => {
		const before = Date.now();
		return new Promise(resolve => {
			const self = this;
			let xhr = new XMLHttpRequest();
			xhr.open("GET", url);
			xhr.onload = function() {
				const after = Date.now();
				resolve(new Logger(self.name, before, after));
			};
			xhr.send();
		});
	};
}
