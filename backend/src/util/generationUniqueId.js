const crypto = require('crypto');

module.exports = function generatioUniqueId() {
   return crypto.randomBytes(4).toString('Hex');
}