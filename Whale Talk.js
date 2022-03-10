let input = 'Quilimangiaro purpuretto';

const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultsArray = [];
for(i = 0; i < input.length; i++) {
  if(input[i] === 'e' || input[i] === 'u') {
    resultsArray.push(input[i]);
  }
    for (j = 0; j< vowels.length; j++) {    
      if(input[i] === vowels[j]) {
        resultsArray.push(input[i]);
      }
    }
}
const resultString = resultsArray.join('').toUpperCase();
console.log(resultString);