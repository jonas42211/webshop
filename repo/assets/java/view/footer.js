export function lavFooter() {
	const footer = document.createElement("footer");
	const titel = document.createElement("h2");
	const kontakt = document.createElement("p");
	const copyright = document.createElement("p");

	titel.textContent = "Min webshop";
	kontakt.textContent = "Kontakt: info@minwebshop.dk";
	copyright.textContent = "© 2026 Min webshop";

	footer.append(titel, kontakt, copyright);

	return footer;
}
