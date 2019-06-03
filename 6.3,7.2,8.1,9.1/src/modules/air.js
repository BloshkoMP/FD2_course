function AirСonditioning(material, need, col) {
	this.material = material;
	this.need = need;
	this.color = col;
	this.cost = 600;
	const name = function() {}; //область видимости функция AirСonditioning()
	this.leafLetText = function() {
		alert(`this ${this.color} AirСonditioning cost ${this.cost} euros`);
	};
}

AirСonditioning.prototype.warm = function() {
	this.cost = 300;
	console.log(`${this.material}  AirСonditioning warm`);
};
export { AirСonditioning };
