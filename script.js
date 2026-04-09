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
  //   console.log(randomNumber)

  // - Hint: The Math.random method returns a random number that's greater than or equal to 0 and less than 1.
  //         Think about how we can use this to conditionally return one of the multiple choices.

  // 3. Test that our function returns what we expect using console.log before advancing to next step.
  if (randomNumber === 0) {
    console.log("Computer: Rock")
    return "rock"
  } else if (randomNumber === 1) {
    console.log("Computer: Paper")
    return "paper"
  } else {
    console.log("Computer: Scissors")
    return "scissors"
  }
}

// getComputerChoice()

// ************* Arrow function form:
// const getComputerChoiceArrow = () =>
//   ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]

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
    console.log("User: Rock")
    return "rock"
  } else if (userInput.toLowerCase() === "paper") {
    console.log("User: Paper")
    return "paper"
  } else if (userInput.toLowerCase() === "scissors") {
    console.log("User: Scissors")
    return "scissors"
  } else {
    console.log("That's not a valid choice.")
    return "That's not a valid choice."
  }
}
// 3. Test our function returns using console.log
// console.log(getHumanChoice())

// ************* Arrow function form:
// const getHumanChoiceArrow = () => {
//   let userInput = prompt("Rock, Paper, or Scissors?")

//   if (userInput.toLowerCase() === "rock") {
//     // console.log("User: Rock")
//     return "User: Rock"
//   } else if (userInput.toLowerCase() === "paper") {
//     // console.log("User: Paper")
//     return "User: Paper"
//   } else if (userInput.toLowerCase() === "scissors") {
//     console.log("User: Scissors")
//     return "User: Scissors"
//   } else {
//     console.log("That's not a valid choice.")
//     return "That's not a valid choice."
//   }
// }

// console.log(getHumanChoiceArrow())

// III. Declare the players score variables
// Our game will keep track of the players score. We will write variables to keep track of the players score.

// Create 2 new variables named humanScore and computerScore in the global scope.
// Initialize with value of 0
let humanScore = 0
let computerScore = 0

// IV. Write logic to play single round
// Our game will be played round by round. We will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner's score and logs a winner announcement.

// Create new function named playRound
// Define 2 params: humanChoice and computerChoice, use these params to take the human and computer choices as arguments.
function playRound(humanChoice, computerChoice) {
  // Convert both choices to lowercase so our comparisons work perfectly!
  //   humanChoice = humanChoice.toLowerCase()
  //   computerChoice = computerChoice.toLowerCase()

  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock")
    computerScore++
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper!")
    computerScore++
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors!")
    computerScore++
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors!")
    humanScore++
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock!")
    humanScore++
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper!")
    humanScore++
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie!")
  }

  console.log(
    `**Current score** User: ${humanScore} / Computer: ${computerScore}`,
  )
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
