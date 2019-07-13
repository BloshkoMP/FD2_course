function getJSON(url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();

	xhr.onload = () => {
		callback(JSON.parse(xhr.responseText));
	};

	xhr.onerror = () => {
		console.error(`${xhr.status}: ${xhr.statusText}`);
	};
}

function Data() {}

Data.prototype.getUsefulContents = url => {
	return new Promise(resolve => {
		getJSON(url, data => {
			resolve(data);
		});
	});
};
export { Data };
