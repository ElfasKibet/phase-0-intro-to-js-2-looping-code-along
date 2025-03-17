// Code your solutions in this file
// Part 1: writeCards
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
  }
  return messages;
}

// Part 2: countDown
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Example calls to test:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
countDown(10);
