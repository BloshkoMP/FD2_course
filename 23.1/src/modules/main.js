function delay(ms) {
	return Promise.resolve().then(() => {
		return new Promise(resolve => {
			setTimeout(() => resolve(ms), ms);
		});
	});
}

delay(2000).then(ms => {
	console.log(ms);
});
