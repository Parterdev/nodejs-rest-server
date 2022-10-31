const {
  check,
  isAValidRole,
  searchUserById,
  validationMessages,
  validateReqFields,
} = require('../index');

const putMiddleware = () => {
  return [
    check('id', validationMessages.notValidID).isMongoId(),
    check('id').custom(searchUserById),
    check('role').isEmpty().not() ? check('role').custom(isAValidRole) : '',
    // Catching express validator middleware errors
    validateReqFields,
  ]
};

module.exports = {
  putMiddleware
}