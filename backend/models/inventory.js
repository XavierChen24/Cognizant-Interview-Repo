const mongoose = require("mongoose");
var crypto = require("crypto");

const inventorySchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  podNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 8,
  },
  podLocation: {
    type: String,
    required: true,
  },
  dateOfBooking: {
    type: Date,
    required: true,
  },
  reservedTime: {
    type: [Number],
    required: true,
  },
});

const Inventory = (module.exports = mongoose.model(
  "Inventory",
  inventorySchema
));

//TODO: Fetch specific pod's availability
module.export.getPodAvailability = function (pod, callback) {};

//TODO: New pod's booking, will need to update pods availabiity
module.export.postNewPodBooking = function (pod, callback) {};
