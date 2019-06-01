import { Table } from "./table.js";
import { Chear } from "./chear.js";
import { AirСonditioning } from "./air.js";
import { Teacher } from "./teacher.js";
import { Student } from "./student.js";
import { Computer } from "./computer.js";
import { OtherDevices } from "./otherDevices.js";
import { RoomWindow } from "./roomWindow.js";
import { StudyBook } from "./studyBook.js";

const button = document.querySelector("button");

button.addEventListener("click", function() {
	//Объявляем объект
	function Room() {}

	const room = new Room();

	const table = new Table("big", "wood", 2, 100);
	table.stands();
	/*----------------------------------------------------------------------------------- */

	const chear = new Chear("small", 10);
	chear.creaks();
	/*----------------------------------------------------------------------------------- */

	const airСonditioning = new AirСonditioning("plastic", "high", "white");
	airСonditioning.warm();
	/*----------------------------------------------------------------------------------- */

	const teacher = new Teacher("high", "huge", 30);
	teacher.teach();
	/*----------------------------------------------------------------------------------- */

	const student = new Student("little", "high", 5);
	student.read();
	/*----------------------------------------------------------------------------------- */

	const computer = new Computer("windows", "plastic", "false", "powerful");
	computer.works();
	/*----------------------------------------------------------------------------------- */

	const otherDevices = new OtherDevices("keyboard", "computer mouse", "speakers", 5);
	otherDevices.connect();
	/*----------------------------------------------------------------------------------- */

	const roomWindow = new RoomWindow("glass", "medium", 3);
	roomWindow.opens();
	/*----------------------------------------------------------------------------------- */

	const studyBook = new StudyBook("paper", "small", 300);
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
