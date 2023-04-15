/* 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


*/

// brute force answer
function abbrevName(name){
    // code away
  let abbrev = []
  let nameArr = name.toUpperCase().split(' ')
  nameArr.map(word => abbrev.push(word[0])) 
  abbrev.splice(1, 0,'.')
  return abbrev.join('')
}

// best practice answer
function abbrevName(name){
    // code away
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

console.log(abbrevName('Sam Harris fred'))