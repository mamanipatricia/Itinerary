const Place = require("../models").Place;

module.exports = {
  list(req, res) {
    return Place.findAll({
    })
    .then(places => res.status(200).send(places))
    .catch(error => res.status(400).send(error));
  },

  // http POST http://localhost:8000/api/todos title="test todo"
  create(req, res) {

    return Place.create({
      name: req.body.name,
    })
      .then(place => res.status(201).send(place))
      .catch(error => res.status(400).send(error));
  },

  // /todos/1 - retrieve = recuperar por id
  // http http://localhost:8000/api/todos/1
  retrieve(req, res) {
    return Place.findByPk(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: "Todo Not Found"
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },

//   // http PUT http://localhost:8000/api/todos/3 clientTitle="caperucita roja"
//   update(req, res) {
//     return Todo.findById(req.params.todoId)
//       .then(todo => {
//         if (!todo) {
//           return res.status(404).send({
//             message: "todo Not Found"
//           });
//         }

//         return todo
//           .update({
//             title: req.body.clientTitle || todo.title
//           })
//           .then(() => res.status(200).send(todo))
//           .catch(error => res.status(400).send(error));
//       })
//       .catch(error => res.status(400).send(error));
//   },

  // http DELETE http://localhost:8000/api/todos/4
  destroy(req, res) {
    return Place.findByPk(req.params.placeId)
      .then(place => {
        if (!place) {
          return res.status(400).send({
            message: "place Not Found"
          });
        }
        return place
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
