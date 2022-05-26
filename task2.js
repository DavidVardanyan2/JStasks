let givenNumber = +prompt("Please enter a number")

function findLargestDigit(number) {
  let a = number % 10
  let b = number / 10

  if (number === 0) {
    return 0
  } else {
    return Math.max(a, findLargestDigit(Math.floor(b)));
  }
}

console.log(findLargestDigit(givenNumber));