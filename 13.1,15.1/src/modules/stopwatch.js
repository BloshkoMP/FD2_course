import { StopWatchTimer } from "./stopwatchTimer.js";

function Stopwatch() {
	StopWatchTimer.apply(this, ["stopwatch", 0]);
}

Stopwatch.prototype = Object.create(StopWatchTimer.prototype);
Stopwatch.prototype.constructor = Stopwatch;

Stopwatch.prototype.showInfo = function() {
	console.log(this);
};

export { Stopwatch };
