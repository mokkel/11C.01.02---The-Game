"use strict";

// DOM Content loaded
window.addEventListener("DOMContentLoaded", start);

// Run the user selection
function start() {
  console.log("start");
  userSelection();
}

// Global variable establish
const userHand = document.querySelector("#player1");
const compHand = document.querySelector("#player2");

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let userChoice;
let compChoice;
let randomNum;

const options = ["rock", "paper", "scissors"];

// Computer choice
function compSelection() {
  // Computer finds a number
  // Generat a random number from 0 til 2
  randomNum = Math.floor(Math.random() * options.length);
  //   console.log(randomNum);

  // Storage of the computers choice
  compChoice = options[randomNum];
  console.log(compChoice);
}

// User choice
function userSelection() {
  resetGame();
  rockBtn.addEventListener("click", userPicksRock);
  paperBtn.addEventListener("click", userPicksPaper);
  scissorsBtn.addEventListener("click", userPicksScissors);
}

// User picks rock
function userPicksRock() {
  // Take rock a putning in to a variable
  userChoice = "rock";
  userHand.classList.add("player", "shake");
  compHand.classList.add("player", "shake");

  // Run function where computer choice
  compSelection();

  setTimeout(function () {
    userHand.className = "";
    userHand.classList.add("player", "rock");

    compHand.className = "";
    compHand.classList.add("player", compChoice);

    if (compChoice == userChoice) {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, Is a draw`);
      showDraw();
    } else if (compChoice == options[2]) {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, You win`);
      showWin();
    } else {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, You lose`);
      showLose();
    }
  }, 1700);
}

function userPicksPaper() {
  userChoice = "paper";
  userHand.classList.add("player", "shake");
  compHand.classList.add("player", "shake");

  compSelection();

  setTimeout(function () {
    userHand.className = "";
    userHand.classList.add("player", "paper");

    compHand.className = "";
    compHand.classList.add("player", compChoice);

    if (compChoice == userChoice) {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, Is a draw`);
      showDraw();
    } else if (compChoice == options[0]) {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, You win`);
      showWin();
    } else {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, You lose`);
      showLose();
    }
  }, 1700);
}

function userPicksScissors() {
  userChoice = "scissors";
  userHand.classList.add("player", "shake");
  compHand.classList.add("player", "shake");

  compSelection();

  setTimeout(function () {
    userHand.className = "";
    userHand.classList.add("player", "scissors");

    compHand.className = "";
    compHand.classList.add("player", compChoice);

    if (compChoice == userChoice) {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, Is a draw`);
      showDraw();
    } else if (compChoice == options[1]) {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, You win`);
      showWin();
    } else {
      console.log(`Comp: ${compChoice}, User: ${userChoice}, You lose`);
      showLose();
    }
  }, 1700);
}

function showWin() {
  document.querySelector("#win").classList.remove("hidden");
  document.querySelector("#gamefield").addEventListener("click", resetGame);
  document.querySelector("#buttons").addEventListener("click", resetGame);
}

function showLose() {
  document.querySelector("#lose").classList.remove("hidden");
  document.querySelector("#gamefield").addEventListener("click", resetGame);
  document.querySelector("#buttons").addEventListener("click", resetGame);
}

function showDraw() {
  document.querySelector("#draw").classList.remove("hidden");
  document.querySelector("#gamefield").addEventListener("click", resetGame);
  document.querySelector("#buttons").addEventListener("click", resetGame);
}

function resetGame() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector(".player").classList.remove = "";
  document.querySelector(".player").classList.add("player");
  document.querySelector("#gamefield").addEventListener("click", start);
  document.querySelector("#buttons").addEventListener("click", start);

  document.querySelector("#texts").classList.remove = "";

  document.querySelector("#gamefield").removeEventListener("click", start);
  document.querySelector("#buttons").removeEventListener("click", start);
}