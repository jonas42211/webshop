export function lavCatagories(categories = [], onCategoryClick = () => {}) {
	const categoriesBox = document.createElement("section");
	const titel = document.createElement("h2");
	const categoriesList = document.createElement("div");

	categoriesBox.className = "categories-box";
	categoriesList.className = "categories-list";
	titel.textContent = "Kategorier";

	categories.forEach((category) => {
		const categoryButton = document.createElement("button");
		const categoryName = typeof category === "string" ? category : category.name;
		const categorySlug = typeof category === "string"
			? category.toLowerCase().trim().replace(/\s+/g, "-")
			: category.slug;

		categoryButton.type = "button";
		categoryButton.textContent = categoryName;
		categoryButton.addEventListener("click", () => onCategoryClick(categorySlug));
		categoriesList.append(categoryButton);
	});

	categoriesBox.append(titel, categoriesList);

	return categoriesBox;
}
