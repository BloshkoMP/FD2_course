function getJSON(url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();

	xhr.onload = function() {
		callback(JSON.parse(xhr.responseText));
	};

	xhr.onerror = function() {
		console.error(`${xhr.status}: ${xhr.statusText}`);
	};
}

function Data() {}

Data.prototype.getUsefulContents = function(url, callback) {
	getJSON(url, function(data) {
		callback(data);
	});
};
export { Data };
