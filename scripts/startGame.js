// Initialisation du paquet de cartes
let countCards = 0;
let mainDeck = [];
let userScore = 0;
let dealerScore = 0;

// Initialiser les données du jeu
function initGame() {

    // Création de 6 jeux de cartes
    for (let p = 0; p < 6; p++) {
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 14; j++) {
                var currentCardPoints = j > 9 ? 10 : j;
                var currentCardSign = i == 0 ? '♥' : i == 1 ? '♠' : i == 2 ? '♣' : '♦';
                var currentCardColor = (i == 0 | i == 3) ? 'red' : 'black';
                var currentCardValue = j == 1 ? 'A' : j == 11 ? 'J' : j == 12 ? 'Q' : j == 13 ? 'K' : j + '';
                var currentCard = [p * 4 * 13 + i * 13 + j, currentCardSign, currentCardColor, currentCardValue, currentCardPoints];
                countCards++;
                mainDeck.push(currentCard);
            }
        }
    }

    console.log('' + countCards + ' cartes ont été créées');
}

// Démarre le jeu
function startGame(){
    elCoins.classList.add("out")
    elDealBtn.remove()

    // Création de la zone de jeu
    createGameZone()

    // Jeu
    userScore = 0
    console.log(userScore)

    dealerScore = 0
    console.log(dealerScore)

    for (let card of elsCards) {
        card.remove()
    }

    userScore = drawMore(userScore, gameZone)
    userScore = drawMore(userScore, gameZone)

    dispPoints.textContent = 'Vous avez actuellement ' + userScore + ' points en main';
    console.log('Vous avez actuellement ' + userScore + ' points en main')



}

// Fonction du jeu


// Piocher une carte supplémentaire
function drawMore(score, zone) {
    console.log('Vous avez demandé une carte de plus')

    const newCard = createBalise("div", zone, "card")
    const newCardHG = createBalise("p", newCard, "hg_display")
    const newCardC = createBalise("p", newCard, "c_display")
    const newCardBG = createBalise("p", newCard, "bd_display")

    let randCard1 = Math.floor(Math.random() * mainDeck.length + 1);

    newCard.style.display = 'flex';
    newCardHG.style.color = mainDeck[randCard1][2];
    newCardC.style.color = mainDeck[randCard1][2];
    newCardBG.style.color = mainDeck[randCard1][2];
    newCardHG.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
    newCardC.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
    newCardBG.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
    console.log('Vous avez eu le ' + mainDeck[randCard1][3] + ' de ' + mainDeck[randCard1][1])

    score += mainDeck[randCard1][4]
    // FIXME: L'AS compte pour 1 points

    elsCards.push(newCard)
    return score
}

// Double la mise, pioche 1 carte et arrête de piocher
function double() {
    pay(amountBet)
    elCredit.textContent = userCredits;
    userScore = drawMore(userScore, gameZone)
    stand()

    // FIXME: Le jeu remplace les cartes déjà piochées par 2 nouvelles cartes lors du double
    // FIXME: Le jeu ne rembourse que 2 fois le montant initial au lieu du montant doublé
}

// Arrête de piocher
function stand() {
    fakeCard.style.display = "none"

    // Le croupier tire des cartes tant qu'il a un score inférieur à 17
    while (dealerScore < 17) {
        dealerScore = drawMore(dealerScore, elDealerZone)
    }

    choiceZone.classList.add('hidden')

    // TODO: Rembourser 2,5 fois le montant misé si le joueur a un BlackJack
    if ((userScore > dealerScore || dealerScore > 21) && userScore <= 21) {
        console.log("Félicitations !")
        resultZone.innerHTML = `Félicitations !! Vous avez gagné !!<br>
 Vous avez ${userScore} points et le croupier à ${dealerScore} points !`;
        userCredits += 2 * amountBet;
    } else {
        console.log("Dommage, vous avez perdu votre mise")
        resultZone.innerHTML = `Dommage, vous avez perdu votre mise.<br>
         Vous avez ${userScore} points et le croupier à ${dealerScore} points.`;
    }

    elCredit.textContent = userCredits;

        resultZone.classList.remove('hidden')
    replayBtn = createButton('Rejouer', resultZone);
    replayBtn.addEventListener("click", getTokens);


}

// Dédouble le jeu
function split() {
    // TODO: Dédouble en 2 jeux pour le joueur
}




// function redBase() {
//     firstCard.classList.add("redBase")
//     secondCard.classList.add("redBase")
//     firstCard.classList.add("turn")
//     secondCard.classList.add("turn")
// }

// function turnCard() {
//     firstCard.classList.add("turn")
//     secondCard.classList.add("turn")
// }
//
// // Piocher deux cartes
// function drawCards(score, userCredits) {
//     console.log('Vous avez demandé 2 cartes');
//
//     let randCard1 = Math.floor(Math.random() * mainDeck.length + 1);
//
//     card1HG.style.color = mainDeck[randCard1][2];
//     card1C.style.color = mainDeck[randCard1][2];
//     card1BG.style.color = mainDeck[randCard1][2];
//     card1HG.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
//     card1C.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
//     card1BG.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
//     console.log('Vous avez eu le ' + mainDeck[randCard1][3] + ' de ' + mainDeck[randCard1][1])
//
//     score += mainDeck[randCard1][4]
//     console.log(mainDeck[randCard1][4])
//
//     mainDeck.splice(randCard1, 1);
//
//     let randCard2 = Math.floor(Math.random() * mainDeck.length + 1);
//
//     card2HG.style.color = mainDeck[randCard2][2];
//     card2C.style.color = mainDeck[randCard2][2];
//     card2BG.style.color = mainDeck[randCard2][2];
//
//     card2HG.textContent = mainDeck[randCard2][3] + mainDeck[randCard2][1];
//     card2C.textContent = mainDeck[randCard2][3] + mainDeck[randCard2][1];
//     card2BG.textContent = mainDeck[randCard2][3] + mainDeck[randCard2][1];
//     console.log('Vous avez eu le ' + mainDeck[randCard2][3] + ' de ' + mainDeck[randCard2][1])
//
//     score += mainDeck[randCard2][4]
//     console.log(score)
//
//     mainDeck.splice(randCard2, 1);
//     return score
// }