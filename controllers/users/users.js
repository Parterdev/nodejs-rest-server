// REMEMBER: Here we're setting up callback params to pass them into routes
const {response, request} = require('express');
// Calling user's model (Mongoose)
const userModel = require('../../models/user');
// Calling helpers functions
const { generateHash } = require('../../helpers/index');
const { errorHandling, showHandlingErrors } = require('./errorHandling');

const getUsers = async(req = request, res = response) => {
  // console.log('REQ INFO:', {req})
  // const {h1, page = 1} = req.query;

  const filter = {};
  const users = await userModel.find(filter);

  res.json({
    msg: 'GET METHOD | API',
    users
  });
};


const postUser = async (req, res = response) => {

  // Extract body params
  const { name, email, password, role }  = req.body;

  // Pass params to model (to create a mongo document)
  const user = new userModel({ name, email, password, role });
  
  // Hashing user's password
  user.password = await generateHash(12, password);

  // Pass params to reference errors with handling validator
  errorHandling([email,password]);

  // Verifying email
  const emailExists = await userModel.findOne({email});
  if (emailExists) {
    return res.status(400).json(showHandlingErrors());
  };

  await user.save((err) => {
    if (!err && email != '') {
      res.json({
        msg: 'User has been created',
        user,
      });
    }else {
      console.log(err);
    }
  });
};


const putUser = (req, res = response) => {
  res.json({
    msg: 'PUT METHOD | API',
    id: req.params.id,
  });
  
};


const patchUser = (req, res = response) => {
  res.json({
    status: 'OK',
    msg: 'PATCH METHOD | API'
  });
};


const deleteUser = (req, res = response) => {
  res.json({
    status: 'OK',
    msg: 'DELETE METHOD | API'
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  patchUser,
  deleteUser
}