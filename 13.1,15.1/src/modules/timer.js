import { StopWatchTimer } from "./stopwatchTimer.js";

function Timer() {
	StopWatchTimer.bind(this)("timer", 300);
}

Timer.prototype = Object.create(StopWatchTimer.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.showInfo = function() {
	console.log(this);
};
export { Timer };
