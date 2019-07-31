import {Logger} from './logger.js';

export class SyncDelay1 {
	constructor() {
		this.name = name;
	}
	run = () => {
		if (SyncDelay1.seconds === undefined) {
			throw new Error('not defined');
		}
		
		const before = new Date().getTime();

		for (let i = 0; i < this.seconds; i++) {
			for (let j = 0; j < 700000000; j++) {
				let a = 123;
			}
		}
		const after = new Date().getTime();
		return new Logger(this.name, before, after);
	};
}
