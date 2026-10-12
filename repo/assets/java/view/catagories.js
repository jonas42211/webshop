export function lavCatagories(categories = [], onCategoryClick = () => {}) {
	const visibleCategoryCount = 6;
	const categoriesBox = document.createElement("section");
	const titel = document.createElement("h2");
	const categoriesList = document.createElement("div");

	categoriesBox.className = "categories-box";
	categoriesList.className = "categories-list";
	titel.textContent = "Kategorier";

	const categoryButtons = categories.map((category, index) => {
		const categoryButton = document.createElement("button");
		const categoryName = typeof category === "string" ? category : category.name;
		const categorySlug = typeof category === "string"
			? category.toLowerCase().trim().replace(/\s+/g, "-")
			: category.slug;

		categoryButton.type = "button";
		categoryButton.textContent = categoryName;
		categoryButton.hidden = index >= visibleCategoryCount;
		categoryButton.addEventListener("click", () => onCategoryClick(categorySlug));
		return categoryButton;
	});
	categoryButtons.forEach((categoryButton) => categoriesList.append(categoryButton));

	if (categories.length > visibleCategoryCount) {
		const toggleButton = document.createElement("button");

		toggleButton.type = "button";
		toggleButton.textContent = "Vis alle";
		toggleButton.setAttribute("aria-expanded", "false");
		toggleButton.addEventListener("click", () => {
			const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

			categoryButtons.slice(visibleCategoryCount).forEach((categoryButton) => {
				categoryButton.hidden = isExpanded;
			});
			toggleButton.setAttribute("aria-expanded", String(!isExpanded));
			toggleButton.textContent = isExpanded ? "Vis alle" : "Vis færre";
		});
		categoriesList.append(toggleButton);
	}

	categoriesBox.append(titel, categoriesList);

	return categoriesBox;
}
