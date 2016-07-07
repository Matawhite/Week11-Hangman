var inquirer = require('inquirer');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter');


var newLetter = new letter.LetterObj();
var newwordObj = new word.WordObj();


console.log(game.word);

function playGame(guess){
  if(guess > 0){
    inquirer.prompt([
      {
        name: 'letterGuessed',
        message: 'Guess a letter.'
      }
      ]).then(function(answers) {
        if(newwordObj.check(answers.letterGuessed)){
        guess --;
        console.log(newLetter.mainDisplay(answers.letterGuessed));
        console.log('Guesses Left: ' + guess);
        playGame(guess);
      }else{
        guess --
        console.log('Sorry that letter is not found')
        console.log(guess);
        playGame(guess);
      }
    });
  }
}

playGame(10);

// function lose(guess){
//   if(guess == 0){
//     return true;
//   }else{
//     return false
//   }
// }
