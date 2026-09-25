import { lavHeder } from "./view/header/heder.js";
import { lavBasket } from "./view/header/basket.js";
import { lavFooter } from "./view/footer.js";
import { lavFillter } from "./view/fillter.js";
import { lavDropdown } from "./view/dropdown.js";
import { lavCatagories } from "./view/catagories.js";
import { fetchCategories } from "./model/model.js";

async function startSide() {
	const heder = lavHeder();
	heder.append(lavBasket());
	const categories = await fetchCategories();

	document.body.append(heder);
	document.body.append(lavCatagories(categories));
	document.body.append(lavFillter());
	document.body.append(lavDropdown());
	document.body.append(lavFooter());
}

startSide();
