import { Logger } from "./logger.js";

export class ButtonClick1 {
	constructor() {
		this.name = name;
		this.htmlElements = { button: document.querySelector("button") };
	}

	run = url => {
		const before = new Date().getTime();
		const { button } = this.htmlElements;
		return new Promise(resolve => {
			button.addEventListener("click", () => {
				const after = new Date().getTime();
				resolve(new Logger(this.name, before, after));
			});
		});
	};
}

// function ButtonClick1(name) {
// 	this.name = name;
// 	this.htmlElements = { button: document.querySelector("button") };
// }

// ButtonClick1.prototype.run = function(url) {
// 	const before = new Date().getTime();
// 	return new Promise((resolve, reject) => {
// 		this.htmlElements.button.addEventListener("click", () => {
// 			const after = new Date().getTime();
// 			resolve(new Logger(this.name, before, after));
// 		});
// 	});
// };

// export { ButtonClick1 };
