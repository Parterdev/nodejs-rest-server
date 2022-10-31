const { Schema, model } = require('mongoose');

const roleSchema = Schema({
  role: {
    type: String, 
    required: [true, 'Role field is required']
  }
});


module.exports = model('Role', roleSchema)