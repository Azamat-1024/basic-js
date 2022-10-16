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
function countCats( matrix) {
  // '!!!!очень важно' throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
c = 0;
arr = matrix.flat();
c = arr.filter(word => word === "^^");
return c.length;
}
//npm run test
module.exports = {
  countCats
};
