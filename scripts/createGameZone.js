// Déclaration des variables
let elDealerZone = null,
    fakeCard = null,
    gameZone = null,
    pointZone = null,
    dispPoints = null,
    choiceZone = null,
    buttonZone = null,
    buttons = [];

// Initialisation de la zone de jeu
function initGameZone() {


    // Espace pour les cartes du joueur
    gameZone = document.createElement('div')
    main.prepend(gameZone)
    gameZone.className = 'col-1 flexCenter h35'

    // Espace pour les cartes du croupier
    elDealerZone = document.createElement('div')
    main.prepend(elDealerZone)
    elDealerZone.className = 'col-1 flexCenter h35 hidden'
    fakeCard = createBalise("div", elDealerZone)
    fakeCard.className = 'card redBase turn'
    elsCards.push(fakeCard)

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
    dispPoints = createBalise("div", pointZone, "col-2")
    dispPoints.classList.add("flexCenter")
    createBalise("div", pointZone, "col-4")
    dispPoints.textContent = "Points"

    // Création d'une ligne pour l'affichage des bouttons
    choiceZone = createBalise("div", main, "col-1")
    choiceZone.classList.add("flexCenter")
    choiceZone.classList.add("h25")
    choiceZone.className = 'col-1 flexCenter h25 hidden'
    createBalise("div", choiceZone, "col-4")
    buttonZone = createBalise("div", choiceZone)
    buttonZone.className = 'col-2 flexCenter'
    createBalise("div", choiceZone, "col-4")

    // Création des boutons
    buttons = createMultipleBalise("div", 3, buttonZone, "button")

    const btnValues = ["HIT", "DOUBLE", "STAND"]
    for (let i = 0; i < buttons.length; i++) {
        const myButton = createButton(btnValues[i], buttons[i], "col-1");
        buttons[i].classList.add("col-2")
        myButton.textContent = btnValues[i];
    }
}

// Création de la zone de jeu
function createGameZone() {
    elDealerZone.classList.remove('hidden')
    pointZone.classList.remove('hidden')
    choiceZone.classList.remove('hidden')
}