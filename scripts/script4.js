// MARK: Recipients extra
// ChatGPT: hoe kan ik het beste in JavaScript alles met de class "recipients-extra" verbergen?
const extraFieldsets = document.querySelectorAll(".recipient-extra")
// ChatGPT: hoe zorg ik ervoor dat er 1 per klik komt? >>> geef een index mee en zet in de functie +1. if-statement in function toevoegen.
let current = 0;

// Verbergen van extra fieldset met JS, zodat het robuust is.
extraFieldsets.forEach(extraFS => {
    extraFS.style.display = "none";
})


plusButton.addEventListener("click", addFieldset)

function addFieldset() {
    // als de current kleiner is dan het totaal aantal extra fieldsets
    if (current < extraFieldsets.length) {
        // ChatGPT: extraFieldsets is een NodeList van alle fieldsets met de class recipients-extra. Als current 1 is dan pakt hij de tweede fieldset etc.
        extraFieldsets[current].style.display = "block"; // laat de volgende zien
        current++;
    }
}