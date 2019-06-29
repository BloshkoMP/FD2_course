function getObj() {
	let counter = 0;
	function increase(value) {
		counter += value;
	}
	function decrease(value) {
		counter -= value;
	}
	function show() {
		console.log("counter", counter);
	}

	const obj = { increase, decrease, show };
	return obj;
}

const counterObj = getObj();

counterObj.increase(5);
counterObj.decrease(3);
counterObj.show();
