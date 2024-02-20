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
		const header = document.getElementById("header");
		const logotext = document.getElementById("tailwind-dashboard");
		const sidebar = document.getElementById("main-sidebar");
		const dashboardarea = document.getElementById("dashboard-area");
		if (sidebar.classList.contains("w-64")) {
			logotext.classList.add("hidden");
			header.classList.remove("md:ml-64");
			header.classList.add("md:ml-16");
			dashboardarea.classList.remove("md:pl-72");
			dashboardarea.classList.add("md:pl-24");
			sidebar.classList.add("w-16");
			sidebar.classList.remove("w-64");
		} else if (sidebar.classList.contains("w-16")) {
			logotext.classList.remove("hidden");
			header.classList.remove("md:ml-16");
			header.classList.add("md:ml-64");
			dashboardarea.classList.add("md:pl-72");
			dashboardarea.classList.remove("md:pl-24");
			sidebar.classList.add("w-64");
			sidebar.classList.remove("w-16");
		}
	}
}

window.addEventListener("load", () => {
	const sidebarToggle = new SidebarToggle();
});
