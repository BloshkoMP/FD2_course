const htmlElements = {
	player: document.querySelector(".player"),
	computer: document.querySelector(".computer"),
	cell: document.querySelectorAll(".cell"),
	button: document.querySelectorAll("button")
};
let playerSign, computerSign, checkSign;
let round = 1;
const winArray = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function move(id) {
	if (htmlElements.cell[id].innerText !== "" || htmlElements.player.innerText == "") {
		return true;
	}
	htmlElements.cell[id].innerText = playerSign;
	round++;
	aiMove(computerSign);
	if (round > 4) end();
	if (round === 9) {
		alert("draw");
		restart();
	}
}

function disabledButton(value = true) {
	htmlElements.button[0].disabled = value;
	htmlElements.button[1].disabled = value;
}

function playerSelect(change) {
	switch (change) {
		case "X":
			setPlayersData("X", "O");
			break;
		case "O":
			setPlayersData("O", "X");
			break;
		default:
			new Error("Error");
			break;
	}
	disabledButton();
}

function setPlayersData(first, second) {
	const { player, computer } = htmlElements;
	player.innerText = first;
	playerSign = first;
	computer.innerText = second;
	computerSign = second;
}

//проверка 3 в ряд
function x_o(a, b, c) {
	const { cell } = htmlElements;
	if (cell[a].innerText == "X" && cell[b].innerText == "X" && cell[c].innerText == "X") {
		return "X";
	} else if (cell[a].innerText == "O" && cell[b].innerText == "O" && cell[c].innerText == "O") {
		return "O";
	}
}

function end() {
	for (let i = 0; i < winArray.length; i++) {
		if (x_o(...winArray[i]) == "X") {
			alert("Player X win!");
			restart();
			return true;
		} else if (x_o(...winArray[i]) == "O") {
			alert("Player O win!");
			restart();
			return true;
		}
	}
}

function restart() {
	const { player, computer, cell } = htmlElements;
	disabledButton(false);
	player.innerText = "";
	computer.innerText = "";
	cell.forEach(function(element) {
		element.innerText = "";
	});
	round = 1;
}

function aiMove(side) {
	const { cell } = htmlElements;
	if (round < 3) {
		if (!cell[4].innerText) {
			cell[4].innerText = side;
		} else if (cell[4].innerText) {
			cell[0].innerText = side;
		}
	} else if (round === 3) {
		aiRandomMove();
	} else if (round >= 4) {
		aiMustWin();
	}
	round++;
}
//проверка на возможность победы
function aiMustWin() {
	let turn;
	checkSign = computerSign;
	for (let i = 0; i < winArray.length; i++) {
		turn = threePoint(...winArray[i]);
		if (turn || turn === 0) {
			htmlElements.cell[turn].innerText = computerSign;
			break;
		}
	}
	if (turn === false) {
		aiDontlose();
	}
}
//проверка на проигрыш
function aiDontlose() {
	let turn = false;
	checkSign = playerSign;
	for (let i = 0; i < winArray.length; i++) {
		turn = threePoint(winArray[i][0], winArray[i][1], winArray[i][2]);
		if (turn || turn === 0) {
			htmlElements.cell[turn].innerText = computerSign;
			break;
		}
	}
	if (turn === false) {
		aiRandomMove();
	}
}

function aiRandomMove() {
	const { cell } = htmlElements;
	const freeCell = [];
	for (let i = 0; i < cell.length; i++) {
		if (!cell[i].innerText) {
			freeCell.push(i);
		}
	}
	cell[freeCell[random(0, freeCell.length - 1)]].innerText = computerSign;
}

//определение есть ли в линии 2 одинаковых символа и пустое место.
//Возвращаем индекс пустого места из переданного массива
function threePoint(a, b, c) {
	const { cell } = htmlElements;
	const checkedArray = [cell[a].innerText, cell[b].innerText, cell[c].innerText],
		arr = [a, b, c];
	let sign = checkSign + checkSign;
	let strFromArray = "";

	checkedArray.forEach(function(element) {
		strFromArray += element;
	});

	if (strFromArray === sign) {
		return arr[checkedArray.indexOf("")];
	} else {
		return false;
	}
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
