const obj = {
	size: 123,
	coords: {
		x: 1,
		y: {
			value: 111,
			direction: "top"
		},
		showDirection() {
			console.log(`coords: ${this.y.direction}`);
		}
	},
	showSize() {
		console.log(`size: ${this.size}`);
	}
};

let arr = [];

function cloneObject(obj) {
	if (arr.indexOf(obj) > -1) {
		return "circular referense";
	}
	arr.push(obj);
	let cloneObj = {};
	for (let key in obj) {
		if (typeof obj[key] === "object") {
			cloneObj[key] = cloneObject(obj[key]);
		} else {
			cloneObj[key] = obj[key];
		}
	}
	return cloneObj;
}

const getObj = cloneObject(obj);
console.log(getObj);
