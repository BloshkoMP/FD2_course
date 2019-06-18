const htmlElements = {
	output: document.querySelector(".container [data-mode=clock] .output")
};

class Clock {
	constructor() {
		this.onIntervalTicker();
		setInterval(this.onIntervalTicker, 1000);
	}
	onIntervalTicker() {
		const currentDate = new Date();
		const currentTime = currentDate.toTimeString().split(" ")[0];
		htmlElements.output.innerText = currentTime;
	}
}

export { Clock };
