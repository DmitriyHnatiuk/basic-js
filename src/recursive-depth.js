const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let count = 0;
    for (const char of arr) {
      if (Array.isArray(char)) {
        const depth = this.calculateDepth(char);
        if (depth > count) count = depth;
      }
    }
    return 1 + count;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
