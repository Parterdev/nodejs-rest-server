// To hashing a password or any type of string
const bcrypt = require('bcryptjs');

const generateHash = async (salt = 10, string) => {
  const saltSync = bcrypt.genSaltSync(salt);
  try {
    const hash = await bcrypt.hashSync(string, saltSync);
    return hash;
  } catch(err) {
    throw new Error(err);
  }
};

module.exports = {
  generateHash
}