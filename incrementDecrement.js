import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductsTotal } from "./updateCartProductsTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector('.productPrice');


//?   for increment and decrement at local storage

let quantity = 1;
let localStoragePrice = 0;
let localCartProduct = getCartProductFromLS();

let existingPro = localCartProduct.find((curPro) => curPro.id === id);

if (existingPro) {
    quantity = existingPro.quantity
    localStoragePrice = existingPro.price;
} else {
     localStoragePrice = price;
     price = price;
}

if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
}

localStoragePrice = price * quantity;
localStoragePrice = Number(localStoragePrice.toFixed(2)); //? ONLY 2 NUMBERS AFTER . DECEMIAL 


let updateCart = { id, quantity, price : localStoragePrice};

    //? NOW match the product adds twice  UPDATE THIS QUANTITY AT LOCAL STORAGE with updatd quantity
   updateCart = localCartProduct.map((curProd) => {
    return curProd.id === id ? updateCart : curProd;
    });
    //  console.log(updateCart)
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    //? ALSO SHOW ON THE CART PAGE INCREMENT AND DECREMENT
    productQuantity.innerText = quantity;
    productPrice.innerText =  localStoragePrice;

    updateCartProductsTotal();
};


