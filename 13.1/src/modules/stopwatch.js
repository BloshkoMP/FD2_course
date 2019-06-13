import { StopWatchTimer } from "./stopwatchTimer.js";

function Stopwatch() {
	StopWatchTimer.call(this, "stopwatch", 0);
}

Stopwatch.prototype = Object.create(StopWatchTimer.prototype);

Stopwatch.prototype.showInfo = function() {
	console.log(this);
};

export { Stopwatch };
