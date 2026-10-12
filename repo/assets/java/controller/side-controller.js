import { lavHeder } from "../view/header/heder.js";
import { lavBasket } from "../view/header/basket.js";
import { lavFooter } from "../view/footer.js";
import { lavFillter } from "../view/fillter.js";
import { lavDropdown } from "../view/dropdown.js";
import { lavCatagories } from "../view/catagories.js";
import { fetchCategories } from "../model/category-model.js";
import { fetchProducts } from "../model/product-model.js";
import { createProductController } from "./product-controller.js";

export async function startSide() {
	const heder = lavHeder();
	heder.append(lavBasket());
	const [categories, products] = await Promise.all([
		fetchCategories(),
		fetchProducts(),
	]);
	const shopLayout = document.createElement("main");
	const shopControls = document.createElement("aside");

	shopLayout.className = "shop-layout";
	shopControls.className = "shop-controls";
	shopControls.setAttribute("aria-label", "Produktfiltre og sortering");
	let productsView;
	const productController = createProductController(
		products,
		(updatedProductsView) => {
			if (productsView) {
				productsView.replaceWith(updatedProductsView);
			}
			productsView = updatedProductsView;
		},
		(productDetailsView) => {
			document.body.append(productDetailsView);
			productDetailsView.showModal();
		},
	);

	shopControls.append(
		lavFillter(productController.handleFilterChange),
		lavDropdown(productController.handleSortChange),
	);
	shopLayout.append(shopControls, productsView);

	document.body.append(heder);
	document.body.append(lavCatagories(categories, productController.handleCategoryClick));
	document.body.append(shopLayout);
	document.body.append(lavFooter());
}