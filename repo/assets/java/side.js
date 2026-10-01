import { lavHeder } from "./view/header/heder.js";
import { lavBasket } from "./view/header/basket.js";
import { lavFooter } from "./view/footer.js";
import { lavFillter } from "./view/fillter.js";
import { lavDropdown } from "./view/dropdown.js";
import { lavCatagories } from "./view/catagories.js";
import { lavProducts } from "./view/products.js";
import { fetchCategories, fetchProducts } from "./model/model.js";

async function startSide() {
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
	shopControls.append(lavFillter(), lavDropdown());
	let productsView = lavProducts(products);
	const handleCategoryClick = async (categorySlug) => {
		const categoryProducts = await fetchProducts(
			`/category/${encodeURIComponent(categorySlug)}`,
		);
		const updatedProductsView = lavProducts(categoryProducts);

		productsView.replaceWith(updatedProductsView);
		productsView = updatedProductsView;
	};

	shopLayout.append(shopControls, productsView);

	document.body.append(heder);
	document.body.append(lavCatagories(categories, handleCategoryClick));
	document.body.append(shopLayout);
	document.body.append(lavFooter());
}

startSide();
