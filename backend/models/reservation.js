const mongoose = require("mongoose");
const { generateMongoId } = require("../helpers/common");

const reservationSchema = mongoose.Schema({
  podNumber: {
    type: String,
    required: true,
  },
  dateOfBooking: {
    type: String,
    required: true,
  },
  timeOfBooking: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  nirc: {
    type: String,
    required: true,
  },
});

const Reservation = (module.exports = mongoose.model(
  "Reservation",
  reservationSchema
));

module.exports.addReservation = async function (newReservation) {
  try{
    let resp = await Reservation.create(newReservation)
    console.log(resp)
    return resp;
  }catch(e){
    console.log(e)
    return e
  }


};

module.exports.getReservationById = function (newReservation, callback) {
  let id = generateMongoId(newReservation, newReservation);
  User.findById({ _id: id }, callback);
};
