let hrs = 0,
	min = 5,
	sec = 0,
	timerTiker;

const htmlElements = {
	output: document.querySelector(".container  [data-mode=timer] .output"),
	start: document.querySelector(".container  [data-mode=timer] .start"),
	stop: document.querySelector(".container  [data-mode=timer] .stop"),
	reset: document.querySelector(".container  [data-mode=timer] .reset")
};

function Timer() {}
Timer.prototype.initTimer = function() {
	const { start, stop, reset } = htmlElements;
	start.addEventListener("click", onStartButtonClicked);
	stop.addEventListener("click", onStopButtonClicked);
	reset.addEventListener("click", onResetButtonClicked);
};

function onStartButtonClicked() {
	if (!timerTiker) {
		timerTiker = setInterval(onTimerTicker, 1000);
	}
}

function onStopButtonClicked() {
	clearInterval(timerTiker);
	timerTiker = null;
}

function onResetButtonClicked() {
	hrs = 0;
	min = 5;
	sec = 0;
	htmlElements.output.innerText = "00:05:00";
	clearInterval(timerTiker);
	timerTiker = null;
}

function onTimerTicker() {
	sec--;
	if (sec < 0) {
		sec = 59;
		min--;
		if (min < 0) {
			min = 59;
			hrs--;
		}
	}
	htmlElements.output.innerText =
		(hrs ? (hrs > 10 ? hrs : "0" + hrs) : "00") +
		":" +
		(min ? (min > 10 ? min : "0" + min) : "00") +
		":" +
		(sec > 10 ? sec : "0" + sec);
}
export { Timer };
