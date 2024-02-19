class SidebarToggle {
	constructor() {
		this.addToggleListener();
	}

	addToggleListener() {
		document.getElementById("btn-sidebar-toggle").addEventListener("click", () => {
			this.toggleSidebar();
		});
	}

	toggleSidebar() {
		const sidebar = document.getElementById("main-sidebar");
		const logo = document.getElementById("tailwind-dashboard");
		console.log(this.texts);
		if (sidebar.classList.contains("w-64")) {
			logo.classList.add("hidden");
			sidebar.classList.add("w-16");
			sidebar.classList.remove("w-64");
		} else if (sidebar.classList.contains("w-16")) {
			logo.classList.remove("hidden");
			sidebar.classList.add("w-64");
			sidebar.classList.remove("w-16");
		}
	}
}

window.addEventListener("load", () => {
	const sidebarToggle = new SidebarToggle();
});
