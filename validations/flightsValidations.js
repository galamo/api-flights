const express = require("express")
const Joi = require("@hapi/joi");

const flightSchema = Joi.object({
    flightId: Joi.string().min(5).max(15).required(),// "123412",
    from: Joi.string().required(),
    destination: Joi.string().required(),
    departure: Joi.string(),
    arrival: Joi.string()
})

function flightValidation(req, res, next) {
    const { error } = flightSchema.validate(req.body);
    if (error) return res.json({ error })
    next();
}


module.exports = flightValidation;