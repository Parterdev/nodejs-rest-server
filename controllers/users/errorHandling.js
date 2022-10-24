const { validationMessages } = require('../../helpers');
const { Error, Errors } = require('../../models/error');

const errorHandling = (value = []) => {
  // Destructuring array params
  const [email] = value;

  // Create error instances
  const e1 = new Error(
    email, // Pass first parameter
    validationMessages.emailExists, 
    "email", 
    "body"
  );

  Errors.createErrors(e1);
};

const showHandlingErrors = () => Errors.showErrorList;

module.exports = {
  errorHandling,
  showHandlingErrors,
}