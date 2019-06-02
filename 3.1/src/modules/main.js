function main() {
	let name,
		lastName,
		otherName,
		old,
		male,
		tmp = "";
	do {
		debugger;
		name = prompt(tmp + " \nEnter your name!");
		if (name === "") {
			tmp = "Name is empty!";
		} else if (name === null) {
			alert("Form entry canceled!");
			return false;
		}
	} while (name === "");
	tmp = "";
	do {
		lastName = prompt(tmp + " \nEnter your last name!");
		if (lastName === "") {
			tmp = "Last name is empty!";
		} else if (lastName === null) {
			alert("Form entry canceled!");
			return false;
		}
	} while (lastName === "");
	tmp = "";
	do {
		otherName = prompt(tmp + " \nEnter your other name!");
		if (otherName === "") {
			tmp = "Other name is empty!";
		} else if (otherName === null) {
			alert("Form entry canceled!");
			return false;
		}
	} while (otherName === "");
	tmp = "";
	do {
		old = prompt(tmp + " \nHow old are you?");
		if (old.replace(/\d/g, "").length || old === "") {
			tmp = "It`s not a number";
		} else if (old === null) {
			alert("Form entry canceled!");
			return false;
		} else break;
	} while (old === "" || old.replace(/\d/g, "").length);
	male = confirm("Are you male?");
	debugger;
	alert(`ваше ФИО: ${name} ${lastName} ${otherName}\n
    ваш возраст в годах: ${old}\n
    ваш возраст в днях: ${old * 365}\n
    через 5 лет вам будет: ${+old + 5}\n
    ваш пол: ${male ? "мужской" : "женский"}\n
    вы на пенсии: ${
		old >= 60 && male ? "да" : old >= 55 && !male ? "да" : "нет"
	}`);
}
