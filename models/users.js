const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, index: true, unique: false },
  kidsname: { type: String },
  phonenumber: { type: String },
  local: {
    username: { type: String, unique: true, required: false },
    password: { type: String, unique: false, required: false },
  },
  email: { type: String, unique: true, required: true, trim: true }
});

// Define Schema
userSchema.methods = {
  checkPassword: function(inputPassword) {
    console.log("userSchema checkPassword");
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    console.log("userSchema hashPassword");
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

module.exports = mongoose.model("user", userSchema);
