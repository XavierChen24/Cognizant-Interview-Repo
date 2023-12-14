const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const params_validator = require("../helpers/params-validator");
const { errorLogger } = require("../helpers/logger");

const Joi = require("joi");

const User = require("../models/user");
router.get("/profile", (req, res, next) => {
  try {
    User.getUserById(jwt_payload.data._id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
    res.status(200).json({ success: true, user: req.user });
  } catch {}
});
router.get("/booking", (req, res, next) => {
  res.status(200).json({ success: true });
});
module.exports = router;
