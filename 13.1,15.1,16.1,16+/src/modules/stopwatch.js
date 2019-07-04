import { StopWatchTimer } from "./stopwatchTimer.js";

function Stopwatch() {
	StopWatchTimer.call(this, "stopwatch", 0);
}
Stopwatch.prototype = Object.create(StopWatchTimer.prototype);
Stopwatch.prototype.constructor = Stopwatch;

Stopwatch.prototype.showInfo = function() {
	console.log(this);
};
Stopwatch.prototype.getDifMlSec = function(startTime) {
	return new Date().getTime() - startTime;
};

export { Stopwatch };
