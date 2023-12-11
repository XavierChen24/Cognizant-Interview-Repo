const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
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
  durationOfBooking: {
    type: Number,
    required: true,
    min: 0,
    max: 3
  }
});

const Booking = (module.exports = mongoose.model("Booking", bookingSchema));