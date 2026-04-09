// Rock Paper Scissors

// I. Writing Logic to get Computer Choice:
// Our game will be played against the computer. We will write a function that randomly returns "rock","paper", or "scissors".

// 1. Create a new function named getComputerChoice.
function getComputerChoice() {
  // we want to generate random numbers
  // we want those random numbers to correspond to 3 choices: rock, paper, or scissors
  // this generates a random integer between 0 and 3 and will return the greatest integer less than or equal to its numeric argument. (so either 0, 1, or 2)

  // 2. Write the code so that getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors".
  let randomNumber = Math.floor(Math.random() * 3)
  console.log(randomNumber)

  // - Hint: The Math.random method returns a random number that's greater than or equal to 0 and less than 1.
  //         Think about how we can use this to conditionally return one of the multiple choices.

  // 3. Test that our function returns what we expect using console.log before advancing to next step.
  if (randomNumber === 0) {
    console.log("Rock")
    return "Rock"
  } else if (randomNumber === 1) {
    console.log("Paper")
    return "Paper"
  } else {
    console.log("Scissors")
    return "Scissors"
  }
}

// getComputerChoice()

// ************* Arrow function form:
const getComputerChoiceArrow = () =>
  ["Computer: Rock", "Computer: Paper", "Computer: Scissors"][
    Math.floor(Math.random() * 3)
  ]

console.log(getComputerChoiceArrow())

// II. Write Logic to get Human Choice:
// Our game will be played by a human player. We will write a function that takes a user's input and returns it.

// 1. Create a new function named getHumanChoice
function getHumanChoice() {
  let userInput = prompt("Rock, Paper, or Scissors?")
  //   console.log(userInput)

  // 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
  // - Hint: Use prompt method to get the user's input.
  // if userInput is equal to 'Rock' then return "Rock"
  if (userInput.toLowerCase() === "rock") {
    // console.log("User: Rock")
    return "User: Rock"
  } else if (userInput.toLowerCase() === "paper") {
    console.log("User: Paper")
    return "User: Paper"
  } else if (userInput.toLowerCase() === "scissors") {
    console.log("User: Scissors")
    return "User: Scissors"
  } else {
    console.log("That's not a valid choice.")
    return "That's not a valid choice."
  }
}
// 3. Test our function returns using console.log
// console.log(getHumanChoice())

// ************* Arrow function form:
const getHumanChoiceArrow = () => {
  let userInput = prompt("Rock, Paper, or Scissors?")

  if (userInput.toLowerCase() === "rock") {
    // console.log("User: Rock")
    return "User: Rock"
  } else if (userInput.toLowerCase() === "paper") {
    // console.log("User: Paper")
    return "User: Paper"
  } else if (userInput.toLowerCase() === "scissors") {
    console.log("User: Scissors")
    return "User: Scissors"
  } else {
    console.log("That's not a valid choice.")
    return "That's not a valid choice."
  }
}

console.log(getHumanChoiceArrow())

// III. Declare the players score variables
// Our game will keep track of the players score. We will write variables to keep track of the players score.

// Create 2 new variables named humanScore and computerScore in the global scope.
// Initialize with value of 0
let humanScore = 0
let computerScore = 0
