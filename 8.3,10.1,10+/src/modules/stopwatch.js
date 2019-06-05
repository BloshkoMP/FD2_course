let hrs = 0,
	min = 0,
	sec = 0,
	stopwatchTiker,
	newStopWatchTime,
	storageTime = '00:00:00';

const htmlElements = {
	output: document.querySelector('.container  [data-mode=stopwatch] .output'),
	start: document.querySelector('.container  [data-mode=stopwatch] .start'),
	stop: document.querySelector('.container  [data-mode=stopwatch] .stop'),
	reset: document.querySelector('.container  [data-mode=stopwatch] .reset')
};
function Stopwatch() {}
Stopwatch.prototype.initStopwatch = function() {
	const {start, stop, reset, output} = htmlElements;
	if (localStorage.getItem('stopwatch')) {
		output.innerText = localStorage.getItem('stopwatch');
	}
	start.addEventListener('click', onStartButtonClicked);
	stop.addEventListener('click', onStopButtonClicked);
	reset.addEventListener('click', onResetButtonClicked);
};

function onStartButtonClicked() {
	if (localStorage.getItem('stopwatch')) {
		storageTime = localStorage.getItem('stopwatch');
	} else {
		newStopWatchTime = '00:00:00';
	}
	newStopWatchTime = storageTime.split(':');
	hrs = parseInt(newStopWatchTime[0]);
	min = parseInt(newStopWatchTime[1]);
	sec = parseInt(newStopWatchTime[2]);
	if (!stopwatchTiker) {
		stopwatchTiker = setInterval(onStopwatchTicker, 1000);
	}
}

function onStopButtonClicked() {
	clearInterval(stopwatchTiker);
	stopwatchTiker = null;
}

function onResetButtonClicked() {
	htmlElements.output.innerText = '00:00:00';
	localStorage.setItem('stopwatch', htmlElements.output.innerText);
	clearInterval(stopwatchTiker);
	stopwatchTiker = null;
}

function onStopwatchTicker() {
	sec++;
	if (sec >= 60) {
		sec = 0;
		min++;
		if (min >= 60) {
			min = 0;
			hrs++;
		}
	}
	htmlElements.output.innerText =
		(hrs ? (hrs > 9 ? hrs : '0' + hrs) : '00') +
		':' +
		(min ? (min > 9 ? min : '0' + min) : '00') +
		':' +
		(sec > 9 ? sec : '0' + sec);
	localStorage.setItem('stopwatch', htmlElements.output.innerText);
}
export {Stopwatch};
