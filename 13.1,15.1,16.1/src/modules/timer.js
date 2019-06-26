import { StopWatchTimer } from "./stopwatchTimer.js";

function Timer() {
	const bindFnTimer = StopWatchTimer.bind(this);
	bindFnTimer("timer", 300);
}

Timer.prototype = Object.create(StopWatchTimer.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.showInfo = function() {
	console.log(this);
};
Timer.prototype.getDifMlSec = function(startTime, lastDifSec, tiker) {
	if (Math.round((startTime - new Date().getTime()) / 1000) + lastDifSec <= 0) {
		clearInterval(tiker);
		return 0 - lastDifSec * 1000;
	} else {
		return startTime - new Date().getTime();
	}
};
export { Timer };
