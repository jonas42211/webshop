export function lavCatagories(categories = []) {
	const categoriesBox = document.createElement("section");
	const titel = document.createElement("h2");
	const categoriesList = document.createElement("div");

	categoriesBox.className = "categories-box";
	categoriesList.className = "categories-list";
	titel.textContent = "Kategorier";

	categories.forEach((category) => {
		const categoryButton = document.createElement("button");

		categoryButton.type = "button";
		categoryButton.textContent = category;
		categoriesList.append(categoryButton);
	});

	categoriesBox.append(titel, categoriesList);

	return categoriesBox;
}
