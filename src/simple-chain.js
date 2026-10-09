const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: [],
  getLength() {
    return thi._chain.length;
  },

  addLink(value) {
    this._chain.push(`( ${arguments === 'undefined' ? '' : value} )`);
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) ||
      position < 1 ||
      position > this._chain.length) {
      this._chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this._chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },

  finishChain() {
    const result = this._chain.join('~~');
    this._chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
