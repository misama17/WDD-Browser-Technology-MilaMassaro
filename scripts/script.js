// MARK: Constanten
const form = document.querySelector("form")
const inputs = form.querySelectorAll("input")




// Zet automatische "pop-up" van browser uit.
form.setAttribute('novalidate', '')



// MARK: Functions
// Aantekeningen van workshop Victor (zie Notion: https://www.notion.so/Browser-Technology-3-6-30c4a28d1c2c8008a1f6d3a744cb105a?source=copy_link) 
// en https://codepen.io/3hos15/pen/PwGGGRM

// ---------- Validity Check ----------
form.addEventListener('submit', event => {
	// Hiermee zorg je dat er wel wat report wordt
	// event.target.reportValidity() 


    inputs.forEach(input => {
        if (!input.checkValidity()) {
            // Stopt verzending van formulier als het niet correct is ingevuld/voor de check
            event.preventDefault()

            input.setAttribute("aria-describedby", "errorID")

            // Vasilis: parentNode neemt het bovenliggende element in HTML DOM
            let errorMsg = input.parentNode.querySelector('p.error-msg');

            // extra if-statement, omdat hij het moet doen als er een p met class=error aanwezig is.
            if(errorMsg){
                errorMsg.textContent = "Dit veld is niet correct ingevuld."
            
                input.setAttribute("aria-invalid", "true")
            }
            

            // Direct focus naar waar de fout zit (- workshop Victor, zie aantekeningen)
            // input.focus()

        } else {
            errorID.textContent = ""
            input.setAttribute("aria-invalid", "false")
        }
    })

})



// ---------- Remove error message when filled in correctly ----------
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.checkValidity()) {
            let errorMsg = input.parentNode.querySelector('p.error-msg');

            errorMsg.textContent = ""
            input.setAttribute("aria-invalid", "false")
        } 
    })
})