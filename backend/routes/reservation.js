const express = require("express");
const router = express.Router();

const params_validator = require("../helpers/params-validator");
const { errorLogger } = require("../helpers/logger");

const Joi = require("joi");

const Reservation = require("../models/reservation");
const Inventory = require("../models/inventory");
router.post(
  "/new",
  params_validator.validateParams({
    bookingDuration: Joi.number().required(), //0.5h,1h,1.5h,2h
    bookingTimings: Joi.string()
      .required()
      .regex(/^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i),
    fullName: Joi.string()
      .required()
      .regex(/^[a-z ,.'-]+$/),
    nirc: Joi.string()
      .required()
      .regex(/^[STFG]\d{7}[A-Z]$/),
    podNumber: Joi.string()
      .required()
      .regex(/Pod+ ([0-9]+)/),
    startDate: Joi.string()
      .required()
      .regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
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
      let reservationResponse = await Reservation.addReservation(
        newReservation
      );
      let inventoryResponse = await Inventory.newPodBooking(newReservation);
      res.status(200).json({
        reservation: reservationResponse,
        inventoryResponse: inventoryResponse,
      });
    } catch (err) {
      throw err;
    }
  }
);
router.post(
  "/fetchTimings",
  params_validator.validateParams({
    podNumber: Joi.string()
      .required()
      .regex(/Pod+ ([0-9]+)/),
    startDate: Joi.string()
      .required()
      .regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
  async (req, res, next) => {
    let request = {
      podNumber: req.body.podNumber,
      dateOfBooking: req.body.startDate,
    };
    let inventoryResponse = await Inventory.fetchTimings(request);
    res.status(200).json({ success: true, timings: inventoryResponse });
  }
);
module.exports = router;
