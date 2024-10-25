/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let figura = ["♣", "♦", "♥", "♠"];

let randomNumber = Math.floor(Math.random() * valores.length);
let randomSuit = Math.floor(Math.random() * figura.length);

const btn = document.getElementById("btn");
let iconoUp = document.getElementById("iconoUp");
iconoUp.innerHTML = figura[randomSuit];
let cardValue = document.getElementById("cardValue");
cardValue.innerHTML = valores[randomNumber];
let iconoDown = document.getElementById("iconoDown");
iconoDown.innerHTML = figura[randomSuit];

function getRandomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function assignValues() {
  let random = getRandomValue(figura);
  iconoUp.innerText = random;
  iconoDown.innerText = random;
  cardValue.innerText = getRandomValue(valores);
}

window.onload = () => {
  assignValues();
};

btn.addEventListener("click", () => {
  assignValues();
});
