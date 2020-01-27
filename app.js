const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const expressjwt = require('express-jwt')
const jwt = require("jsonwebtoken")

const app = express();

const jwtCheck = expressjwt({
  secret: "mySuperSecret"
});

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.post('/login', (req, res) => {
  if(!req.body.email || !req.body.password) {
    return res
    .status(400)
    .send("You need a email and password")
  }

  // ! Todo verify if a user and password exists on database
  // const user = [Uses1, user2].find(u =>{
  //   return u.username == 
  // })
  // la funcion retornara un objecto User

  // if(!user){
  if(false){
    return res
    .status(401)
    .send("User not found")
  }

  // payload,
  // secret,
  // options
  const token = jwt.sign(
    {
    sub: 1, username: "paticita"
  },
  "mySuperSecret",
  {
    expiresIn: "3 hours"
  });

  res
  .status(200)
  .send({
    access_token: token
  })

})



app.get("/resource", (req, res) => {
  res
  .status(200)
  .send('Public resource, you can see this')
})
app.get("/resource/secret", jwtCheck, (req, res) => {
  res
  .status(200)
  .send('Secret resource, you should be logged in to see this')
})


/*
Establecer un tiempo de vencimiento razonable en los tokens
Eliminar el token almacenado del lado del cliente al cerrar sesión
Tiene DB de tokens que ya no están activos y que todavía tienen algo de tiempo para vivir
La consulta proporcionó el token contra The Blacklist en cada solicitud autorizada
*/

require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;

/**
 'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'transporte';

function ensureAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'La peticion no tiene cabeceras de autenticacion' });
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');
    try {
        var payload = jwt.decode(token, secret);

        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'El token ya ha expirado' });
        }
    } catch (ex) {
        console.log(ex);
        return res.status(404).send({ message: 'Token no valido' });
    }
    req.user = payload;
    next();
};

module.exports = {
    ensureAuth
}
 */