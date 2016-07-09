var inquirer = require('inquirer');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter');


var newLetter = new letter.LetterObj();
var newWordObj = new word.WordObj();

// uncomment line 10 for testing
// console.log(game.word);

function playGame(guess){
  if(newWordObj.winOrLose(newLetter.updated, guess)){
    // guess = 0;
    console.log('You Win!')
  }
  if(guess > 0){
    inquirer.prompt([
      {
        name: 'letterGuessed',
        message: 'Guess a letter.'
      }
      ]).then(function(answers) {
        newWordObj.letterGuessedArr.push(answers.letterGuessed);
        console.log('Letters Guessed: ' + newWordObj.letterGuessedArr);
          if(newWordObj.check(answers.letterGuessed)){
            console.log(newLetter.mainDisplay(answers.letterGuessed));
            console.log('Guesses Left: ' + guess);
            guess --;
            playGame(guess);
          }else{
            guess --
            console.log('Sorry that letter is not found')
            console.log(guess);
            playGame(guess);
          }
        })
      }
    }

playGame(10);
