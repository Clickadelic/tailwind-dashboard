import { Collapse, initTE } from "tw-elements";

initTE({ Collapse });

document.addEventListener("DOMContentLoaded", function () {
	var toggleButton = document.getElementById("sidebar-toggle");

	toggleButton.addEventListener("click", function () {
		this.classList.toggle("active");
		// Additional state change actions can be performed here
		alert("toggled");
	});
});

let isToggled = false;

toggleButton.addEventListener("click", () => {
	isToggled = !isToggled;
	this.classList.toggle("active");
	// You may also want to trigger other actions based on the value of isToggled
	alert("toggled");
});
