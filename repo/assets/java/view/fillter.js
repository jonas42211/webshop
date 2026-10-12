export function lavFillter(onFilterChange = () => {}) {
	const filterBox = document.createElement("section");
	const titel = document.createElement("h2");
	const filterControls = document.createElement("div");
	const priceLabel = document.createElement("label");
	const priceInput = document.createElement("input");
	const stockLabel = document.createElement("label");
	const stockInput = document.createElement("input");

	filterBox.className = "fillter-box";
	filterControls.className = "filter-controls";
	priceLabel.htmlFor = "max-product-price";
	priceLabel.textContent = "Maks. pris";
	priceInput.id = "max-product-price";
	priceInput.className = "price-filter-input";
	priceInput.type = "number";
	priceInput.min = "0";
	priceInput.step = "1";
	priceInput.placeholder = "Ingen grænse";
	stockLabel.className = "stock-filter";
	stockInput.type = "checkbox";
	stockLabel.append(stockInput, "Kun varer på lager");
	titel.textContent = "Filtrer produkter";

	const updateFilters = () => {
		onFilterChange({
			maxPrice: priceInput.value,
			inStockOnly: stockInput.checked,
		});
	};
	priceInput.addEventListener("input", updateFilters);
	stockInput.addEventListener("change", updateFilters);
	filterControls.append(priceLabel, priceInput, stockLabel);

	filterBox.append(titel, filterControls);

	return filterBox;
}
