// Importing Mongoose
const { Schema, model } = require('mongoose');

/**
 * DEF: Everything in Mongoose starts with a Schema.
 * Each schema maps to a MongoDB as a collection 
 and defines the form of the documents within that collection.
 */

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password field is required'],
  },
  google: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE']
  },
  img: {
    type: String,
  },
  state: {
    type: Boolean,
    default: true,
  }
});

// Add special methods to this schema
/* userSchema.methods.toJSON = function() {
  const { __v, password, ...user } = this.toObject();
  return user;
}; */

userSchema.set('toJSON', {
  transform: function(doc, ret, opt) {
    console.log("DOC-RET-OPT", {doc, ret, opt});
    delete ret['password'];
    delete ret['__v'];
    return ret;
  }
})


/** 
  * Mongoose converts the model name with lower case and plural form: users
  * REMEMBER: An instance of a model is called a document (users) 
*/
module.exports = model('User', userSchema);
