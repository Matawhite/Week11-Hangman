// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter');

exports.WordObj = function(){
  this.check = function(guess){
    if(game.word.includes(guess)){
      return true
    }
  }
}
