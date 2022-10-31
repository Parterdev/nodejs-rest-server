// Calling hash function (bcrypt.js)
const { generateHash } = require('./bcrypt');
// Export DB helper functions for middlewares
const { 
  isAValidRole, 
  isEmailDuplicate,
  searchUserById 
} = require('./dbValidators');

module.exports = {
  generateHash,
  isAValidRole,
  isEmailDuplicate,
  searchUserById,
}