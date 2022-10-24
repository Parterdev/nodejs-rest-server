// Calling hash function (bcrypt.js)
const { generateHash } = require('../helpers/bcrypt');
// To validate responses
const { validationMessages } = require('../helpers/strings');

module.exports = {
  generateHash,
  validationMessages
}