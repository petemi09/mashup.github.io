window.onload = checkAge();

function checkAge() {
	
	var age = prompt("This site has adult content. Please verify your age", "");
	var x = parseInt(age)

	if (x <21) {
		location.href= "https://www.dea.gov/pr/multimedia-library/publications/drug_of_abuse.pdf"
	}
	else {
		return;
	}

}