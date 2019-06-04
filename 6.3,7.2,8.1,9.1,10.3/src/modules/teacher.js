function Teacher(knowlegeLvl, experience, age) {
	this.knowlegeLvl = knowlegeLvl;
	this.experience = experience;
	this.years = age;
	this.startedTeaching = 25;
	const name = function() {}; //область видимости функция Teacher
	this.teachingExperience = function() {
		alert(+this.age - this.startedTeaching);
	};
}

Teacher.prototype.teach = function() {
	this.startedTeaching = 24;
	console.log("Teacher must teach");
};
export { Teacher };
