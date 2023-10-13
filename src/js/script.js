const btnStart = document.querySelector('#start')
const gameStartBtn = document.querySelector('#start-game')
const restartGameBtn = document.querySelector('.restart-game')
const startScreen = document.querySelector('.start-screen')
const menuBox = document.querySelector('.menu-box')
const gameScreen = document.querySelector('.game-screen')
const startOptions = document.querySelector('#start-options')
const resultBox = document.querySelector('.result-box')
const infoBox = document.querySelector('.info')
const userImg = document.querySelector('#user-img')
const computerImg = document.querySelector('#computer-img')

function start() {
  userChoice()
  changeStartScreen()
}
function changeStartScreen() {
  //Faz o input ficar vermelho caso o usuário não escolha uma opcão.
  if (userChoice() === 'escolha') {
    startOptions.style.backgroundColor = '#FF4500'
    startOptions.style.color = '#ffff'
    return
  }
  //Munda a tela de selecao para a tela do jogo
  startScreen.classList.add('hide')
  gameScreen.classList.remove('hide')
}
function gameStart() {
  // Inicia o jogo, realizando comparacoes e determinando o resultado final.
  const inputUserNumber = document.querySelector('#input-number')
  const result = document.querySelector('#result')
  const totalValue = document.querySelector('#value')

  let computerValue = parseInt(Math.random() * 11)
  let userValue = parseFloat(inputUserNumber.value)
  let total = computerValue + userValue

  if (userValue > 10 || userValue < 0 || inputUserNumber.value === '') {
    window.alert('insira um valor de 0 a 10!')
    return
  } else if (
    startOptions.value === 'par' &&
    (computerValue + userValue) % 2 === 0
  ) {
    result.innerHTML = 'Você ganhou'
  } else if (
    startOptions.value === 'impar' &&
    (computerValue + userValue) % 2 === 1
  ) {
    result.innerHTML = 'Você ganhou'
  } else {
    result.innerHTML = 'Você perdeu'
  }
  totalValue.innerHTML = `total: ${total}`

  showResult()

  changeHand(userValue, computerValue)
}
function userChoice() {
  // pega a escolha do usuário, entre par ou impar
  const startOptions = document.querySelector('#start-options')
  const choiceValue = document.querySelector('#choice')

  let btnStartValue = startOptions.value

  choiceValue.innerHTML = btnStartValue
  return btnStartValue
}
function changeHand(userValue, computerValue) {
  // faz a troca das imagens conforme escolha do usuário e numeros da máquina
  userImg.setAttribute('src', `./src/img/hand-${userValue}.png`)
  userImg.setAttribute('alt', 'mão que representa o usuario, ao lado direito.')
  computerImg.setAttribute('src', `./src/img/hand-${computerValue}.png`)
  computerImg.setAttribute(
    'alt',
    'mão que representa a máquina, ao lado esquerdo.'
  )
}
function showResult() {
  // Mostra o resultado
  restartGameBtn.classList.remove('hide')
  resultBox.classList.remove('hide')
  infoBox.classList.remove('hide')

  gameStartBtn.innerHTML = 'tentar novamente.'
}
function restartGame() {
  // volta para tela inicial removendo imagens,tela jogo, inputs e menus
  const inputUserNumber = document.querySelector('#input-number')

  restartGameBtn.classList.add('hide')
  resultBox.classList.add('hide')
  gameScreen.classList.add('hide')
  startScreen.classList.remove('hide')
  infoBox.classList.add('hide')

  inputUserNumber.value = ''
  userImg.setAttribute('alt', '')
  userImg.setAttribute('src', '')
  computerImg.setAttribute('src', '')
  computerImg.setAttribute('alt', '')
  gameStartBtn.innerHTML = 'jogar'
}

btnStart.addEventListener('click', e => {
  e.preventDefault()
  start()
})

gameStartBtn.addEventListener('click', e => {
  e.preventDefault()
  gameStart()
})

restartGameBtn.addEventListener('click', () => {
  restartGame()
})
