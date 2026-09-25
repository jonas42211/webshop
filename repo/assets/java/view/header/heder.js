export function lavHeder() {
	const heder = document.createElement("header");
	const logo = document.createElement("img");
	const overskrift = document.createElement("h1");

	logo.src = "assets/img/download.jpg";
	logo.alt = "Webshop logo";
	overskrift.textContent = "Min webshop";

	heder.append(logo, overskrift);

	return heder;
}
