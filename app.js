import { environments } from "./environment.js"
window.addEventListener("DOMContentLoadedd",makecards(environments))

function makecard(card) {
    const container = document.createElement("div")
    container.id = "card"
    container.classList.add("card")

    const imgcard =document.createElement("img")
    imgcard.src = card.img
    imgcard.alt = card.Description

    const titlecard = document.createElement("h2")
    titlecard.textContent = card.title

    const descriptioncard = document.createElement('p')
    descriptioncard.textContent = card.description

    container.appendChild (imgcard)
    container.appendChild (titlecard)
    container.appendChild (descriptioncard)

    document.querySelector("main").appendChild(container)
}

function makecards(environments) {
environments.forEach(element => {
    makecard(element)

});
}