const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()
const authRouter = require("./routes/auth");
const flightsRouter = require("./routes/flights")
const vacationsRouter = require("./routes/vacations")
const validateSession = require("./routes/validateSession");
const logger = require("./utils/logger");
const sessions = require("./sessions/sessions")
const app = express()
app.use("/static", express.static("images"))
app.use(bodyParser.json())

app.use("/auth", authRouter) //2 entries loaded..
app.use(validateSession)
app.use("/flights", flightsRouter)
app.use("/vacations", vacationsRouter)

app.listen(process.env.PORT, () => {
    console.log("listening 🎧🎧🎧🎧 to: " + process.env.PORT)
    logger.info(`server is listening to port: ${process.env.PORT}`)
})