import {StopWatchTimer} from './stopwatchTimer.js';

function Stopwatch() {
<<<<<<< HEAD:13.1,15.1/src/modules/stopwatch.js
	StopWatchTimer.apply(this, ['stopwatch', 0]);
=======
	StopWatchTimer.apply(this, ["stopwatch", 0]);
>>>>>>> 1be1a958998fe190f1e7b21ffbdeb9825211c42f:13.1,15.1/src/modules/stopwatch.js
}

Stopwatch.prototype = Object.create(StopWatchTimer.prototype);
Stopwatch.prototype.constructor = Stopwatch;

Stopwatch.prototype.showInfo = function() {
	console.log(this);
};

export {Stopwatch};
