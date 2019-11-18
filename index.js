const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const authRouter = require("./routes/auth");
const flightsRouter = require("./routes/flights");
const vacationsRouter = require("./routes/vacations");
const validateSession = require("./routes/validateSession");
const logger = require("./utils/logger");
const cors = require("cors");
const app = express();
// require("./utils/seed");
const SECRET_KEY = "JWT_SECRET";

app.use(cors());
app.use("/static", express.static("images"));
app.use(bodyParser.json());
app.get("/hc", (req, res, next) => {
  res.send("ok");
});

app.use("/auth", authRouter); //2 entries loaded..
app.use(validateSession);
app.use("/flights", flightsRouter);
app.use("/vacations", vacationsRouter);

app.listen(process.env.PORT, () => {
  console.log("listening  to: " + process.env.PORT);
  logger.info(`server is listening to port: ${process.env.PORT}`);
});
