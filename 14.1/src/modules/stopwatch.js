import { StopWatchTimer } from "./stopwatchTimer.js";

class Stopwatch extends StopWatchTimer {
	constructor() {
		super('stopwatch', 0);
	}
	showInfo() {
		console.log(this);
	}
}

export { Stopwatch };
