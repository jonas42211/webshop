import { lavProductCard } from "./product-card.js";

export function lavProducts(products = [], onProductClick = () => {}) {
	const productsSection = document.createElement("section");
	const title = document.createElement("h2");
	const productsGrid = document.createElement("div");

	productsSection.className = "products-section";
	productsGrid.className = "products-grid";
	title.textContent = "Produkter";
	productsSection.append(title);

	if (products.length === 0) {
		const emptyMessage = document.createElement("p");

		emptyMessage.className = "products-empty";
		emptyMessage.textContent = "Der kunne ikke hentes produkter lige nu.";
		productsSection.append(emptyMessage);
		return productsSection;
	}

	products.forEach((product) => {
		productsGrid.append(lavProductCard(product, onProductClick));
	});

	productsSection.append(productsGrid);
	return productsSection;
}