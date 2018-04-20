const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, index: true, unique: false },
  kidsname: { type: String },
  phonenumber: { type: String },
  local: {
    username: { type: String, unique: false, required: false },
    password: { type: String, unique: false, required: false }
  },
  email: { type: String }
});

// Define Schema
userSchema.methods = {
  checkPassword: function(inputPassword) {
    console.log("userSchema checkPassword");
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    console.log("userSchema hashPassword");
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hook for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("No password provided");
    next();
  } else {
    this.password = this.hashPassword(this.local.password);
    next();
  }
});

const User = (module.exports = mongoose.model("user", userSchema));
module.exports = User;
