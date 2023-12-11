const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nirc: {
    type: String,
    required: true,
  },
  bookings: {
    type: Schema.Types.ObjectId,
    ref: "booking",
  },
});

const User = (module.exports = mongoose.model("User", userSchema));

module.exports.getUserByNirc = function (id, callback) {
  User.findById({ _id: nirc }, callback);
};

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.nirc, salt, (err, hash) => {
      if (err) throw err;
      newUser.nirc = hash;
      newUser.save(callback);
    });
  });
};
