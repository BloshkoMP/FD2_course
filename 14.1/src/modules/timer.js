import { StopWatchTimer } from "./stopwatchTimer.js";

class Timer extends StopWatchTimer {
	constructor(initMode, initSeconds) {
		super(initMode, initSeconds);
	}
	showInfo() {
		console.log(this);
	}
}
export { Timer };
