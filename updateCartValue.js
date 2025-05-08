const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`);
};  //? UPDATING COUNT IN TOP CART OPTION BU THIS CODE 