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

let num = +prompt("Insert Number")
let fibnum1 = 0;
let fibnum2 = 1;

let sum = 0


for (let i = 2 ; i<=num ; i++) {
  sum = fibnum1 + fibnum2
  fibnum1 = fibnum2
  fibnum2 = sum
}

alert(sum)

//TASK 7

let chosenNumber = +prompt("Enter a number");
let n1 = 0; 
let n2 = 1; 
let nextNumber;

console.log(n1); 
console.log(n2); 

nextNumber = n1 + n2;

while (nextNumber <= chosenNumber) {

    console.log(nextNumber);

    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
}


//TASK 8 ???

//TASK 9

let a = 0

for (let i = 0; i < 10; i++) {
  let result = a + "" + i
  console.log(result)
}

let b = 9
while (b < 99) {
  b++
  let result2 = b
  console.log(result2 + "")
}

//TASK 10 

let number = +prompt("Please enter a number") 

let sum = 0;
let product = 1;

if (number === 0) {
  console.log("Cannot Calculate")
} 

while (number != 0) {
  sum += number % 10;
  product *= number % 10;
  number = Math.floor(number / 10);
}

if (product % sum === 0) {
  console.log("Quotient is " + product / sum)
} else {
  console.log("Remainder is " + product % sum)
}



