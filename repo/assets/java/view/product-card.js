export function lavProductCard(product) {
	const card = document.createElement("article");
	const image = document.createElement("img");
	const category = document.createElement("p");
	const name = document.createElement("h3");
	const description = document.createElement("p");
	const details = document.createElement("div");
	const price = document.createElement("p");

	card.className = "product-card";
	image.className = "product-image";
	image.src = product.thumbnail || product.images?.[0] || "";
	image.alt = product.title;
	image.loading = "lazy";
	category.className = "product-category";
	category.textContent = product.category;
	name.className = "product-name";
	name.textContent = product.title;
	description.className = "product-description";
	description.textContent = product.description;
	details.className = "product-details";
	price.className = "product-price";
	price.textContent = new Intl.NumberFormat("da-DK", {
		style: "currency",
		currency: "USD",
	}).format(product.price);

	details.append(price);
	card.append(image, category, name, description, details);

	return card;
}
