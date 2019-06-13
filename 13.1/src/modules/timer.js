import { StopWatchTimer } from "./stopwatchTimer.js";

function Timer() {
	StopWatchTimer.call(this, "timer", 300);
}

Timer.prototype = Object.create(StopWatchTimer.prototype);

Timer.prototype.showInfo = function() {
	console.log(this);
};
export { Timer };
