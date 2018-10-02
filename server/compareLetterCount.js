function compareLetterCount(textBlock){
    var justLetters = textBlock.toLowerCase().split(' ').join('').replace(/[^A-Za-z0-9\s]/i, '') //use later for total letters, needs to replace punctuation too, but replace not currently working 
    var letterCount = {} //Obj that will show count of ea letter
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');//creates alphabet array,to use for creating letterCount obj 
    function logLetterPercent(text, letter) {
       var count = 0;
        for (var i = 0; i < text.length; i++) {
           if (text[i] === letter) {
               count++;
           }
      }
      return (count/justLetters.length)*100;//makes the final count a percentage of total letters
    }
    for (var i = 0, l = alphabet.length; i < l; i++) {
        var currentLetter = alphabet[i];
        letterCount[currentLetter] = logLetterPercent(justLetters, currentLetter);
    }
    console.log(justLetters)
    console.log(justLetters.length)
    console.log(letterCount)
    return letterCount;
    }