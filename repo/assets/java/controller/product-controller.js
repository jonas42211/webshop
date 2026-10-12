import { fetchProducts } from "../model/product-model.js";
import { filterProducts } from "../model/filter-model.js";
import { sortProductsByPrice } from "../model/sort-model.js";
import { lavProducts } from "../view/products.js";
import { lavProductDetails } from "../view/product-details.js";

export function createProductController(
	initialProducts,
	onProductsViewChange,
	onProductDetailsChange,
) {
	let currentProducts = initialProducts;
	let sortOrder = "default";
	let filterOptions = { maxPrice: "", inStockOnly: false };

	const renderProducts = () => {
		const filteredProducts = filterProducts(currentProducts, filterOptions);
		const sortedProducts = sortProductsByPrice(filteredProducts, sortOrder);
		onProductsViewChange(lavProducts(sortedProducts, handleProductClick));
	};
	const handleProductClick = (product) => {
		onProductDetailsChange(lavProductDetails(product));
	};
	const handleFilterChange = (selectedFilterOptions) => {
		filterOptions = selectedFilterOptions;
		renderProducts();
	};
	const handleSortChange = (selectedSortOrder) => {
		sortOrder = selectedSortOrder;
		renderProducts();
	};
	const handleCategoryClick = async (categorySlug) => {
		currentProducts = await fetchProducts(
			`/category/${encodeURIComponent(categorySlug)}`,
		);
		renderProducts();
	};

	renderProducts();

	return { handleFilterChange, handleSortChange, handleCategoryClick };
}