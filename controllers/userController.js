const User = require("../models").User;

module.exports = {
  list(req, res) {
    return User.findAll()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    //   !! TODO verificar q no existe el correo en la DB
    return User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  // /todos/1 - retrieve = recuperar por id
  // http http://localhost:8000/api/todos/1
  retrieve(req, res) {
    return User.findByPk(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found"
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },

  // http PUT http://localhost:8000/api/todos/3 clientTitle="caperucita roja"

//   const jane = await User.create({ name: "Jane" });
//   console.log(jane.name); // "Jane"
//   jane.name = "Ada";
//   the name is still "Jane" in the database
//   await jane.save();
//    Now the name was updated to "Ada" in the database!


  async update(req, res) {
    //   !! todo revisar q exista el id
    return await User.update(
        {
        email: req.body.email || user.email,
        password: req.body.password || user.password,
        },{
            where: {
                id: req.params.userId
            }
        }
        ).then(user => res.status(200).send(user))
  },
//     return User.findByPk(req.params.userId)
//       .then(user => {
//         if (!user) {
//           return res.status(404).send({
//             message: "User Not Found"
//           });
//         }
//         user.email = req.body.email || user.email,
//         user.password = req.body.username || password.username,
//         user.save()
//           .then((user) => res.status(200).send(user))
//           .catch(error => res.status(400).send(error));
//       })
//       .catch(error => res.status(400).send(" test error"));
//   },


  // http DELETE http://localhost:8000/api/todos/4
  destroy(req, res) {
    return User.findByPk(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: "user Not Found"
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send("Se Elimino Correctamente"))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
