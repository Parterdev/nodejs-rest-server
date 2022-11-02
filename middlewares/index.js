// Using express validator middleware to validate body fields
const { request, response } = require('express');
const { check, validationResult } = require('express-validator');
const { validationMessages } = require('../helpers/strings');
const { 
  isAValidRole, 
  isEmailDuplicate, 
  searchUserById 
} = require('../helpers/index'); 

// To return an array of middlewares (using in routes)
const middleware = {
  postMiddleware: () => {
    return [
      // Using middlewares to intercept controller execution
      check('name', validationMessages.nameIsRequired).not().isEmpty(),
      check('email', validationMessages.emailError).isEmail(),
      check('password', validationMessages.passwordLenghtError).isLength({ min: 8 }),
  
      /* Validatig roles with hardcoded array params
      check('role', validationMessages.notValidRole).isIn(['ADMIN_ROLE', 'USER_ROLE']), */
  
      // Validating with match DB data
      check('role').custom(isAValidRole),
      check('email').custom(isEmailDuplicate)
    ]
  },
  putMiddleware: () => {  
    return [
      check('id', validationMessages.notValidID).isMongoId(),
      check('email', validationMessages.emailError).isEmail(),
      check('id').custom(searchUserById),
      check('role').custom(isAValidRole).optional()
    ]
  },
};


// To validate middleware chain errors
const validateReqFields = (req=request, res=response, next) => {
  // Catching express validator middleware errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  middleware,
  validateReqFields
}