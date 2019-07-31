import {Logger} from './logger.js';

export class Xhr1 {
	constructor(name) {
		this.name = name;
	}

	run = url => {
		const before = new Date().getTime();
		return new Promise(resolve => {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.send();
			xhr.onload = function() {
				const after = new Date().getTime();
				resolve(new Logger(this.name, before, after));
			};
		});
	};
}
