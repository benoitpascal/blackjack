console.log('BlackJack')

// Initialisation des paramètres nécéssaires pour jouer
let userCredits = 1000
console.log("Nous vous offrons 1000 crédits")

// Initialisation du paquet de carte vide
const elsCards = []
// const elsUserCards = []
// const elsDealerCards = []

/////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
// Initialisation de la structure principale du DOM
const body = document.body;
body.innerHTML = ''

// Création de la structure de la page
const header = createBalise("header", body, "flexColumn")
const main = createBalise("main", body, "flexCenter")
const footer = createBalise("footer", body, "flexCenter")
footer.style.color = "var(--button-color)"

// --- Création de la structure à l'intérieur du header
// Création du titre
setTitle("BlackJack", header);

// Création de la zone "informations"
const elsInformations = createBalise("div", header, "flexRow");
elsInformations.id = "infos";

// Affichage des crédits restants
const elCredit = createBalise("div", elsInformations, "credit-info");
elCredit.textContent = userCredits.toLocaleString();

// Affichage du bouton d'ouverture de la modale paramètres
const elParams = createBalise("div", elsInformations, "params");
const paramBtn = createBalise("button", elParams);
paramBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon" height="1em" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`;
paramBtn.addEventListener("click", handlerDispParams);

// --- Création d'un bouton pour démarrer le jeu
const playBtn = createButton('Jouer', main);
playBtn.addEventListener("click", startGame);

// Initialisation de la modale incluant les paramètres
const elModalPanel = document.createElement("div"),
    elModalZone = document.createElement("div"),
    elModalTitle = document.createElement("div"),
    elModalBody = document.createElement("div"),
    elModalFooter = document.createElement("div"),
    elModalCancelBtn = document.createElement("button"),
    elModalConfirmBtn = document.createElement("button");

    elModalPanel.classList.add("modal-panel")
    elModalPanel.classList.add("hidden")

    elModalZone.classList.add("modal")
    elModalZone.classList.add("flexColumnWithSpace")

    elModalTitle.classList.add("modal-title")
    elModalTitle.classList.add("flexCenter")
    elModalTitle.textContent = "Paramètres"

    elModalBody.classList.add("modal-body")
    elModalBody.classList.add("param-color")
    elModalBody.classList.add("flexCenter")

    elModalFooter.classList.add("modal-footer")

    elModalCancelBtn.textContent = "Annuler"
    elModalCancelBtn.dataRole = "cancel"
    elModalConfirmBtn.textContent = "Valider"
    elModalConfirmBtn.dataRole = "confirm"

    body.appendChild(elModalPanel)
    elModalPanel.appendChild(elModalZone)
    elModalZone.append(elModalTitle, elModalBody, elModalFooter)
    elModalFooter.append(elModalCancelBtn, elModalConfirmBtn)

// Collection d'affichage
    const cardParamCollection = [
        {
            text: "blue",
            el: document.createElement("input"),
            class: "blueBase"
        },
        {
            text: "red",
            el: document.createElement("input"),
            class: "redBase"
        },
        {
            text: "purple",
            el: document.createElement("input"),
            class: "purpleBase"
        },
        {
            text: "teal",
            el: document.createElement("input"),
            class: "tealBase"
        },
        {
            text: "orange",
            el: document.createElement("input"),
            class: "orangeBase"
        },
    ]

    const elsCardParamListBtn = []

    const dataRole = document.createAttribute("data-role")
    for (let card of cardParamCollection) {
        const choiceColor = document.createElement("input");
        choiceColor.type = "button"

        choiceColor.dataRole = card.text
        choiceColor.value = card.text
        choiceColor.classList.add("card")
        choiceColor.color = "text"
        // choiceColor.textContent = card.text
        choiceColor.classList.add(card.class)
        elModalBody.appendChild(choiceColor)
        elsCardParamListBtn.push(choiceColor)
    }

    elsCardParamListBtn[1].classList.add("activatedColorParam")
    let activatedParam = elsCardParamListBtn[1]
    let actualColorChoice = activatedParam.dataRole + "Base"
    console.log(actualColorChoice)

    elModalPanel.addEventListener("click", function (evt) {
        console.log(evt.target.dataRole)
        if (evt.target.dataRole === "confirm") {
            setParam(actualColorChoice)
            elModalPanel.classList.add("hidden")
        } else if (evt.target.dataRole === "cancel") {
            elModalPanel.classList.add("hidden")
        } else if (evt.target.dataRole === "undefined") {

        } else if (activatedParam.dataRole !== evt.target.dataRole) {

            activatedParam.classList.remove("activatedColorParam")
            activatedParam = evt.target
            activatedParam.classList.add("activatedColorParam")

            actualColorChoice = activatedParam.dataRole + "Base"
            console.log(actualColorChoice)
        } else {

        }


    })

    // Préparation de la div incluant les jetons pour miser
    const elCoins = document.createElement('div');
    elCoins.className = 'flexRow coins out';

    const elValues = [[5, 'white'],[10, 'blue'],[25, 'red'],[50, 'green'],[100, 'black']]

    for(let i = 0; i < 5; i++) {
        const elCoin = document.createElement('div')
        elCoin.className = 'coin flexCenter';
        elCoin.style.backgroundColor = elValues[i][1]
        if(i === 0) {elCoin.style.color = 'black'}
        elCoin.textContent = elValues[i][0];
        elCoins.appendChild(elCoin);
}

    body.appendChild(elCoins);
// Lancement du jeu
function startGame() {
    console.log("C'est parti !");

    // suppression du bouton "Jouer"
    playBtn.classList.add("hidden")

    header.classList.add("in-game")
    footer.classList.add("in-game")

    elCoins.classList.remove("out")

    dispCredit()
    start()
}

// Affichage des crédits restants
function dispCredit() {

}

// Gestion du bouton d'affichage de la modale de paramètres
function handlerDispParams() {
    elModalPanel.classList.remove("hidden");
}

function start()
{


// --- Création de la structure à l'intérieur du body
// Création de la zone de jeu


// Espace pour les cartes du croupier
    const eldealerZone = createBalise("div", main, "col-1")
    eldealerZone.classList.add("flexCenter")
    eldealerZone.classList.add("h35")
    const fakeCard = createBalise("div", eldealerZone, "card")
    fakeCard.classList.add("redBase")
    fakeCard.classList.add("turn")
    elsCards.push(fakeCard)

// Espace pour les cartes du joueur
    const gameZone = createBalise("div", main, "col-1")
    gameZone.classList.add("flexCenter")
    gameZone.classList.add("h35")


    const firstCard = createBalise("div", gameZone, "card")
    firstCard.id = "firstCard"
    elsCards.push(firstCard)
    firstCard.classList.add("redBase")
    const secondCard = createBalise("div", gameZone, "card")
    secondCard.id = "secondCard"
    elsCards.push(secondCard)
    secondCard.classList.add("redBase")

    const card1HG = createBalise("p", firstCard, "hg_display")
    card1HG.textContent = "B ♥"
    const card1C = createBalise("p", firstCard, "c_display")
    card1C.textContent = "B ♥"
    const card1BG = createBalise("p", firstCard, "bd_display")
    card1BG.textContent = "B ♥"

    const card2HG = createBalise("p", secondCard, "hg_display")
    card2HG.textContent = "F ♥"
    const card2C = createBalise("p", secondCard, "c_display")
    card2C.textContent = "F ♥"
    const card2BG = createBalise("p", secondCard, "bd_display")
    card2BG.textContent = "F ♥"

// Création d'une ligne pour l'affichage des points
    const pointZone = createBalise("div", main, "flexCenter")
    pointZone.classList.add("col-1")
    pointZone.classList.add("h5")
    createBalise("div", pointZone, "col-4")
    const dispPoints = createBalise("div", pointZone, "col-2")
    dispPoints.classList.add("flexCenter")
    createBalise("div", pointZone, "col-4")
    dispPoints.textContent = "Points"


// Création d'une ligne pour l'affichage des bouttons
    const choiceZone = createBalise("div", main, "col-1")
    choiceZone.classList.add("flexCenter")
    choiceZone.classList.add("h25")
    createBalise("div", choiceZone, "col-4")
    const buttonZone = createBalise("div", choiceZone, "col-2")
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








//                                                                                                          //
//                                   ||||||    |||||   |||   ||| |||||||||                                  //
//                                 |||       |||   ||| |||| |||| |||                                        //
//                                 |||  |||| ||||||||| ||| | ||| ||||||                                     //
//                                 |||   ||| |||   ||| |||   ||| |||                                        //
//                                   |||||   |||   ||| |||   ||| |||||||||                                  //
//                                                                                                          //


//                                                                                                          //
//                                  |||||||  |||   |||  |||||||  |||||||||                                  //
//                                    |||    ||||  |||    |||       |||                                     //
//                                    |||    ||| | |||    |||       |||                                     //
//                                    |||    |||  ||||    |||       |||                                     //
//                                  |||||||  |||   |||  |||||||     |||                                     //
//                                                                                                          //
//                                                                                                          //
//                                 |||||||   |||||||||   ||||||| |||   |||                                  //
//                                 |||   ||| |||       |||       ||| |||                                    //
//                                 |||   ||| ||||||    |||       ||||                                       //
//                                 |||   ||| |||       |||       ||| |||                                    //
//                                 |||||||   |||||||||   ||||||| |||   |||                                  //
//                                                                                                          //

// Initialisation du paquet de cartes
    let countCards = 0;
    let mainDeck = [];

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

//                                                                                                          //
//                                  |||||||  |||   |||  |||||||  |||||||||                                  //
//                                    |||    ||||  |||    |||       |||                                     //
//                                    |||    ||| | |||    |||       |||                                     //
//                                    |||    |||  ||||    |||       |||                                     //
//                                  |||||||  |||   |||  |||||||     |||                                     //
//                                                                                                          //
//                                                                                                          //
//                             ||||||||   |||||||   |||||   |||||||   |||||||||                             //
//                            |||       |||       |||   ||| |||   ||| |||                                   //
//                             |||||||  |||       |||   ||| ||||||||  ||||||                                //
//                                  ||| |||       |||   ||| |||   ||| |||                                   //
//                            ||||||||    |||||||   |||||   |||   ||| |||||||||                             //
//                                                                                                          //

// Initialisation du userScore

// Jeu
    let userScore = 0
    console.log(userScore)

    let dealerScore = 0
    console.log(dealerScore)


    buttons[0].addEventListener("click", () => {
        userScore = 0
        dealerScore = 0
        for (card of elsCards) {
            card.remove()
        }

        userCredits = pay(userCredits)
        userScore = drawMore(userScore, gameZone)
        userScore = drawMore(userScore, gameZone)

        dispPoints.textContent = 'Vous avez actuellement ' + userScore + ' points en main';
        console.log('Vous avez actuellement ' + userScore + ' points en main')
    })

    buttons[1].addEventListener("click", () => {
        userScore = drawMore(userScore, gameZone)

        dispPoints.textContent = 'Vous avez actuellement ' + userScore + ' points en main';
        console.log('Vous avez actuellement ' + userScore + ' points en main')
    })

    buttons[2].addEventListener("click", () => {
        userCredits = pay(userCredits)
        userScore = drawMore(userScore, gameZone)
        fakeCard.style.display = "none"
        while (dealerScore < 17) {
            dealerScore = drawMore(dealerScore, eldealerZone)
        }

        if ((userScore > dealerScore || dealerScore > 21) && userScore < 21) {
            console.log("Félicitations !")
            userCredits += 400
        } else {
            console.log("Dommage, vous avez perdu votre mise")
        }


    })

    buttons[3].addEventListener("click", () => {
        fakeCard.style.display = "none"
        while (dealerScore < 17) {
            dealerScore = drawMore(dealerScore, eldealerZone)
        }
        if ((userScore > dealerScore || dealerScore > 21) && userScore < 21) {
            console.log("Félicitations !")
            userCredits += 200
        } else {
            console.log("Dommage, vous avez perdu votre mise")
        }
    })


//                                                                                                          //
//        ||||||||| |||   ||| |||   |||   ||||||| |||||||||  |||||||    |||||   |||   |||  ||||||||         //
//        |||       |||   ||| ||||  ||| |||          |||       |||    |||   ||| ||||  ||| |||               //
//        ||||||    |||   ||| ||| | ||| |||          |||       |||    |||   ||| ||| | |||  |||||||          //
//        |||       |||   ||| |||  |||| |||          |||       |||    |||   ||| |||  ||||       |||         //
//        |||         |||||   |||   |||   |||||||    |||     |||||||    |||||   |||   ||| ||||||||          //
//                                                                                                          //

    function pay(userCredits) {
        userCredits = userCredits - 100;
        playerCredits.textContent = `Vous avez : ${userCredits} crédits.`
        return userCredits
    }


//                                                                                                          //
//        |||||||   |||||||     |||||   || ||| ||   |||||||   |||||   |||||||   |||||||    ||||||||         //
//        |||   ||| |||   ||| |||   ||| || ||| || |||       |||   ||| |||   ||| |||   ||| |||               //
//        |||   ||| ||||||||  ||||||||| || ||| || |||       ||||||||| ||||||||  |||   |||  |||||||          //
//        |||   ||| |||   ||| |||   |||  ||| |||  |||       |||   ||| |||   ||| |||   |||       |||         //
//        |||||||   |||   ||| |||   |||  ||| |||    ||||||| |||   ||| |||   ||| |||||||   ||||||||          //
//                                                                                                          //
    function drawCards(score, userCredits) {
        console.log('Vous avez demandé 2 cartes');

        let randCard1 = Math.floor(Math.random() * mainDeck.length + 1);

        card1HG.style.color = mainDeck[randCard1][2];
        card1C.style.color = mainDeck[randCard1][2];
        card1BG.style.color = mainDeck[randCard1][2];
        card1HG.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
        card1C.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
        card1BG.textContent = mainDeck[randCard1][3] + mainDeck[randCard1][1];
        console.log('Vous avez eu le ' + mainDeck[randCard1][3] + ' de ' + mainDeck[randCard1][1])

        score += mainDeck[randCard1][4]
        console.log(mainDeck[randCard1][4])

        mainDeck.splice(randCard1, 1);

        let randCard2 = Math.floor(Math.random() * mainDeck.length + 1);

        card2HG.style.color = mainDeck[randCard2][2];
        card2C.style.color = mainDeck[randCard2][2];
        card2BG.style.color = mainDeck[randCard2][2];

        card2HG.textContent = mainDeck[randCard2][3] + mainDeck[randCard2][1];
        card2C.textContent = mainDeck[randCard2][3] + mainDeck[randCard2][1];
        card2BG.textContent = mainDeck[randCard2][3] + mainDeck[randCard2][1];
        console.log('Vous avez eu le ' + mainDeck[randCard2][3] + ' de ' + mainDeck[randCard2][1])

        score += mainDeck[randCard2][4]
        console.log(score)

        mainDeck.splice(randCard2, 1);
        return score
    }


//                                                                                                          //
//             |||||||   |||||||     |||||   || ||| || |||   |||   |||||   |||||||   |||||||||              //
//             |||   ||| |||   ||| |||   ||| || ||| || |||| |||| |||   ||| |||   ||| |||                    //
//             |||   ||| ||||||||  ||||||||| || ||| || ||| | ||| |||   ||| ||||||||  ||||||                 //
//             |||   ||| |||   ||| |||   |||  ||| |||  |||   ||| |||   ||| |||   ||| |||                    //
//             |||||||   |||   ||| |||   |||  ||| |||  |||   |||   |||||   |||   ||| |||||||||              //
//                                                                                                          //
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

        elsCards.push(newCard)
        return score

    }

    function redBase() {
        firstCard.classList.add("redBase")
        secondCard.classList.add("redBase")
        firstCard.classList.add("turn")
        secondCard.classList.add("turn")

    }

    function turnCard() {

        firstCard.classList.add("turn")
        secondCard.classList.add("turn")

    }

    function test() {
    }
}