function Student(experience, desireToLearn, duration) {
	this.experience = experience;
	this.desireToLearn = desireToLearn;
	this.trainingPeriod = duration;
	this.passedMonth = 2;
	const name = function() {}; //область видимости функция Student
	this.leftMonth = function() {
		alert(+this.trainingPeriod - this.passedMonth);
	};
}

Student.prototype.read = function() {
	this.passedMonth = 3;
	console.log("Student must read a books");
};
export { Student };
