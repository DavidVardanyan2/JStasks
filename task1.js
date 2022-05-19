//TASK1

let givenNumber = +prompt("Please provide number")
let digit = +prompt("Please provide digit")

function checkNumber(givenNumber,digit) {
    if ((givenNumber+'').includes(digit+'')) {
        return "Yes"
    } else {
        return "No"
    }
}

console.log(checkNumber(givenNumber, digit))

//TASK2

let number = prompt("Please enter a number")
let lastDigit = number% 10; 

function replace (number) {
  let changedFirstDigit = number.replace(lastDigit, number[0]);
  let replacedNumber = changedFirstDigit.replace(number[0], lastDigit);
  return replacedNumber
}

alert(replace(number))

//TASK3

let newNumber = +prompt("Please provide a number")

function differenceBetweenNumbers(newNumber) {

  let largest = 0
  let smallest = 9

  while (newNumber) {

    largest = Math.max(newNumber % 10, largest);

    smallest = Math.min(newNumber % 10, smallest);
    number = parseInt(newNumber/10)

  }
  console.log(largest - smallest)
}

alert(differenceBetweenNumbers(newNumber))

//TASK4 

let primeNumber = +prompt("Please provide a number")

function prime(primeNumber) {
  for(let i = 2; i < primeNumber; i++)
    if(number % i === 0) return "No";
  return "Yes";
}

console.log(prime(primeNumber))

//TASK5 

let player1 = prompt("Please enter the value of player 1");
function callFirstPrompt(player1) {

  if (player1 != "Rock" || player1 != "Paper" || player1 != "Scissors") return
  else {
    return callFirstPrompt()
  }
}
let player2 = prompt("Please enter the value of player 2");
function callSecondPrompt(player2) {

  if (player2 != "Rock" || player2 != "Paper" || player2 != "Scissors") return
  else {
    return callSecondPrompt()
  }
}

alert(callFirstPrompt()) 


alert(callSecondPrompt())

if (player1 === "Rock" && player2 === "Paper" || player1 === "Paper" && player2 === "Scissors" || player1 === "Scissors" && player2 === "Rock") {
  alert("Player 2 won!")
} else if (player2 === "Rock" && player === "Paper" || player2 === "Paper" && player1 === "Scissors" || player2 === "Scissors" && player1 === "Rock") {
  alert("Player 1 won!")
} else if (player1 === player2) {
  alert("Draw!")
}

//TASK 6






