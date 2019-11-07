const express = require("express")
const router = express.Router();
const logger = require("../utils/logger")

router.use((req, res, next) => {
    const { key } = req.query;
    if (key === process.env.API_KEY) return next()
    logger.error(`key: ${key} is not valid ${req.ip} `)
    return res.status(401).send("key is not valid")
})
router.get("/", (req, res, next) => {

    res.json({ flights: ["f1", "f2"] })
})

router.post("/", (req, res, next) => {
    res.json({ message: "flight saved" })
})



module.exports = router;