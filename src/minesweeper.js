const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function countMines(matrix, rowIndex, colIndex) {
  let count = 0;

  for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
    for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
      if (rowOffset === 0 && colOffset === 0) continue;

      if (matrix[rowIndex + rowOffset]?.[colIndex + colOffset] === true) {
        count++;
      }
    }
  }
  return count;
}
function minesweeper(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) return [];

  return Array.from({ length: matrix.length }, (_, rowIndex) =>
    Array.from({ length: matrix[0].length }, (_, colIndex) =>
      countMines(matrix, rowIndex, colIndex)
    )
  );
}

module.exports = {
  minesweeper
};
