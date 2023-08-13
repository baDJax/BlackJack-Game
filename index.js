let player = {
    name: "Mukul",
    chips: "999"
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard (){ 
    let randomNumber = Math.ceil(Math.random() * 13) 
    if(randomNumber === 1){
        return 11
    } else if(randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

startGame = () => {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards  = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

renderGame = () => {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message 
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
}
function newCard () {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}