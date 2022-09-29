const transpose = function(matrix) {
  const returnArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!returnArray[j]) {
        returnArray[j] = [];
      }
      returnArray[j].push(matrix[i][j]);
    }
  }
  return returnArray;
};

const wordSearch = (letters,word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))
  //  console.log(horizontalJoin);
  // use the transpose function to transpose the "letter"

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  };
  const verticalJoin = transpose(letters)
  verticalJoin.map((ls => ls.join('')))

  for (v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  };
  return false // return
}

const array1 = [
  ['A','W','C','F','Q','U','A','L'],
  ['S','E','I','N','F','E','L','D'],
  ['Y','F','C','F','Q','U','A','L'],
  ['H','M','J','T','E','V','R','G'],
  ['W','H','C','S','Y','E','R','L'],
  ['B','F','R','E','N','E','Y','B'],
  ['U','B','T','W','A','P','A','I'],
  ['O','D','C','A','K','U','A','S'],
  ['E','Z','K','F','Q','U','A','L'],
]
console.log(wordSearch(array1,'FRANK'));

module.exports = wordSearch