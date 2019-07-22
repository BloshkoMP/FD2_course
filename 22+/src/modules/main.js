const linkParser = link => {
	const parsedLink = link.split("?")[1].split("&");
	const result = {};

	parsedLink.forEach(element => {
		let elem = element.split("=");
		result[elem[0]] = elem[1];
	});
	console.log(result);
};

linkParser(
	"https://api.priorbank.by:9344/authorize/v2/oauth2/authentication?clientID=asd&scope=asd&redirectUri=asd&codeChallenge=asd&codeChallengeMethod=asd&state=asd"
);
