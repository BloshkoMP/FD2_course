function Computer(OS, material, broken, performance) {
	this.OS = OS;
	this.material = material;
	this.broken = broken;
	this.power = performance;
	this.cost = 200;
	const name = function() {};
	this.sentences = function() {
		alert(`this ${this.power} computer costs ${this.cost} euros`);
	};
}

Computer.prototype.works = function() {
	this.cost = 300;
	console.log(`Computer work on ${this.OS} system`);
};
export { Computer };
