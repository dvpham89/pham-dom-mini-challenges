"use strict";

const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
const totalParagraph = document.querySelector(".vendingTotal");
// console.dir(colaButton);
let total = 0;

colaButton.addEventListener("click", (event) => {
  total += 2;
  //  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});
