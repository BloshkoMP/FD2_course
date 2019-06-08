import { switchToMode } from "./tabs.js";

let hrs = 0,
	min = 0,
	sec = 0,
	defaultTimer = "00:05:00",
	timerTiker,
	newTimerValue,
	currentTimer;

const htmlElements = {
	output: document.querySelector(".container  [data-mode=timer] .output"),
	start: document.querySelector(".container  [data-mode=timer] .start"),
	stop: document.querySelector(".container  [data-mode=timer] .stop"),
	reset: document.querySelector(".container  [data-mode=timer] .reset"),
	okButton: document.querySelector(".container .tabs [data-mode] .okButton"),
	timerInput: document.querySelector(".container .tabs [data-mode] .timerOutput")
};

function Timer() {}
Timer.prototype.initTimer = function() {
	const { start, stop, reset, okButton, timerInput, output } = htmlElements;
	if (localStorage.getItem("timer")) {
		output.innerText = localStorage.getItem("timer");
	} else if (localStorage.getItem("timerDefoult")) {
		output.innerText = localStorage.getItem("timerDefoult");
	} else {
		output.innerText = defaultTimer;
	}
	start.addEventListener("click", onStartButtonClicked);
	stop.addEventListener("click", onStopButtonClicked);
	reset.addEventListener("click", onResetButtonClicked);
	okButton.addEventListener("click", onButtonClick);
	timerInput.addEventListener("focusout", function() {
		onInputFocusOut(this);
	});
};

function onInputFocusOut(event) {
	htmlElements.timerInput.style.borderColor = !checkIfTimeCanBeAdded(event.value) ? "red" : "green";
}

function onStartButtonClicked() {
	if (localStorage.getItem("timer")) {
		currentTimer = localStorage.getItem("timer");
	} else if (localStorage.getItem("timerDefoult")) {
		currentTimer = localStorage.getItem("timerDefoult");
		htmlElements.output.innerText = localStorage.getItem("timerDefoult");
	} else {
		htmlElements.output.innerText = defaultTimer;
		currentTimer = defaultTimer;
	}
	newTimerValue = currentTimer.split(":");
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
	htmlElements.output.style.color = "";
	if (localStorage.getItem("timerDefoult")) {
		htmlElements.output.innerText = localStorage.getItem("timerDefoult");
	} else {
		htmlElements.output.innerText = defaultTimer;
	}
	clearInterval(timerTiker);
	timerTiker = null;
	localStorage.removeItem("timer");
}

function onTimerTicker() {
	if (!sec && !min && !hrs) {
		clearInterval(timerTiker);
		htmlElements.output.style.color = "red";
	} else {
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
			(hrs ? (hrs >= 10 ? hrs : "0" + hrs) : "00") +
			":" +
			(min ? (min >= 10 ? min : "0" + min) : "00") +
			":" +
			(sec >= 10 ? sec : "0" + sec);
		localStorage.setItem("timer", htmlElements.output.innerText);
	}
}

//управление временем таймера

function onButtonClick() {
	const { output, timerInput } = htmlElements;
	onInputFocusOut(timerInput);
	if (checkIfTimeCanBeAdded(timerInput.value)) {
		switchToMode("timer");
		output.innerText = timerInput.value;
		defaultTimer = timerInput.value;
		localStorage.setItem("timerDefoult", defaultTimer);
		localStorage.removeItem("timer");
		resetInput();
	}
}

function resetInput() {
	htmlElements.timerInput.value = "";
	htmlElements.timerInput.style.borderColor = "";
}

function checkIfTimeCanBeAdded(input) {
	const inputArray = input.split(":");
	if (isInputNumber(inputArray) && isInputValid(inputArray) && isTimeCorrect(inputArray)) {
		return true;
	} else {
		return false;
	}
}

function isInputNumber(inputArray) {
	if (isNumber(inputArray[0]) && isNumber(inputArray[1]) && isNumber(inputArray[2])) {
		return true;
	} else {
		return false;
	}
}

function isTimeCorrect(inputArray) {
	if (
		(inputArray[0].length === 1 || inputArray[0].length === 2) &&
		inputArray[1].length === 2 &&
		inputArray[2].length === 2
	) {
		return true;
	} else {
		return false;
	}
}

function isInputValid(inputArray) {
	if (parseInt(inputArray[0]) < 24 && parseInt(inputArray[1]) < 60 && parseInt(inputArray[2]) < 60) {
		return true;
	} else {
		return false;
	}
}
function isNumber(value) {
	return !isNaN(value) && value.trim() !== "" && value !== null && value !== undefined;
}

export { Timer };
export { onStopButtonClicked };
