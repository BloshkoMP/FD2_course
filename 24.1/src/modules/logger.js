export class Logger {
	constructor(name, before, after, comments = "") {
		this.name = name;
		this.before = before;
		this.after = after;
		this.comments = comments;
	}

	logInfo = () => {
		const before = this.before.toString().substring(8, 13);
		const after = this.after.toString().substring(8, 13);
		console.log(
			`${this.name} begin: ${before} end: ${after}; difference: ${this.after - this.before}; ${this.comments}`
		);
	};
}
