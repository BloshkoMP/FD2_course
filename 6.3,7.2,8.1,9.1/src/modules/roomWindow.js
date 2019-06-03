function RoomWindow(material, size, num) {
	this.material = material;
	this.size = size;
	this.numberOfGlasses = num;
	this.purity = "50%";
	const name = function() {}; //область видимости функция RoomWindow
	this.sentence = function() {
		alert(`this ${this.numberOfGlasses}-ply glasses window is ${this.purity} clean`);
	};
}

RoomWindow.prototype.opens = function() {
	this.purity = "30%";
	console.log(`${this.size} window opens`);
};
export { RoomWindow };
