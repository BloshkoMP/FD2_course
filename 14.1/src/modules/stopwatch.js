import { StopWatchTimer } from "./stopwatchTimer.js";

class Stopwatch extends StopWatchTimer {
	constructor(initMode, initSeconds) {
		super(initMode, initSeconds);
	}
	showInfo() {
		console.log(this);
	}
}

export { Stopwatch };
