


export async function fetchCategories() {
	const response = await fetch("https://dummyjson.com/products/categories");

	if (!response.ok) {
		throw new Error(`Kunne ikke hente kategorier: ${response.status}`);
	}

	const data = await response.json();

	return data.map((category) => {
		if (typeof category === "string") {
			return category;
		}

		return category.name;
	});
}




export async function fetchProducts(endpoint) {
	try {
		const response = await fetch("https://dummyjson.com/products" + endpoint);

		if (!response.ok) {
			throw new Error(`Kunne ikke hente produkter: ${response.status}`);
		}

		const data = await response.json();

		return data.products ?? data;
	} catch (error) {
		console.error("Der opstod en fejl ved hentning af produkter:", error);

		return [];
	}
}
