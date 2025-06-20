const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
});

const Users = new mongoose.model('users', UserSchema);

module.exports = Users;


