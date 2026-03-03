// Constanten
const form = document.querySelector("form")
const errorMessage = document.querySelector(".error_message")


// Zet automatische "pop-up" van browser uit.
form.setAttribute('novalidate', '')

form.addEventListener('submit', event => {
	// Stopt verzending van formulier
	event.preventDefault()
	
	// Hiermee zorg je dat er wel wat report wordt
	event.target.reportValidity() 
})