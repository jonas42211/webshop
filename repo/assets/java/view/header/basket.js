export function lavBasket() {
	const basketBox = document.createElement("div");
	const billede = document.createElement("img");
	const tekst = document.createElement("p");

	basketBox.className = "basket-box";
	billede.src = "assets/img/download.jpg";
	billede.alt = "Billede af webshoppen";
	tekst.textContent = "0";

	basketBox.append(billede, tekst);

	return basketBox;
}
