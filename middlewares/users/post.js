const {
  check,
  isAValidRole,
  isEmailDuplicate, 
  validationMessages,
  validateReqFields,
} = require('../index');

// To return an array of middlewares (using in routes)
const postMiddleware = () => {
  return [
    // Using middlewares to intercept controller execution
    check('name', validationMessages.nameIsRequired).not().isEmpty(),
    check('email', validationMessages.emailError).isEmail(),
    check('password', validationMessages.passwordLenghtError).isLength({ min: 8 }),
  
    /* Validatig roles with hardcoded array params
    check('role', validationMessages.notValidRole).isIn(['ADMIN_ROLE', 'USER_ROLE']), */
  
    // Validating with match DB data
    check('role').custom(isAValidRole),
    check('email').custom(isEmailDuplicate),
    
    // Catching express validator middleware errors
    validateReqFields,
  ]
};


module.exports = {
  postMiddleware
}