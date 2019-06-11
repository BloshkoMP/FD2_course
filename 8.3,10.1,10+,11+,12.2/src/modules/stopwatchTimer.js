import { Helper } from "./helper.js";
function StopWatchTimer() {}

StopWatchTimer.prototype.init = function(initMode, initSeconds) {
	const htmlElements = {
		output: document.querySelector(`.container  [data-mode=${initMode}] .output`),
		buttons: document.querySelectorAll(".container .tabs [data-mode] .buttons button"),
		start: document.querySelector(`.container  [data-mode=${initMode}] .start`),
		stop: document.querySelector(`.container  [data-mode=${initMode}] .stop`),
		reset: document.querySelector(`.container  [data-mode=${initMode}] .reset`)
		//okButton: document.querySelector(`.container .tabs [data-mode] .okButton`),
		//timerInput: document.querySelector(`.container .tabs [data-mode] .timerOutput`)
	};
	const { start, buttons, stop, reset, output, okButton, timerInput } = htmlElements;
	let tiker,
		startTime,
		difSec = 0,
		difMlSec = 0;

	start.addEventListener("click", () => {
		onStartButtonClicked(initMode);
	});
	stop.addEventListener("click", () => {
		onStopButtonClicked(initMode);
	});
	reset.addEventListener("click", () => {
		onResetButtonClicked(initMode);
	});
	// output.addEventListener("focusout", onInputFocusOut);
	// okButton.addEventListener("click", onInputButtonClicked);
	// timerInput.addEventListener("dblclick", onTimerDbClick);

	function onStartButtonClicked() {
		Helper.removeClass("disabled", buttons);
		Helper.addClass("disabled", [start]);
		startTime = new Date().getTime();
		tiker = setInterval(onIntervalTicker, 1000);
	}

	function onStopButtonClicked() {
		Helper.removeClass("disabled", buttons);
		Helper.addClass("disabled", [stop]);
		clearInterval(tiker);
		initSeconds = difSec;
	}

	function onResetButtonClicked() {
		Helper.removeClass("disabled", buttons);
		Helper.addClass("disabled", [reset]);
		initMode === "stopwatch" ? (initSeconds = 0) : (initSeconds = 300);
		startTime = new Date().getTime();
		clearInterval(tiker);
		onIntervalTicker();
	}

	function onIntervalTicker() {
		switch (initMode) {
			case "stopwatch":
				difMlSec = new Date().getTime() - startTime;
				difSec = difMlSec / 1000 + initSeconds;
				break;
			case "timer":
				difMlSec = startTime - new Date().getTime();
				difSec = Math.round(difMlSec / 1000) + initSeconds;
				break;
		}

		let sec = Math.trunc(difSec % 60);
		let min = Math.trunc((difSec / 60) % 60);
		let hrs = Math.trunc(difSec / 3600);

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

		if (initMode === "timer" && output.innerText === "00:00:00") {
			clearInterval(tiker);
		}
	}
};
export { StopWatchTimer };
