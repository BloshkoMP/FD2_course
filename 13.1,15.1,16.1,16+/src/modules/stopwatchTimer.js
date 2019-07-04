import {Helper} from './helper.js';
function StopWatchTimer(initMode, initSeconds) {
	this.htmlElements = {
		output: document.querySelector(`.container  [data-mode=${initMode}] .output`),
		buttons: document.querySelectorAll(`.container [data-mode=${initMode}]  button`),
		start: document.querySelector(`.container  [data-mode=${initMode}] .start`),
		stop: document.querySelector(`.container  [data-mode=${initMode}] .stop`),
		reset: document.querySelector(`.container  [data-mode=${initMode}] .reset`)
	};
	const {start, buttons, stop, reset, output} = this.htmlElements;

	let tiker,
		startTime,
		difSec = 0,
		difMlSec = 0,
		lastDifSec = initSeconds,
		isTimerStart = false;

	const defaultThis = this;

	start.addEventListener('click', () => {
		onStartButtonClicked.call(defaultThis);
	});
	stop.addEventListener('click', () => {
		onStopButtonClicked.call(defaultThis);
	});
	reset.addEventListener('click', () => {
		isTimerStart = true;
		onResetButtonClicked.call(defaultThis);
	});

	function onStartButtonClicked() {
		Helper.removeClass('disabled', buttons);
		Helper.addClass('disabled', [start]);
		startTime = new Date().getTime();
		isTimerStart = true;
		tiker = setTimeout(() => {
			onIntervalTicker.call(defaultThis);
		}, 1000);
	}

	function onStopButtonClicked() {
		Helper.removeClass('disabled', buttons);
		Helper.addClass('disabled', [stop]);
		clearTimeout(tiker);
		isTimerStart = false;
		lastDifSec = difSec;
	}

	function onResetButtonClicked() {
		Helper.removeClass('disabled', buttons);
		Helper.addClass('disabled', [reset]);
		lastDifSec = initSeconds;
		startTime = new Date().getTime();
		onIntervalTicker.call(this);
		isTimerStart = false;
		clearTimeout(tiker);
	}

	function onIntervalTicker() {
		difMlSec = this.getDifMlSec(startTime, lastDifSec, tiker, isTimerStart);
		difSec = Math.round(difMlSec / 1000) + lastDifSec;

		let sec = Math.trunc(difSec % 60);
		let min = Math.trunc((difSec / 60) % 60);
		let hrs = Math.trunc(difSec / 3600);

		if (isTimerStart === true) {
			setTimeout(() => {
				onIntervalTicker.call(defaultThis);
			}, 1000);
			setTime(sec, min, hrs);
		}
	}
	function setTime(sec, min, hrs) {
		if (sec < 10) {
			sec = `0${sec}`;
		}
		if (min < 10) {
			min = `0${min}`;
		}
		if (hrs < 10) {
			hrs = `0${hrs}`;
		}
		output.innerText = `${hrs}:${min}:${sec}`;
	}
}
export {StopWatchTimer};
