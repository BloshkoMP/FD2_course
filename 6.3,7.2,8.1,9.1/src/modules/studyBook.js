function StudyBook(material, size, bookLength) {
	this.material = material;
	this.size = size;
	this.numberOfPages = bookLength;
	this.wordsPerPage = 1000;
	const name = function() {};
	this.wordsInTheBook = function() {
		alert(+this.numberOfPages * this.wordsPerPage);
	};
}

StudyBook.prototype.make = function() {
	console.log(`Books are made from ${this.material}`);
};
export { StudyBook };
