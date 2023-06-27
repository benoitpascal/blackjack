// Déclaration des constantes
const elModalPanel = document.createElement("div"),
    elModalZone = document.createElement("div"),
    elModalTitle = document.createElement("div"),
    elModalBody = document.createElement("div"),
    elModalFooter = document.createElement("div"),
    elModalCancelBtn = document.createElement("button"),
    elModalConfirmBtn = document.createElement("button");


// Création de la modale incluant les paramètres
function createModale() {

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
}

// Gestion du bouton d'affichage de la modale de paramètres
function handlerDispParams() {
    elModalPanel.classList.remove("hidden");
}