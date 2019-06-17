import { Helper } from "./helper.js";
function StopWatchTimer(initMode, initSeconds) {
	this.htmlElements = {
		output: document.querySelector(`.container  [data-mode=${initMode}] .output`),
		buttons: document.querySelectorAll(`.container [data-mode=${initMode}]  button`),
		start: document.querySelector(`.container  [data-mode=${initMode}] .start`),
		stop: document.querySelector(`.container  [data-mode=${initMode}] .stop`),
		reset: document.querySelector(`.container  [data-mode=${initMode}] .reset`)
	};
	const { start, buttons, stop, reset, output } = this.htmlElements;

	let tiker,
		startTime,
		difSec = 0,
		difMlSec = 0,
		lastDifSec = initSeconds;

	start.addEventListener("click", () => {
		onStartButtonClicked(initMode);
	});
	stop.addEventListener("click", () => {
		onStopButtonClicked(initMode);
	});
	reset.addEventListener("click", () => {
		onResetButtonClicked(initMode);
	});

	function onStartButtonClicked() {
		if (initMode === "timer" && output.innerText === "00:00:00") {
			Helper.removeClass("disabled", buttons);
		} else {
			Helper.removeClass("disabled", buttons);
			Helper.addClass("disabled", [start]);
			startTime = new Date().getTime();
			tiker = setInterval(onIntervalTicker, 1000);
		}
	}

	function onStopButtonClicked() {
		Helper.removeClass("disabled", buttons);
		Helper.addClass("disabled", [stop]);
		clearInterval(tiker);
		lastDifSec = difSec;
	}

	function onResetButtonClicked() {
		Helper.removeClass("disabled", buttons);
		Helper.addClass("disabled", [reset]);
		lastDifSec = initSeconds;
		startTime = new Date().getTime();
		clearInterval(tiker);
		onIntervalTicker();
	}

	function onIntervalTicker() {
		switch (initMode) {
			case "stopwatch":
				difMlSec = new Date().getTime() - startTime;
				difSec = difMlSec / 1000 + lastDifSec;
				break;
			case "timer":
				difMlSec = startTime - new Date().getTime();
				difSec = Math.round(difMlSec / 1000) + lastDifSec;
				break;
		}

		let sec = Math.trunc(difSec % 60);
		let min = Math.trunc((difSec / 60) % 60);
		let hrs = Math.trunc(difSec / 3600);

		setTime(sec, min, hrs);
	}

	function setTime(sec, min, hrs) {
		if (initMode === "timer" && parseInt(hrs + min + sec) < 0) {
			clearInterval(tiker);
			Helper.removeClass("disabled", buttons);
		} else {
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
}
export { StopWatchTimer };
