//* WE CAN TARGET ALL CARDS INCREMENT AND DECREMENT BY USING THIS CODE

export const homeQuantityToggle = (event, id, stock) => {
const currentCardElement = document.querySelector(`#card${id}`)
// console.log(currentCardElement);

//* WE ARE TARGETING productQuantity BY USING THIS CODE HERE ON CLICK EVENT OF CARD 
const productQuantity = currentCardElement.querySelector(".productQuantity");
// console.log(productQuantity);

//* WE ARE GETTING PROPERTY OF ALL CARDS AT CLICK EVENT  AT THIS CODE 
let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;


//* NOW WE ADD ACTION IN INCREMENT

if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

//*   NOW WE ADD ACTIONS IN DECREMENT 

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }


//*   NOW WE REFLECTS THE ACTIONS ON + - BUTTONS BY RECALL THEM AND BY RETURN THEM 

  productQuantity.innerText = quantity;
  console.log(quantity);
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};

