// MARK: Constanten
const form = document.querySelector("form")
const errorID = document.querySelector("#errorID")

const inputs = form.querySelectorAll("input")




// Zet automatische "pop-up" van browser uit.
form.setAttribute('novalidate', '')



// MARK: Functions
// Aantekeningen van workshop Victor (zie Notion: https://www.notion.so/Browser-Technology-3-6-30c4a28d1c2c8008a1f6d3a744cb105a?source=copy_link) 
// en https://codepen.io/3hos15/pen/PwGGGRM
// ---------- Validity Check ----------
form.addEventListener('submit', event => {
	// Stopt verzending van formulier als het niet correct is ingevuld/voor de check
	event.preventDefault()
	
	// Hiermee zorg je dat er wel wat report wordt
	// event.target.reportValidity() 


    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.setAttribute("aria-describedby", "errorID")
            errorID.textContent = "veld is niet goed hoor"

            // Direct focus naar waar de fout zit (- workshop Victor, zie aantekeningen)
            // input.focus()

            // VRAAG: aria-invalid true toevoegen en de volgende weer weghalen??
            input.setAttribute("aria-invalid", "true")
        } else {
            errorID.textContent = ""
        }
    })

})



// ---------- Remove error message when filled in correctly ----------
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.checkValidity()) {
            errorID.textContent = ""
            input.setAttribute("aria-invalid", "false")
        } 
    })
})