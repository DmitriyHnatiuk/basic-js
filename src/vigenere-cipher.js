const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  _crypt(message, key, isEncrypt) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let msg = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let kIndex = 0;

    if (!this.isDirect) {
      msg = msg.split('').reverse().join('');
    }

    for (const char of msg) {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        const msgPosition = code - 65;
        const keyPosition = k[kIndex % k.length].charCodeAt(0) - 65;

        const newPosition = isEncrypt
          ? (msgPosition + keyPosition) % 26
          : (msgPosition - keyPosition + 26) % 26;

        result += String.fromCharCode(newPosition + 65);
        kIndex += 1;
      } else {
        result += char;
      }
    }
    return result;
  }

  encrypt(message, key) {
    return this._crypt(message, key, true);
  }

  decrypt(message, key) {
    return this._crypt(message, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
