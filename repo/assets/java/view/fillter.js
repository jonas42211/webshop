export function lavFillter() {
	const filterBox = document.createElement("section");
	const titel = document.createElement("h2");
	const tekst = document.createElement("p");
	const knapper = document.createElement("div");
	const filtre = ["Alle varer", "Tøj", "Sko"];

	filterBox.className = "fillter-box";
	knapper.className = "filter-buttons";
	titel.textContent = "Filtrer produkter";
	tekst.textContent = "Vælg en kategori:";

	filtre.forEach((filter) => {
		const knap = document.createElement("button");

		knap.type = "button";
		knap.textContent = filter;

		knapper.append(knap);
	});

	filterBox.append(titel, tekst, knapper);

	return filterBox;
}
