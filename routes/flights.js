const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");
const Joi = require("@hapi/joi");
const flightValidation = require("../validations/flightsValidations");
const { flights } = require("../data/flights.json");
const jwt = require("jsonwebtoken");
router.get("/", (req, res, next) => {
  jwt.verify(req.query.token, "secret", function(err, decoded) {
    console.log(decoded);
  });
  res.json({ flights });
});

router.use(flightValidation);
router.post("/", (req, res, next) => {
  res.json({ message: "flight saved " });
});
router.put("/", (req, res, next) => {
  res.json({ message: "flight edited " });
});

module.exports = router;
