const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let index = str.length - 1;
  for (let i = 0; i < str.length; i += 1){
    if(str[i] < str[i + 1]){ 
      index  = i;
      break;
    }
  }
  return Number(str.slice(0, index) + str.slice(index + 1));
}

module.exports = {
  deleteDigit
};
