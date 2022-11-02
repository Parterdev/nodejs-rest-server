// REMEMBER: Here we're setting up callback params to pass them into routes
const {response, request} = require('express');
// Calling user's model (Mongoose)
const userModel = require('../../models/user');
// Calling helpers functions
const { generateHash } = require('../../helpers/index');
const { validationMessages } = require('../../helpers/strings');

const getUsers = async(req = request, res = response) => {
  const { limit =  5, from = 0 } = req.query;
  const filter = {};

  const users = await userModel.find(filter)
    .skip(Number(from))
    .limit(Number(limit));

  // const total = await userModel.countDocuments({state: true});

  res.json(users);
};


const postUser = async (req, res = response) => {
  
  // Extract body params
  const { name, email, password, role }  = req.body;

  // Pass params to model (to create a mongo document)
  const user = new userModel({ name, email, password, role });
  
  // Hashing user's password
  user.password = await generateHash(12, password);

  await user.save();
  res.json({
    msg: 'User has been created',
    user
  });

};


const putUser = async(req, res = response) => {

  // Capture data
  const { id } = req.params;

  const { _id, password, email, google, ...rest } = req.body; 
  password ? rest.password = await generateHash(12, password) : '';
  
  // Update registry
  const user = await userModel.findByIdAndUpdate(id, rest, {new: true});

  res.json({
    msg: `User with id: ${id} has been updated`,
    user: user,
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