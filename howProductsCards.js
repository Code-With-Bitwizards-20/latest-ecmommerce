import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
if (!products) {
    return false;
}

products.forEach((curProd) => {
 const { brand, category, description, id, image, name, price, stock } = curProd;   //? destructuring
 
 const productClone = document.importNode(productTemplate.content, true);  //? import node are used for import node from another document or from a <template> element of html // also clone the element 


//!  ALL THE DETAILS OF CARDS HERE that shows in cards

 productClone.querySelector(".productName").textContent = name;

 productClone.querySelector(".productImage").src = image;
 productClone.querySelector(".productImage").alt = name;

 productClone.querySelector(".productStock").textContent= stock;

 productClone.querySelector(".productDescription").textContent = description;

 productClone.querySelector(".category").textContent = category;

 productClone.querySelector(".productPrice").textContent = `PKR ${price}`;
 productClone.querySelector(".productActualPrice").textContent = `PKR ${price * 4}`;

//  productClone.querySelector(".productActualPrice").textContent = `PKR ${price * 4}`;

  //! INCREMENT AND DECREMENTS OF QUANTITY OF PRODUCTS HERE
  //? BY USING THIS CODE WE GET AUTOMATICALLY ID OF EVERY CARD DIFFERENT LIKE CARD1, CARD2 ETC WE CAN TARGET ALL CARDS INCREMENT AND DECREMENT
 productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)

 //! INCREMENT AND DECREMENTS OF QUANTITY OF PRODUCTS HERE
 productClone.querySelector(".stockElement").addEventListener ('click', (event) => {
    homeQuantityToggle(event, id, stock);
 });


// ?NOW WE SIMPLITY TAKES ADD TO CART AND ADD EVENT LISTNER

productClone.querySelector(".add-to-cart-button").addEventListener('click', (event) => {
  addToCart(event, id, stock); 
})

//?  NOW WE APPEND productClone INTO productContainer

productContainer.append (productClone);
 
});

};


//* INCREMENT AND DECREMENTS OF QUANTITY OF PRODUCTS 

