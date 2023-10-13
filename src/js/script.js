const btnStart = document.querySelector('#start')
const restartGameBtn = document.querySelector('#restart-game')
const gameStartBtn = document.querySelector('#start-game')
const menuBox = document.querySelector('.menu-box')
const startScreen = document.querySelector('.start-screen')
const gameScreen = document.querySelector('.game-screen')
const startOptions = document.querySelector('#start-options')

function main() {
  userChoice()
  changeStartScreen()
}

function changeStartScreen() {
  if (userChoice() === 'ESCOLHA') {
    startOptions.style.backgroundColor = '#FF4500'
    startOptions.style.color = '#ffff'
    return
  }
  startScreen.classList.toggle('hide')
  gameScreen.classList.toggle('hide')
}

function userChoice() {
  const startOptions = document.querySelector('#start-options')
  const choiceValue = document.querySelector('#choice')

  let btnStartValue = startOptions.value

  choiceValue.innerHTML = btnStartValue
  return btnStartValue
}

function restartGame() {
  menuBox.classList.toggle('hide')
  startScreen.classList.toggle('hide')
  gameScreen.classList.toggle('hide')
}

btnStart.addEventListener('click', e => {
  e.preventDefault()
  main()
})
restartGameBtn.addEventListener('click', () => {
  startScreen.classList.toggle('hide')
  gameScreen.classList.toggle('hide')
})

gameStartBtn.addEventListener('click', () => {
  console.log('oi')
})
