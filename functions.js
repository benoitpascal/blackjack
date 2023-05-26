
// Fonction : 
// Création d'une balise <type> dans parent
function createBalise(type, parent, classe = "") {
    const myBalise = document.createElement(type)
    if (classe != "") myBalise.classList.add(classe)
    parent.appendChild(myBalise)
    return myBalise
}

// Création d'un button dans parent
function createButton(value, parent, classe = "") {
    const myBalise = document.createElement("input")
    myBalise.type = "button"
    myBalise.value = value
    if (classe != "") myBalise.classList.add(classe)
    parent.appendChild(myBalise)
    return myBalise
}

// Création de "n" balises <type> dans parent
function createMultipleBalise(type, n, parent, classe = "") {
    const Balises = []
    for (let i = 0; i < n; i++) {
        const myBalise = document.createElement(type)
        if (classe != "") myBalise.classList.add(classe)
        parent.appendChild(myBalise)
        Balises.push(myBalise)
    }
    return Balises
}

// Fonction :
// Ajout du titre h1 dans une balise
function setTitle(title, parent) {
    const titleDiv = document.createElement("h1")
    titleDiv.textContent = title
    parent.appendChild(titleDiv)
}

function setParam(colorBase) {
    for (card of elsCards) {
        console.log("removeBase")
        card.classList.remove("blueBase")
        card.classList.remove("redBase")
        card.classList.remove("purpleBase")
        card.classList.remove("tealBase")
        card.classList.remove("orangeBase")
        card.classList.add(colorBase)
    }
}

function cancelParam(colorBase) {
    for (card of elsCards) {
        console.log("removeBase")
        card.classList.remove("blueBase")
        card.classList.remove("redBase")
        card.classList.remove("purpleBase")
        card.classList.remove("tealBase")
        card.classList.remove("orangeBase")
        card.classList.add(colorBase)
    }
}