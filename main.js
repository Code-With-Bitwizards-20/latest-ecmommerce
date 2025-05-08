import './style.css'


//? IMPORTING ALL PRODUCTS AND DETAILS FROM "./api/products.json 

import products from "./api/products.json";
import { showProductContainer } from './howProductsCards';
console.log(products);

//? NOW ITS SHOW IN CONSOLE IN THE FORM OF ARRAYS ./api/products.json


//! NOW WE CALL THE FUNCTION FOR DISPLAYING ALL THE PRODUCTS IN THE CARD THAT TAKES AN ARRAY OF PRODUCTS AS INPUT

showProductContainer(products); 
