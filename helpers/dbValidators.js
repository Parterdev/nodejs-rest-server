// DB Validator (each returns an error)
const { userModel, roleModel } = require('../models/index');
const { validationMessages } = require('./strings');
const { errorHandling, showHandlingErrors } = require('../controllers/users/errorHandling');
const { Error } = require('../models/error');

const isAValidRole = async(role = '') => {
  const roleExists = await roleModel.findOne({role});
  if (!roleExists) {
    throw new Error(validationMessages.notValidRole)
  }
};

/* Custom error handling to email: */
const isEmailDuplicate = async(email = '') => {
  // Pass params to reference errors with handling validator
  errorHandling([email]);

  const emailExists = await userModel.findOne({email});
  if (emailExists) {
    /* REMEMBER: I coded this for U to see my custom errors
    implementation... Follow the code and feel free to add yours...   
    */
    const [errors] = showHandlingErrors();
    throw new Error(errors.msg);
  };
}

const searchUserById = async(id = '') => {
  const userById = await userModel.findById(id);
  if(!userById) {
    throw new Error(`Couldn't find user with id: {$id}`); 
  }
}

module.exports = {
  isEmailDuplicate,
  isAValidRole,
  searchUserById
}