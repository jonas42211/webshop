export function lavDropdown(onSortChange = () => {}) {
	const dropdownBox = document.createElement("section");
	const label = document.createElement("label");
	const dropdown = document.createElement("select");
	const muligheder = [
		{ value: "default", label: "Standard" },
		{ value: "price-asc", label: "Pris: lav til høj" },
		{ value: "price-desc", label: "Pris: høj til lav" },
	];

	dropdownBox.className = "dropdown-box";
	label.textContent = "Sorter produkter";
	label.htmlFor = "sortering";
	dropdown.id = "sortering";

	muligheder.forEach(({ value, label }) => {
		const option = document.createElement("option");

		option.value = value;
		option.textContent = label;
		dropdown.append(option);
	});
	dropdown.addEventListener("change", () => onSortChange(dropdown.value));

	dropdownBox.append(label, dropdown);

	return dropdownBox;
}
