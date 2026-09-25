export function lavDropdown() {
	const dropdownBox = document.createElement("section");
	const label = document.createElement("label");
	const dropdown = document.createElement("select");
	const muligheder = ["Nyeste", "Pris: lav til høj", "Pris: høj til lav"];

	dropdownBox.className = "dropdown-box";
	label.textContent = "Sorter produkter";
	label.htmlFor = "sortering";
	dropdown.id = "sortering";

	muligheder.forEach((mulighed) => {
		const option = document.createElement("option");

		option.value = mulighed;
		option.textContent = mulighed;
		dropdown.append(option);
	});

	dropdownBox.append(label, dropdown);

	return dropdownBox;
}
