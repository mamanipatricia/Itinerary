const todoController = require("../controllers").todos;
const userController = require("../controllers").users;
const placeController = require("../controllers").places;
const itineraryController = require("../controllers").itineraries;


module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );

  app.post("/api/todos", todoController.create);
  app.get("/api/todos", todoController.list);
  app.get("/api/todos/:todoId", todoController.retrieve);
  app.put("/api/todos/:todoId", todoController.update);
  app.delete("/api/todos/:todoId", todoController.destroy);

  app.get('/api/users', userController.list);
  app.post('/api/users', userController.create)
  app.get('/api/users/:userId', userController.retrieve)
  app.put('/api/users/:userId', userController.update)
  app.delete('/api/users/:userId', userController.destroy)

  app.get('/api/places', placeController.list);
  app.post('/api/places', placeController.create);
  app.delete('/api/places/:placeId', placeController.destroy)

  app.get('/api/itineraries', itineraryController.list)

};

