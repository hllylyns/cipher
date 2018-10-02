//relative frequencies of letters in the English Lang
var relFreqKey = {
    a: 8.167,
    b: 1.492,
    c: 2.782,
    d: 4.253,
    e: 12.702,
    f: 2.228,
    g: 2.015,
    h: 6.094,
    i: 6.966,
    j: 0.153,
    k: 0.772,
    l: 4.025,
    m: 2.406,
    n: 6.749,
    o: 7.507,
    p: 1.929,
    q: 0.095,
    r: 5.987,
    s: 6.327,
    t: 9.056,
    u: 2.758,
    v: 0.978,
    w: 2.360,
    x: 0.150,
    y: 1.974,
    z: 0.074,
}

function createLetterCount(textBlock){
    //use justLetters for total letters, would be great if it could replace punctuation too, but replace not currently working 
    var justLetters = textBlock.toLowerCase().split(' ').join('').replace(/[^A-Za-z0-9\s]/i, '') 
    //Obj that will show count of ea letter
    var letterCount = {} 
    //create alphabet array, to use for creating letterCount obj 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    function logLetterPercent(text, letter) {
       var count = 0;
        for (var i = 0; i < text.length; i++) {
           if (text[i] === letter) {
               count++;
           }
      }
      //makes the final count a percentage of total letters
      return (count/justLetters.length)*100;
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

function createKey(encrypted, decrypted, relFreqKey){
    //need encryptedLetterCount to equal return value of createLetterCount when encrypted is passed in as text block
    var encryptedLetterCount = encrypted.createLetterCount()//is it this
    var encryptedLetterCount = createLetterCount(encrypted)//or this? 
    if (decrypted){
        //if you have the decrypted text, you can use the letterCount from it to map out an array of posssible iterations/decryptions
    }else{
        //otherwise, you have to do what you can with just the relFreqKey - 
        //this doesn't help you narrow it down as easily, and it's v innacurate with small chuncks of text
    }
   }