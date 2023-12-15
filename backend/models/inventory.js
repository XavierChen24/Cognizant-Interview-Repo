const mongoose = require("mongoose");
const crypto = require("crypto");
const {
  generateTimings,
  generateAvailableTimings,
  parseTimeToDateObj,
  operatingHours,
} = require("../helpers/common");

const inventorySchema = mongoose.Schema({
  podNumber: {
    type: String,
    required: true,
    min: 1,
    max: 8,
  },
  dateOfBooking: {
    type: Date,
    required: true,
  },
  availableTimings: {
    type: [String],
    required: true,
  },
});

const Inventory = (module.exports = mongoose.model(
  "Inventory",
  inventorySchema
));

module.exports.newPodBooking = async function (booking) {
  let resp;
  try {
    let existing = await Inventory.findOne({
      podNumber: booking.podLocation,
      dateOfBooking: booking.startDate,
    });
    if (existing == null) {
      let allAvailableTimings = generateTimings(
        operatingHours.openingHour,
        operatingHours.closingHour
      );
      let remainderTimings = generateAvailableTimings(
        allAvailableTimings,
        booking.timeOfBooking,
        booking.duration
      );
      let newInventory = {
        podNumber: booking.podNumber,
        dateOfBooking: booking.dateOfBooking,
        availableTimings: remainderTimings,
      };

      resp = await Inventory.create(newInventory);
    } else {
      let remainderTimings = generateAvailableTimings(
        existing.availableTimings,
        booking.bookingTimings,
        booking.bookingDuration
      );
      let newInventory = {
        podNumber: booking.podNumber,
        dateOfBooking: booking.startDate,
        availableTimings: remainderTimings,
      };
      resp = await Inventory.findOneAndUpdate(
        { _id: existing._id.toString() },
        newInventory
      );
    }
    return resp;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports.fetchTimings = async function (booking) {
  let resp;
  try {
    let existing = await Inventory.findOne({
      podNumber: booking.podNumber,
      dateOfBooking: booking.dateOfBooking,
    });
    console.log(existing)
    if (existing == null) {
      resp = generateTimings(
        operatingHours.openingHour,
        operatingHours.closingHour
      );
    } else {
      resp = existing.availableTimings;
    }
    return resp;
  } catch (err) {
    return err;
  }
};
