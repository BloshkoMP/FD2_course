function sum(value) {
	let result = 0;

	function sum2(value) {
		result += value;
		return sum2;
	}
	sum2(value);

	sum2.showResult = () => {
		console.log("sum", result);
	};
	return sum2;
}
sum(10)(10)(-20)(12).showResult();
