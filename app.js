const board = document.querySelector('.board')
const userinput = document.getElementById('userinput')
const submitsize = document.getElementById('submitinput')
const resetBoard = document.querySelector('.Reset')
const buttons = document.querySelectorAll('.option')
const userInfo = document.querySelector('.UserInfo')
let penColor = 'Black'
submitsize.addEventListener('click', inputValidator)
resetBoard.addEventListener('click', clearBoard)

buttons.forEach(button => {
	button.addEventListener('click', () => {
		penColor = button.value
	})

});

function createBoard(size) {
	board.innerHTML = ''
	for (let i = 0; i < size; i++) {
		const row = document.createElement('row')
		row.classList.add('row')
		for (let j = 0; j < size; j++) {
			const column = document.createElement('column')
			column.classList.add('column')
			row.appendChild(column)
		}
		board.appendChild(row)
	}
	draw()
}


function draw() {
	const squares = document.querySelectorAll('.column')
	squares.forEach((square) => {
		square.addEventListener('mouseover', () => {
			userInfo.innerHTML = ''
			if (penColor == 'Random') {
 				let randomColor = Math.floor(Math.random() * 16777215).toString(16);
				square.style.backgroundColor = `#${randomColor}`
			} else {
				square.style.backgroundColor = penColor
			}
		})
	});
}

function inputValidator() {
	let value = userinput.value
	if (isNaN(value) || value < 2 || value > 100) {
		console.log('Please enter an integer value between 2 and 100')
		alert('Please enter an integer value between 2 and 100')
		createBoard(10)
	} else {
		console.log('good value')
		createBoard(value)
		let info = document.createElement('p')
		info.textContent = `Grid updated to size :  ${value} x ${value} `
		userInfo.appendChild(info)
	}
}

function clearBoard() {
   const squares = document.querySelectorAll('.column')
	squares.forEach((square) => {
		square.style.backgroundColor = ''
	})
}

createBoard(userinput.value)