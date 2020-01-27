const todos = require("./todoController");
const users = require("./userController");
const places = require("./placeController");
const itineraries = require("./itineraryController");

module.exports = {
  todos,
  users: users,
  places,
  itineraries,
};
