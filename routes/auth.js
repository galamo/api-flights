const express = require("express")
const router = express.Router();
const sessions = require("../sessions/sessions");
router.post("/login", (req, res, next) => {
    const generateSession = `session-${Math.round(Math.random() * 999999)}`
    sessions[generateSession] = Date.now() + 120000
    res.send(generateSession)
})

router.post("/register", (req, res, next) => {
    res.send("register success...")
})



module.exports = router;