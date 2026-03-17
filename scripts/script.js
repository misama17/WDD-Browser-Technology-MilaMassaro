// MARK: Constanten
const form = document.querySelector("form")
const inputs = form.querySelectorAll("input")



// Zet automatische "pop-up" van browser uit.
form.setAttribute('novalidate', '')


// MARK: Functions
// https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/typeMismatch
function errorMsg(text, id) {
    const logElement = document.getElementById(id+"-error")

    // Je wilt dat deze er pas is als er sprake is van een id met error erachter (dus als het niet valide is)
    if (logElement) {
        logElement.innerText = text;
    }
}



// Aantekeningen van workshop Victor (zie Notion: https://www.notion.so/Browser-Technology-3-6-30c4a28d1c2c8008a1f6d3a744cb105a?source=copy_link) 
// en https://codepen.io/3hos15/pen/PwGGGRM
// MARK: Input velden
// ---------- Validity Check ----------
form.addEventListener('submit', event => {
	// Hiermee zorg je dat er wel wat report wordt
	// event.target.reportValidity() 


    inputs.forEach(input => {
        if (!input.checkValidity()) {
            // Stopt verzending van formulier als het niet correct is ingevuld/voor de check
            event.preventDefault()
            

            input.setAttribute("aria-describedby", input.id+"-error")
            
            //https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
            if (input.validity.valueMissing) {
                errorMsg("Dit veld is verplicht", input.id)
                input.setAttribute("aria-invalid", "true")
            
            } else if (input.validity.patternMismatch) {
                errorMsg("Voer een geldige waarde in", input.id)
                input.setAttribute("aria-invalid", "true")

            }
            

            // Direct focus naar waar fout zit (- workshop Victor, zie aantekeningen)
            // VRAAG: Hoe naar bovenste foute input?
            input.focus()

        }
         else {
            errorMsg("", input.id)
            input.setAttribute("aria-invalid", "false")
            input.removeAttribute("aria-describedby")
        }
    })

})


// Haalt de error styling weg als er wél een valide input is
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.checkValidity()) {
            errorMsg("", input.id)
            console.log(errorMsg)
            input.setAttribute("aria-invalid", "false")
        } 
    })
})



// MARK: Radio buttons
