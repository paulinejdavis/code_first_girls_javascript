// let name= 'Pauline'

// sentence = `what's on your mind ${name}`
// console.log(sentence)

// console.log('Hello World!')

// if (age <18) {
//     console.log('you are not allowed');
// } else {
//     console.log('welcome');
// }

// let name = prompt('what is your name?');

// if (name === 'Pauline'){
//     console.log('Welcome')
// } else {
//     console.log('try later')
// }

// let hole1 = parseInt(prompt('what is your score'))
// let hole2 = parseInt(prompt('what is your score'))
// let hole3 = parseInt(prompt('what is your score'))

// console.log(hole1 + hole2 + hole3)

 let scores = []
 let total = 0;
// // listofScores.push(5)

for (let i= 0; i < 5; i++) ; {
   let score = parseInt(prompt('what is your score'))
   scores.push(score)
   total = total + score;

}
console.log(total);
console.log(scores.join(' and '))

// console.log(scores[0] + scores[1] + scores[3])

//listofScores = [3,6,1]
// let total = 0
// for (let i= 0; i < listofScores; i++) {
//     total = total = listofScores[i]
// }

// console.log(total);

//while loops

// let actualPassword = "pw123";
// let userEnteredPW = "";

// while(userEnteredPW !== actualPassword) {
//   userEnteredPW = prompt('enter password')
// }  

// let targetNumber = '4';
// //keep guessing number
// // Initialize a variable to store the current guess
// let currentGuess = 1;

// // Loop while the current guess is not equal to the target number
// while (currentGuess !== targetNumber) {
//   // Increment the current guess by 1
//   currentGuess++;

//   // Check if the current guess is equal to the target number
//   if (currentGuess === targetNumber) {
//     console.log("Congratulations! You guessed the number 4.");
//   }
// }