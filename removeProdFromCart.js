import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";
import { updateCartProductsTotal} from "./updateCartProductsTotal"

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter ((curProd) => curProd.id !== id);

    //? UPDATE THE THE LOCAL STORAGE DATA AFTER THE REMOVE ACTIONS
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));


    // ?REMOVING THE DISPLAY QUANTITY OF PRODUCTS 
    let removeDev = document.getElementById(`card${id}`);
    if(removeDev) {
        removeDev.remove();

        showToast("Delect", id);
    }

    updateCartProductsTotal();
updateCartValue(cartProducts);
};



