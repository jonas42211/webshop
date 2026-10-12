export function filterProducts(products, filters = {}) {
	const maxPrice = Number(filters.maxPrice);
	const hasMaxPrice = filters.maxPrice !== "" && Number.isFinite(maxPrice);

	return products.filter((product) => {
		const matchesPrice = !hasMaxPrice || product.price <= maxPrice;
		const matchesStock = !filters.inStockOnly || product.stock > 0;

		return matchesPrice && matchesStock;
	});
}