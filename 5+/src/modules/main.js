const elements = {
	ball: document.querySelector("img.ball"),
	field: document.querySelector("div.field"),
	repeatButton: document.querySelector(".repeat"),
	restartButton: document.querySelector(".restart"),
	localStorageButton: document.querySelector(".localStorage"),
	stopButton: document.querySelector(".stopRepeat")
};
let moveArray = [{ top: 0, left: 0 }];
let stop;
elements.field.addEventListener("mousemove", moveBall);
elements.repeatButton.addEventListener("click", repeatBallMove);
elements.restartButton.addEventListener("click", restart);
elements.localStorageButton.addEventListener("click", clearLocalStorage);
elements.stopButton.addEventListener("click", stopRepeat);

function moveBall(event) {
	const fieldCoordinate = elements.field.getBoundingClientRect();
	const innerField = {
		top: fieldCoordinate.top + elements.field.clientTop,
		left: fieldCoordinate.left + elements.field.clientLeft
	};
	const ballCoordinate = {
		top: event.clientY - innerField.top - elements.ball.clientHeight / 2,
		left: event.clientX - innerField.left - elements.ball.clientWidth / 2
	};

	if (ballCoordinate.top < 0) ballCoordinate.top = 0;
	if (ballCoordinate.top + elements.ball.clientHeight > elements.field.clientHeight) {
		ballCoordinate.top = elements.field.clientHeight - elements.ball.clientHeight;
	}
	if (ballCoordinate.left < 0) ballCoordinate.left = 0;
	if (ballCoordinate.left + elements.ball.clientWidth > elements.field.clientWidth) {
		ballCoordinate.left = elements.field.clientWidth - elements.ball.clientWidth;
	}
	elements.ball.style.top = ballCoordinate.top + "px";
	elements.ball.style.left = ballCoordinate.left + "px";

	//cследующие условия упрощают сохранение координат
	if (
		ballCoordinate !== moveArray[moveArray.length - 1] && //не записываются одинаковые координаты
		(Math.abs(ballCoordinate.top - moveArray[moveArray.length - 1].top) > 60 || //не записываются координаты разница между которыми меньше 60ти пикселей.
			Math.abs(ballCoordinate.left - moveArray[moveArray.length - 1].left) > 60)
	) {
		moveArray.push({ top: ballCoordinate.top, left: ballCoordinate.left });
		localStorage.setItem("moveArray", JSON.stringify(moveArray));
	}
}
//воспроизведение движения объекта
function repeatBallMove() {
	let i = 0;
	stop = false;
	let storageArray = JSON.parse(localStorage.getItem("moveArray"));
	if (storageArray) {
		if (storageArray.length < 15) {
			intervalMove(storageArray, 1000);
		} else {
			intervalMove(storageArray, 400);
		}
	}
}
function intervalMove(storageArray, delay) {
	let i = 0;
	let moveInterval = setInterval(function() {
		elements.ball.style.top = storageArray[i].top + "px";
		elements.ball.style.left = storageArray[i].left + "px";
		i++;
		if (i === storageArray.length || stop) clearInterval(moveInterval);
	}, delay);
}

function restart() {
	moveArray = [{ top: 0, left: 0 }];
	elements.ball.style.top = "0px";
	elements.ball.style.left = "0px";
}
function clearLocalStorage() {
	localStorage.clear();
	restart();
}
function stopRepeat() {
	stop = true;
}
