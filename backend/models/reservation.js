const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  podNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  podLocation: {
    type: String,
    required: true,
  },
  dateOfBooking: {
    type: Date,
    required: true
  },
  timeOfBooking: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  }
});

const Reservation = (module.exports = mongoose.model("Reservation", reservationSchema));

