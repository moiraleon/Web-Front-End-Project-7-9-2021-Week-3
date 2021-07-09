console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Congratulations! Form has been submitted. A representative will reach out to you shortly.")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment(){
	alert("Dayuuuuuum shawty you fine!")
}