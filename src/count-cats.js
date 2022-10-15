const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  // '!!!!очень важно' throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  c = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let d = 0; d < arr[i].length; d++) {
      if (arr[i][d] == "^^")
        c++;
    }
  }
  return c;
}

module.exports = {
  countCats
};
