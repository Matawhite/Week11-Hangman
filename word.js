// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var game = require('./game.js');
var letter = require('./letter');


exports.WordObj = function(){
  this.check = function(guess){
    if(game.word.includes(guess)){
      return true;
    }
  }
  this.winOrLose = function(word1, guessCount){
      if(!word1.includes("_") && guessCount < 9){
      return true;

    }
  }
}

// function winOrLose(word1, word2){
//   if(word1 === word2){
//     console.log('You Win!');
//   }else{
//     console.log('nope, not yet');
//   }
// }
//
// winOrLose(game.word, newLetter.updated);
