import { currentTimer } from "./tabs.js";
let hrs = 0,
	min = 0,
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
	const newTimerValue = currentTimer.split(":");
	hrs = parseInt(newTimerValue[0]);
	min = parseInt(newTimerValue[1]);
	sec = parseInt(newTimerValue[2]);
	if (!timerTiker) {
		timerTiker = setInterval(onTimerTicker, 1000);
	}
}

function onStopButtonClicked() {
	clearInterval(timerTiker);
	timerTiker = null;
}

function onResetButtonClicked() {
	htmlElements.output.innerText = currentTimer;
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
	if (!sec && !min && !hrs) {
		clearInterval(timerTiker);
	}
}
export { Timer };
