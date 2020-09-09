function darkMode() {
	var cs = document.getElementById("style1");
	var button = document.getElementById("button");	
	var buttontext = document.getElementById("button");
		if (cs.href.match("style/lightmode.css")) {
			cs.href = "style/darkmode.css";
			buttontext.value = "light mode";
			localStorage.setItem('mode', 'dark');
		} else {
			cs.href = "style/lightmode.css";
			buttontext.value = "dark mode";
			localStorage.setItem('mode', 'light');
		}
	}

button.addEventListener ("click", darkMode);
