console.log('BlackJack')

// Initialisation des données nécessaires pour jouer
// - Crédit restant
let userCredits = 1000
console.log("Nous vous offrons 1000 crédits")
// - Crédits à miser
let amountBet= 0
// - Initialisation du paquet de carte vide
const elsCards = []
// const elsUserCards = []
// const elsDealerCards = []


// Initialisation de la structure principale du DOM
const body = document.body;
body.innerHTML = ''

// Création de la structure principale de la page
createDOM()

// Initialisation de la modale incluant les paramètres
createModale()

// Initialisation des jetons
initTokens()

// Initialisation de la zone de jeu
initGameZone()

// Initialisation des données du jeu
initGame()