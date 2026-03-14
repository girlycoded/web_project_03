/** @type {HTMLInputElement} */
const message_input = document.querySelector(".message-input")
const messages = document.querySelector(".messages")

function message_submitted(event) {
	const new_message = message_input.value
	if(event.key === "Enter") {
		const new_message_element = document.createElement("div")
		new_message_element.textContent = new_message
		messages.appendChild(new_message_element)

		message_input.value = ""
	}
}

message_input.addEventListener("keydown", message_submitted)