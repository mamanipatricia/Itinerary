const Todo = require("../models").Todo;

module.exports = {
  list(req, res) {
    return Todo.findAll({
      order: [
        ["title", "ASC"],
        ["createdAt", "DESC"]
      ]
    })
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error));
  },

  // http POST http://localhost:8000/api/todos title="test todo"
  create(req, res) {
    return Todo.create({
      title: req.body.title
    })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  // /todos/1 - retrieve = recuperar por id
  // http http://localhost:8000/api/todos/1
  retrieve(req, res) {
    return Todo.findById(req.params.todoId)
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

  // http PUT http://localhost:8000/api/todos/3 clientTitle="caperucita roja"
  update(req, res) {
    return Todo.findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: "todo Not Found"
          });
        }

        return todo
          .update({
            title: req.body.clientTitle || todo.title
          })
          .then(() => res.status(200).send(todo))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  // http DELETE http://localhost:8000/api/todos/4
  destroy(req, res) {
    return Todo.findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: "Todo Not Found"
          });
        }
        return todo
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
