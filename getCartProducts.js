//? WE ARE GETTING THE DATA  OF LOCAL STORAGE THERE 

import { updateCartValue } from "./updateCartValue";




export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem("cartProductLS");
    if (!cartProducts) {  //? if cart products were empty there will return this
      return [];
    }
    cartProducts = JSON.parse(cartProducts);
  
    //update the cart button value
    updateCartValue(cartProducts);
  
    updateCartValue(cartProducts);
    return cartProducts;
  };