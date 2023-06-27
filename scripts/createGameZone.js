// Déclaration des variables
let elDealerZone = null,
    gameZone = null,
    pointZone = null,
    choiceZone = null,
    buttonZone = null;

// Initialisation de la zone de jeu
function initGameZone() {
    // Espace pour les cartes du croupier
    elDealerZone = createBalise("div", main)
    elDealerZone.className = 'col-1 flexCenter h35 hidden'
    const fakeCard = createBalise("div", elDealerZone)
    fakeCard.className = 'card redBase turn'
    elsCards.push(fakeCard)

    // Espace pour les cartes du joueur
    gameZone = createBalise("div", main)
    gameZone.className = 'col-1 flexCenter h35 hidden'

    // Cartes au démarrage
    const firstCard = createBalise("div", gameZone, "card")
    firstCard.id = "firstCard"
    elsCards.push(firstCard)
    firstCard.classList.add("redBase")
    const secondCard = createBalise("div", gameZone, "card")
    secondCard.id = "secondCard"
    elsCards.push(secondCard)
    secondCard.classList.add("redBase")

    const card1HG = createBalise("p", firstCard, "hg_display")
    card1HG.textContent = "F ♥"
    const card1C = createBalise("p", firstCard, "c_display")
    card1C.textContent = "F ♥"
    const card1BG = createBalise("p", firstCard, "bd_display")
    card1BG.textContent = "F ♥"

    const card2HG = createBalise("p", secondCard, "hg_display")
    card2HG.textContent = "B ♥"
    const card2C = createBalise("p", secondCard, "c_display")
    card2C.textContent = "B ♥"
    const card2BG = createBalise("p", secondCard, "bd_display")
    card2BG.textContent = "B ♥"

    // Création d'une ligne pour l'affichage des points
    pointZone = createBalise("div", main)
    pointZone.className = 'col-1 flexCenter h5 hidden'
    createBalise("div", pointZone, "col-4")
    const dispPoints = createBalise("div", pointZone, "col-2")
    dispPoints.classList.add("flexCenter")
    createBalise("div", pointZone, "col-4")
    dispPoints.textContent = "Points"

    // Création d'une ligne pour l'affichage des bouttons
    choiceZone = createBalise("div", main, "col-1")
    choiceZone.classList.add("flexCenter")
    choiceZone.classList.add("h25")
    createBalise("div", choiceZone, "col-4")
    buttonZone = createBalise("div", choiceZone, "col-2")
    buttonZone.classList.add("flexCenter")
    createBalise("div", choiceZone, "col-4")

    // Création des boutons
    let buttons = []
    buttons = createMultipleBalise("div", 4, buttonZone, "button")

    const btnValues = ["Miser 100 crédits", "Demander une carte", "Doubler la mise", "Rester"]
    for (let i = 0; i < buttons.length; i++) {
        const myButton = createButton(btnValues[i], buttons[i], "col-1");
        buttons[i].classList.add("col-2")
        myButton.textContent = btnValues[i];
    }
}

// Création de la zone de jeu
function createGameZone() {
    elDealerZone.classList.remove('hidden')
    gameZone.classList.remove('hidden')
    pointZone.classList.remove('hidden')

}