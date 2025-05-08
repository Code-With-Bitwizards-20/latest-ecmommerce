//! FIRST WE GET ALL THE FATA FROM API THAT'S WE CREATE EARLIAR 

import products from "./api/products.json"
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts"
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductsTotal} from "./updateCartProductsTotal"



let cartProducts = getCartProductFromLS(); //? GETTING DATA FROM LOCAL STORAGE 

    //? FILTER THE PRODUCTS OF API AND LOCAL STORAGE BY THEIR IDS MATCHED PRODUCTS ARE HERE 
let filterProducts = products.filter ((curProd) => {
return cartProducts.some((curElem) => curElem.id === curProd.id);
}); 

console.log(filterProducts);



// ! GETTING PRODUCT CARD CONTAINER BY REFRENCE
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");


//? CALLING FUNCTION

const showCartProducts = () => {
    filterProducts.forEach((curProd) => {
         const {category, id, image, name, stock, price} = curProd;
         let productClone = document.importNode(templateContainer.content, true);  //?IMPORTING TEMPLATE 
         
         const LSActualData = fetchQuantityFromCartLS(id, price);

         productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
         productClone.querySelector(".category").textContent = category;
         productClone.querySelector(".productName").textContent = name;
         productClone.querySelector(".productImage").src = image;
         
         productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;
         productClone.querySelector(".productPrice").textContent = LSActualData.price;

         
        //?  FOR INCREMENT AND DECREMENT IN CART SECTIONS 
        productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

         
         

      cartElement.appendChild(productClone);  //? BY USING THIS CODE WE SEE ALL THE PRODUCTS
    });
};


showCartProducts();


//! CODE FOR FINAL TOTAL PROICES OF PRODUCTS

updateCartProductsTotal(); 