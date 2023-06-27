// Création de la structure principale de la page
function createDOM() {

    // Création de la structure principale de la page
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
        playBtn.addEventListener("click", showTokens);

    // --- Création d'un bouton pour démarrer le jeu
        const elDealBtn = document.createElement('button');
        elDealBtn.type = "button"
        elDealBtn.value = "Miser"
        elDealBtn.textContent = "Miser"
        elDealBtn.addEventListener("click", startGame);
}

// Initialisation de la modale incluant les paramètres
function createModale() {
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
}