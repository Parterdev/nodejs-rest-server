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
const { 
  postMiddleware,
  putMiddleware
} = require('../middlewares/index');

// Registering server routes
router.get('/', getUsers);

router.post('/', postMiddleware, postUser);

router.put('/:id', putMiddleware, putUser);

router.patch('/', patchUser);

router.delete('/', deleteUser);


module.exports = router;

