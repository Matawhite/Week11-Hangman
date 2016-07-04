var word = 'dog';

start = "_".repeat(word.length) + "";
output = start.split("");
console.log(output);
var userInput = 'd';

for(var i = 0; i < word.length; i++){
      if(word[i] === userInput){
        output.splice(i,1,userInput)
        //making sure not mutate output back to a string
        var updated = output.join("");
        }
      }
console.log(updated)
