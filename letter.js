// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
var game = require('./game.js');

exports.LetterObj = function(){
  this.update = "";
  this.word = game.word;
  this.start = "_".repeat(this.word.length) + " ";
  this.arrWord = this.word.split("");
  this.updated = "";
  this.output = this.start.split("");
  this.mainDisplay = function(userInput){
    for(var i = 0; i < this.word.length; i++){
      if(this.word[i] === userInput){
        this.output.splice(i,1,userInput)
        this.updated = this.output.join("");
        return this.updated;
      }
    }
  }
}
