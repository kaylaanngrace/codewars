/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// this was a brute force answer
function pigIt(str){
    let words = str.split(' ')
    let newStr = []
    for(let i = 0; i < words.length; i++) {
      let currentWord = words[i]
      if (currentWord != '!' && currentWord !='?' && currentWord != '.') {
            let firstChar = currentWord.charAt(0)
            let cutWord = currentWord.slice(1)
            let newWord = cutWord + firstChar + 'ay'
            newStr.push(newWord)
      } else {
        newStr.push(currentWord)
      }
    } 
    return newStr.join(' ')
  }