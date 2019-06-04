const variable = 999; //область видимости константы variable - файл chear.js
function Chear(size, num) {
	this.size = size;
	this.height = 10;
	this.number = num;
	const name = function() {}; //область видимости функция Chear
	this.towerHeight = function() {
		alert(this.height * +this.number);
	};
}
let anyNumber = 777; //область видимости файл chear.js
Chear.prototype.creaks = function() {
	this.height = 15;
	let num = 15; //область видимости функциональное выражение creaks
	console.log(`${this.size} chear creaks`);
};
export { Chear };
