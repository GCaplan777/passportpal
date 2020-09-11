const Router = require("express").Router();
const userController = require("../controllers/userController");

// routes that we want to protect
Router.get("/welcome", (req, res) => {
  res.send("Welcome to Passport Pal.");
});

Router.get("/user-profile", (req, res) => {
  res.send("Welcome to Passport Pal.");
});

Router.route("/users").post(userController.createNew);

module.exports = Router;
