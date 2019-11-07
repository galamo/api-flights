const express = require("express")
const router = express.Router();

router.post("/login", (req, res, next) => {
    res.send("login success...")
})

router.post("/register", (req, res, next) => {
    res.send("register success...")
})



module.exports = router;