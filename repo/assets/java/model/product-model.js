export async function fetchProducts(endpoint = "?limit=30") {
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