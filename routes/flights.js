const express = require("express")
const router = express.Router();
const logger = require("../utils/logger")
const Joi = require("@hapi/joi");
const flightValidation = require("../validations/flightsValidations")


router.get("/", (req, res, next) => {
    res.json({ flights: ["f1", "f2"] })
})

router.use(flightValidation)
router.post("/", (req, res, next) => {
    res.json({ message: "flight saved " })
})
router.put("/", (req, res, next) => {
    res.json({ message: "flight edited " })
})





module.exports = router;