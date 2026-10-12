export function sortProductsByPrice(products, sortOrder) {
	const sortedProducts = [...products];

	if (sortOrder === "price-asc") {
		return sortedProducts.sort((a, b) => a.price - b.price);
	}

	if (sortOrder === "price-desc") {
		return sortedProducts.sort((a, b) => b.price - a.price);
	}

	return sortedProducts;
}