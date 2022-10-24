// To centralize express-validator req errors managing
const { request, response } = require('express');
// Using express validator to catch errors
const { validationResult } = require('express-validator');

const validateReqFields = (req=request, res=response, next) => {
  // Catching express validator middleware errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
}

module.exports = {
  validateReqFields
}