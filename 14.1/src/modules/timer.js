import { StopWatchTimer } from "./stopwatchTimer.js";

class Timer extends StopWatchTimer {
	constructor() {
		super('timer', 300);
	}
	showInfo() {
		console.log(this);
	}
}
export { Timer };
