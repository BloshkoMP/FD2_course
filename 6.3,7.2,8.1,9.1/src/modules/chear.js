function Chear(size, num) {
	this.size = size;
	this.height = 10;
	this.number = num;
	const name = function() {};
	this.towerHeight = function() {
		alert(this.height * +this.number);
	};
}

Chear.prototype.creaks = function() {
	this.height = 15;
	console.log(`${this.size} chear creaks`);
};
export { Chear };
