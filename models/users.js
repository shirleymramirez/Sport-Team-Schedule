const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  name: { type: String, index: true, unique: false },
  kidsname: { type: String },
  phonenumber: { type: String },
  username: { type: String, unique: true, required: false },
  password: { type: String, unique: false, required: false },
  // local: {
  //   username: { type: String, unique: true, required: false },
  //   password: { type: String, unique: false, required: false },
  // },
  email: { type: String, unique: true, required: true, trim: true }
});

// Define Schema
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

module.exports = mongoose.model("user", userSchema);

