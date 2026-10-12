export function lavProductDetails(product) {
	const dialog = document.createElement("dialog");
	const content = document.createElement("div");
	const header = document.createElement("div");
	const title = document.createElement("h2");
	const closeButton = document.createElement("button");
	const image = document.createElement("img");
	const description = document.createElement("p");
	const detailsList = document.createElement("dl");

	dialog.className = "product-details-dialog";
	content.className = "product-details-content";
	header.className = "product-details-header";
	image.className = "product-details-image";
	description.className = "product-details-description";
	detailsList.className = "product-info-list";
	title.textContent = product.title;
	image.src = product.thumbnail || product.images?.[0] || "";
	image.alt = product.title;
	description.textContent = product.description || "Ingen beskrivelse.";
	closeButton.type = "button";
	closeButton.className = "product-details-close";
	closeButton.textContent = "Luk";
	closeButton.addEventListener("click", () => dialog.close());

	const productInfo = [
		["Kategori", product.category],
		[
			"Pris",
			new Intl.NumberFormat("da-DK", {
				style: "currency",
				currency: "USD",
			}).format(product.price),
		],
		["Lager", product.stock > 0 ? `${product.stock} stk. på lager` : "Ikke på lager"],
	];

	productInfo.forEach(([key, value]) => {
		const term = document.createElement("dt");
		const detail = document.createElement("dd");

		term.textContent = key;
		detail.textContent = value ?? "-";
		detailsList.append(term, detail);
	});

	header.append(title, closeButton);
	content.append(header, image, description, detailsList);
	dialog.append(content);
	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) dialog.close();
	});
	dialog.addEventListener("close", () => dialog.remove(), { once: true });

	return dialog;
}