const btnStart = document.querySelector('#start')
const restartGameBtn = document.querySelector('#restart-game')
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

  let btnStartValue = startOptions.value
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
