const app = require('express')
const router = app.Router();
// Calling callbacks (from controllers) to these server routes
const {
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser
} = require('../controllers/users/users');
// Using express validator middleware to validate body fields
const { check } = require('express-validator');
const { validationMessages } = require('../helpers');
const { validateReqFields } = require('../middlewares/index');

// Registering server routes
router.get('/', getUsers);

router.post('/', [
  // Using middlewares to intercept controller execution
  check('name', validationMessages.nameIsRequired).not().isEmpty(),
  check('email', validationMessages.emailError).isEmail(),
  check('password', validationMessages.passwordLenghtError).isLength({ min: 8 }),
  check('role', validationMessages.notValidRole).isIn(['ADMIN_ROLE', 'USER_ROLE']),
  // Catching express validator middleware errors
  validateReqFields,
], postUser);

router.put('/:id', putUser);

router.patch('/', patchUser);

router.delete('/', deleteUser);


module.exports = router;

