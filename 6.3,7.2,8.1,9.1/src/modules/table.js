function Table(size, material, numberOfPerson, long) {
	this.size = size;
	this.material = material;
	this.numberOfPerson = numberOfPerson;
	this.length = 10;
	this.width = long;
	const name = function() {};
	this.square = function() {
		alert(this.length * +this.long);
	};
}
Table.prototype.stands = function() {
	this.length = 15;
	console.log(`${this.size} table stands`);
};
export { Table };
