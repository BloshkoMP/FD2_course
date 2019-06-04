function OtherDevices(input, otherInput, sound, num) {
	this.input = input;
	this.otherInput = otherInput;
	this.sound = sound;
	this.wireLength = 1.5;
	this.numberOfDevice = num;
	const name = function() {}; //область видимости функция OtherDevices
	this.TotalLength = function() {
		alert(+this.numberOfDevice * wireLength);
	};
}

OtherDevices.prototype.connect = function() {
	this.wireLength = 2;
	console.log(`every ${this.input} can connect to computer`);
};
export { OtherDevices };
