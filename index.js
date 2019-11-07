const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()

const authRouter = require("./routes/auth");
const flightsRouter = require("./routes/flights")
const logger = require("./utils/logger");
const app = express()

app.use(bodyParser.json())
app.use("/auth", authRouter)
app.use("/flights", flightsRouter)



app.listen(process.env.PORT || 4000, () => {
    logger.info(`server is listening to port: ${process.env.PORT}`)
})