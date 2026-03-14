import { db } from "./firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, orderBy, serverTimestamp, limit } from "firebase/firestore";

var snapshot;
var test_collection;
var is_sending = false;

/** @type {HTMLInputElement} */
const message_input = document.querySelector(".message-input")
const messages = document.querySelector(".messages")

function display_new_message(new_message_content) {
	const new_message_element = document.createElement("div")
	new_message_element.textContent = new_message_content
	new_message_element.className = "message"
	messages.appendChild(new_message_element)
}

async function push_new_message(message) {
	if(is_sending) return
	is_sending = true

	await addDoc(test_collection, {
		text: message,
		createdAt: serverTimestamp(),
	})
	location.reload()
}

function message_submitted(event) {
	const new_message = message_input.value
	if(event.key === "Enter") {
		display_new_message(new_message)
		message_input.value = ""

		push_new_message(new_message)
	}
}

async function init() {
	message_input.addEventListener("keydown", message_submitted)

	test_collection = collection(db, "test")

	const q = query(
		test_collection,
		orderBy("createdAt", "asc"), // or "desc"
		limit(100),
	)
	
	snapshot = await getDocs(q)

	snapshot.forEach(doc => {
		console.log(doc.id, doc.data())
		const doc_data = doc.data()
		const document_text = doc_data.text
		display_new_message(document_text)
	})
}

init()

// var is_sending = false