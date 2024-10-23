/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // document.querySelector("card").innerHTML = generateRandomNumber;
  // document.querySelector("card").classList.add(generateRandomSuit);
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
  let randomNumber = Math.floor(Math.random() * 13);
  let randomSuit = Math.floor(Math.random() * 4);

  document.getElementById("iconoUp").innerHTML = figura[randomSuit];
  document.getElementById("cardValue").innerHTML = valores[randomNumber];
  document.getElementById("iconoDown").innerHTML = figura[randomSuit];

  // document.console.log("Hello Rigo from the console!");
};

// // let generateRandomNumber = () => {
//   // let valores = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K"
//   ];

//   let numerosIndex = Math.floor(Math.random) * valores.length;
//   return valores[numerosIndex];
// };

// let generateRandomSuit = () => {
//   let figura = ["diamonds", "spades", "hearts", "clubs"];
//   let figuraIndex = Math.floor(Math.random) * figura.length;
//   return figura[figuraIndex];
// // };
