const express = require("express");
const router = express.Router();
const sessions = require("../sessions/sessions");
const usersData = require("../data/users.json");
const fs = require("fs");
const jwt = require("jsonwebtoken");

router.post("/login", (req, res, next) => {
  const { userName, password } = req.body;
  const currentUser = usersData.users.find(
    u => u.userName === userName && u.password === password
  );
  if (currentUser) {
    const toker = jwt.sign(
      {
        data: "foobar"
      },
      "secret",
      { expiresIn: "1h" }
    );
    res.send(toker);
  }
  res.status(404).send("error");
});

router.post("/register", (req, res, next) => {
  const { userName, password } = req.body;
  const users = [...usersData.users, { userName, password }];
  fs.writeFile("./data/users.json", JSON.stringify({ users }), err => {
    console.log(err);
    res.json({ message: "registration completed", redirect: true });
  });
});

module.exports = router;
