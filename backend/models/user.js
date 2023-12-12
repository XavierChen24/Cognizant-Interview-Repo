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
    ref: "Reservation",
  },
});

const User = (module.exports = mongoose.model("User", userSchema));

module.exports.getUserByNirc = function (nirc, callback) {
  User.findById({ nirc: nirc }, callback);
};

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.nirc, salt, (err, hash) => {
      if (err) throw err;
      newUser._id = hash;
      newUser.nirc = hash;
      newUser.save(callback);
    });
  });
};
