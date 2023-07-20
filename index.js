const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => switchTheme())
function switchTheme() {
	const myBody = document.body;
	const mySourceCode = document.getElementById('sourceCode');
	const mySourceCodeKey = document.querySelectorAll('.codeObjKey');
	const mySourceCodeVal = document.querySelectorAll('.codeObjVal');

	myBody.classList.toggle("darkModeBody");
	mySourceCode.classList.toggle("darkModeSourceCode");
	// mySourceCodeKey.classList.toggle("darkModeCodeObjKey");
	// mySourceCodeVal.classList.toggle("darkModeCodeObjVal");
	mySourceCodeKey.forEach((element) => {
		element.classList.toggle("darkModeCodeObjKey");
	});
	mySourceCodeVal.forEach((element) => {
		element.classList.toggle("darkModeCodeObjVal");
	});
}


window.addEventListener("scroll", function() {
	const checkboxLabel = document.querySelector(".checkbox-label");
	if (window.scrollY > 0) {
		checkboxLabel.style.visibility = "hidden";
	} else {
		checkboxLabel.style.visibility = "visible";
	}
});