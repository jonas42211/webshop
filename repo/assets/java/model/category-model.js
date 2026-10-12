export async function fetchCategories() {
	const response = await fetch("https://dummyjson.com/products/categories");

	if (!response.ok) {
		throw new Error(`Kunne ikke hente kategorier: ${response.status}`);
	}

	const data = await response.json();

	return data.map((category) => {
		if (typeof category === "string") {
			return {
				name: category,
				slug: category.toLowerCase().trim().replace(/\s+/g, "-"),
			};
		}

		return {
			name: category.name ?? category.slug,
			slug: category.slug ?? category.name.toLowerCase().trim().replace(/\s+/g, "-"),
		};
	});
}