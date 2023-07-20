const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => myFunction())
function myFunction() {
	const myBody = document.body;
	const mySourceCode = document.getElementById('sourceCode');

	myBody.classList.toggle("darkModeBody");
	mySourceCode.classList.toggle("darkModeSourceCode");
}