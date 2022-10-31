// Using express validator middleware to validate body fields
const { check } = require('express-validator');
const { validateReqFields } = require('./validateReqFields');
const { validationMessages } = require('../helpers/strings');
const { 
  isAValidRole, 
  isEmailDuplicate,
  searchUserById 
} = require('../helpers/index');
// Control middlewares for http actions (API)
const { 
  postMiddleware,
  putMiddleware
} = require('./users/index');



module.exports = {
  check,
  isAValidRole,
  isEmailDuplicate,
  postMiddleware,
  putMiddleware,
  searchUserById,
  validationMessages,
  validateReqFields,
}