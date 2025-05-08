import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrlocalStorageProduct = getCartProductFromLS();

  //! SETTING ID TO EACH CARDS
  const currentProdElem = document.querySelector(`#card${id}`);

  //! GETTING PRODUCT QUANTITY AND PRODUCT PRICE
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  // console.log(quantity, price);

  price = price.replace("PKR", ""); //? REPLACING THE PKR SIGN WITH NULL FOR FINAL TOTAL CALCULATIONS

  //!   PLAY WITH THE QUANTITY HOW WE TAKLE QUANTITY WITH CODE
  let existingProd = arrlocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  // ?  code for if customer selects multiple quantities
  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity); //? getting total quantity
    price = Number(price * quantity);
    let updateCart = { id, quantity, price };

    //? NOW match the product adds twice  UPDATE THIS QUANTITY AT LOCAL STORAGE with updatd quantity
   updateCart = arrlocalStorageProduct.map((curProd) => {
    return curProd.id === id ? updateCart : curProd;
    });
     console.log(updateCart)
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
    showToast("add", id);
  };

  //?CODE FOR EXISTING PRODUCT // IF BUYER CLICK ON ADD TO CART WITH SAME QUALITY OF PRODUCTS
  if (existingProd) {
    // alert("its Already existing")
    return false;
  }

  price = Number(price * quantity); //? multiplying quantity with price for getting total price
  quantity = Number(quantity);

  let updateCart = { id, quantity, price };
  arrlocalStorageProduct.push(updateCart); //?UPDATE CART PRICE AND QUANTITY
  localStorage.setItem("cartProductLS", JSON.stringify(arrlocalStorageProduct)); //?SETTING INTO LOCAL STORAGE

  //* UPDATE CART VALUE BUTTON

  updateCartValue(arrlocalStorageProduct);
  showToast("add", id);
};
