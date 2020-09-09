function checkTheme() {
	console.log('hi');
	var activemode = localStorage.getItem("mode") || "light";
	var cs = document.getElementById("style1");
	var buttontext = document.getElementById("button");
		if (activemode.match("light")) {
			cs.href = "style/lightmode.css";
			buttontext.value = "dark mode";
		} else if (activemode.match("dark")) {
			cs.href = "style/darkmode.css";
			buttontext.value = "light mode";
		}
}

window.onload = checkTheme();
