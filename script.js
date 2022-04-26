"use strict";

// mini challenge 1
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
peanutsButton.addEventListener("click", (event) => {
  total += 3;
  //  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});
chocolateButton.addEventListener("click", (event) => {
  total += 4;
  //  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});
gummiesButton.addEventListener("click", (event) => {
  total += 6;
  //  console.log(total);
  totalParagraph.textContent = `Total: $${total}.00`;
});

// mini challenge 2
const moneyForm = document.querySelector(".money-form");
// form listens for submits
moneyForm.addEventListener("submit", (zebra) => {
  zebra.preventDefault();
  const howManyCoins = document.querySelector("#howMany").value;
  const typeOfCoin = document.querySelector("#whichCoin").value;
  console.log(howManyCoins);
  console.log(typeOfCoin);
  for (let i = 0; i < howManyCoins; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add(typeOfCoin, "coin");
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    document.querySelector(".coin-container").append(newCoin);
  }
});

// mini challenge 3
const onBtn = document.querySelector(".on");
const offBtn = document.querySelector(".off");
const toggleBtn = document.querySelector(".toggle");
const endBtn = document.querySelector(".end");
const lightBulb = document.querySelector(".bulb");
// node list: (treated like an array)
const allButtons = document.querySelectorAll(".btn");

onBtn.addEventListener("click", () => {
  lightBulb.classList.add("turn-on");
});
offBtn.addEventListener("click", () => {
  lightBulb.classList.remove("turn-on");
});
toggleBtn.addEventListener("click", () => {
  lightBulb.classList.toggle("turn-on");
});
endBtn.addEventListener("click", () => {
  lightBulb.remove();
  //   onBtn.disabled = true;
  allButtons.forEach((node) => {
    node.disabled = true;
  });
});
