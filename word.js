// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var game = require('./game.js');
var letter = require('./letter');

exports.WordObj = function(){
  this.check = function(guess){
    if(game.word.includes(guess)){
      return true;
    }
  }
  this.winOrLose = function(word, guessCount){
      if(!word.includes("_")){
      return true;
    }
  this.letterGuessedArr = [];
}
}
