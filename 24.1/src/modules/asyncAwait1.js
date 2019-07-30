import { Promise2 } from "./promise2.js";

export class AsyncAwait1 {
	constructor(name) {
		this.name = name;
	}
	run = async function run(url) {
		return await new Promise2(this.name).run(url);
	};
}
