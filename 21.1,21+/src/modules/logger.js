export default (name, before, after, comments = "") => {
	console.log(
		`${name} start: ${before.toString().substring(8, 13)} finish: ${after
			.toString()
			.substring(8, 13)}; difference: ${after - before}; ${comments}`
	);
};
