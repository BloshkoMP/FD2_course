import log from "./logger.js";
let data = 0;
export default (name, url) => {
	const before = new Date().getTime();
	$.ajax({
		url: url,
		dataType: "json",
		success: () => {
			//замыкание
			const after = new Date().getTime();
			log(name, before, after); //замыкание
		}
	});
};
