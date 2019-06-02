function showObj() {
	//Объявляем объекты

	let room = {};
	let table = { size: "big", material: "wood", numberOfPerson: 2 };
	let chear = { size: "small", move: function move() {} };
	let airСonditioning = { material: "plastic", need: "high", warm: function() {} };
	let teacher = { knowlegeLvl: "high", experience: "huge" };
	let student = { experience: "little", desireToLearn: "high" };
	let computer = { OS: "windows", material: "plastic", broken: false };
	let otherDevices = {
		input: "keyboard",
		otherInput: "computer mouse",
		sound: "speakers"
	};
	let roomWindow = { material: "glass", size: "medium" };
	let studyBook = { material: "paper", size: "small", lies: () => {} };

	//Объявляем функции

	let answer = function() {};
	let ask = function() {};
	let sit = function() {};
	let breathe = function() {};
	let blow = function() {};
	let connect = function() {};
	let teach = function() {};
	let help = function() {};
	let work = function() {};
	let creaks = function() {};

	//Связываем объекты для соблюдения вложенности

	room.table = table;
	room.chear = chear;
	room.airСonditioning = airСonditioning;
	room.teacher = teacher;
	room.student = student;
	room.roomWindow = roomWindow;
	table.computer = computer;
	table.studyBook = studyBook;
	computer.otherDevices = otherDevices;
	computer.work = work;
	computer.help = help;
	airСonditioning.blow = blow;
	airСonditioning.work = work;
	teacher.answer = answer;
	teacher.teach = teach;
	teacher.breathe = breathe;
	student.sit = sit;
	student.ask = ask;
	student.breathe = breathe;
	otherDevices.connect = connect;
	roomWindow.creaks = creaks;
	
	Function.prototype.toJSON = function() {
		return "This is function";
	};
	//преобразуем объект в строку для вывода в DOM
	let str = JSON.stringify(room, null, 4);
	document.querySelector(".text").innerText = str;
	console.log(room);
}
