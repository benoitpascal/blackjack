// Déclaration des constantes
let elCoins = null,
    elDealBtn = null;

// Initialisation des jetons
function initTokens() {

    // --- Création d'un bouton pour miser et démarrer une partie
    elDealBtn = document.createElement('button');
    elDealBtn.type = "button"
    elDealBtn.value = "Miser"
    elDealBtn.textContent = "Miser"

    if(amountBet > 0) {elDealBtn.addEventListener("click", pay);}

    // Préparation de la div incluant les jetons pour miser
    elCoins = document.createElement('div');
    elCoins.className = 'flexRow coins out';

    // Préparation des valeurs variables des différents jetons à afficher
    const elValues = [[5, '#FFFFFF'], [10, '#0000FF'], [25, '#FF0000'], [50, '#008000'], [100, '#000000']]

    // Création des jetons
    for (let i = 0; i < 5; i++) {

        // Création de la couleur de fond
        const elCoinBG = document.createElement('div')
        elCoins.appendChild(elCoinBG);
        if (i === 0) {
            elCoinBG.style.backgroundColor = 'black'
        } else {
            elCoinBG.style.backgroundColor = 'white'
        }

        // Création de la partie principale du jeton
        const elCoin = document.createElement('div')
        elCoin.className = 'coin flexCenter';
        elCoin.style.background = `radial-gradient(${elValues[i][1]}FF 35%, ${elValues[i][1]}AA 58%, ${elValues[i][1]} 62%)`
        if (i === 0) {
            elCoin.style.color = 'black'
        }
        elCoin.textContent = elValues[i][0];
        elCoinBG.appendChild(elCoin);

        // Association de l'événement au click
        elCoin.addEventListener('click', handlerDealToken)
    }

    body.appendChild(elCoins);
    elDealBtn.classList.add('hidden');

    console.log("C'est parti !");

}

// Afficher les jetons pour miser
function getTokens() {
    // Animation de la page

    // Suppression de la zone de jeu si elle a déjà été activée
    elDealerZone.classList.add('hidden')
    pointZone.classList.add('hidden')
    choiceZone.classList.add('hidden')
    resultZone.classList.add('hidden')
    for (let card of elsCards) {
        card.remove()
    }

    // Masquage du bouton "Start"
    playBtn.classList.add("hidden")

    // Configuration du header et du footer en mode 'en jeux'
    header.classList.add("in-game")
    footer.classList.add("in-game")

    // Affichage des jetons dans la page
    elCoins.classList.remove("out")

    // Réinitialisation de la mise
    amountBet = 0
    elDealBtn.textContent = "Miser"
    main.appendChild(elDealBtn)
    elDealBtn.classList.remove('hidden');
}

function handlerDealToken(evt) {
    // si l'utilisateur a assez de crédit, on incrémente le montant à miser
    if ((amountBet + parseInt(evt.target.textContent)) <= userCredits) {
        amountBet += parseInt(evt.target.textContent)

        // on met à jour l'affichage sur le bouton
        elDealBtn.textContent = `Miser ${amountBet} crédits`
        elDealBtn.addEventListener("click", pay)
    }
}

// Retire le montant misé des crédits et démarre le jeu
function pay() {
    userCredits -= amountBet;
    elCredit.textContent = userCredits;
    startGame();
}