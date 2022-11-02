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
// Importing array middlewares
const {
  middleware,
  validateReqFields
} = require('../middlewares/index');


// Registering server routes
router.get('/', getUsers);

router.post('/', [middleware.postMiddleware()], validateReqFields, postUser);

router.put('/:id', [middleware.putMiddleware()], validateReqFields, putUser);

router.patch('/', patchUser);

router.delete('/', deleteUser);


module.exports = router;

