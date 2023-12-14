const express = require("express");
const router = express.Router();

const params_validator = require("../helpers/params-validator");
const { errorLogger } = require("../helpers/logger");

const Joi = require("joi");

const Reservation = require("../models/reservation");
router.post(
  "/new",
  // params_validator.validateParams({
  //   bookingDuration: Joi.number().required(), //0.5h,1h,1.5h,2h
  //   bookingTimings: Joi.string().regex(
  //     "/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i"
  //   ).required(),
  //   fullName: Joi.string().regex("^[a-z ,.'-]+$").required(),
  //   nirc: Joi.string().regex("^[STFG]d{7}[A-Z]$").required(),
  //   podNumber: Joi.string().regex("/^[D]*[0-9]+[D]*$/i").required(),
  //   startDate: Joi.string().regex("^\\d{4}-\\d{2}-\\d{2}$").required(),
  // }),
  async (req, res, next) => {
    try {
      let newReservation = {
        podNumber: req.body.podNumber,
        dateOfBooking: req.body.startDate,
        timeOfBooking: req.body.bookingTimings,
        duration: req.body.bookingDuration,
        fullName: req.body.fullName.toUpperCase(),
        nirc: req.body.nirc.toUpperCase(),
      };
      let response = await Reservation.addReservation(newReservation);
      console.log(response);
      res.status(200).json(response);
    } catch (e) {
      console.log()
      res.status(500).json(e);
    }
  }
);
router.get("/booking", (req, res, next) => {
  res.status(200).json({ success: true });
});
module.exports = router;
