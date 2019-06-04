import { Table } from "./table.js";
import { Chear } from "./chear.js";
import { AirСonditioning } from "./air.js";
import { Teacher } from "./teacher.js";
import { Student } from "./student.js";
import { Computer } from "./computer.js";
import { OtherDevices } from "./otherDevices.js";
import { RoomWindow } from "./roomWindow.js";
import { StudyBook } from "./studyBook.js";

const variable = "global scope variable"; //область видимости файл main.js

const button = document.querySelector("button"); //область видимости файл main.js

button.addEventListener("click", function() {
	let anyString = ""; //область видимости анонимная функция
	//i - область видимости цикл for
	for (let i = 0; i < variable.split(" ").length; i++) {
		anyString += variable.split(" ")[i] + " ";
		switch (i) {
			case 0:
				let str = null; //область видимости оператор switch {}
				if (!str) {
					let str3 = "zero"; //область видимости str3 - условный оператор if
					console.log(str3);
				}
				console.log(str);
				break;
			case 1:
				let str2 = "one"; //область видимости оператор switch {}
				console.log(str2);
				break;
			default:
				break;
		}
	}

	//Объявляем объект
	function Room() {}

	const room = new Room();

	const table = new Table("big", "wood", 2, 100); //область видимости анонимная функция
	table.stands();
	/*----------------------------------------------------------------------------------- */

	const chear = new Chear("small", 10); //область видимости анонимная функция
	chear.creaks();
	/*----------------------------------------------------------------------------------- */

	const airСonditioning = new AirСonditioning("plastic", "high", "white"); //область видимости анонимная функция
	airСonditioning.warm();
	/*----------------------------------------------------------------------------------- */

	const teacher = new Teacher("high", "huge", 30); //область видимости анонимная функция
	teacher.teach();
	/*----------------------------------------------------------------------------------- */

	const student = new Student("little", "high", 5); //область видимости анонимная функция
	student.read();
	/*----------------------------------------------------------------------------------- */

	const computer = new Computer("windows", "plastic", "false", "powerful"); //область видимости анонимная функция
	computer.works();
	/*----------------------------------------------------------------------------------- */

	const otherDevices = new OtherDevices("keyboard", "computer mouse", "speakers", 5); //область видимости анонимная функция
	otherDevices.connect();
	/*----------------------------------------------------------------------------------- */

	const roomWindow = new RoomWindow("glass", "medium", 3); //область видимости анонимная функция
	roomWindow.opens();
	/*----------------------------------------------------------------------------------- */

	const studyBook = new StudyBook("paper", "small", 300); //область видимости анонимная функция
	studyBook.make();

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

	//преобразуем объект в строку для вывода в DOM
	const str = JSON.stringify(room, null, 4);
	document.querySelector(".text").innerText = str;
});
