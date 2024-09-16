//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const appHello = require("../controller/ctlHello");

//@ Configura as rotas
routerApp.get("/", appHello.hello);
routerApp.post("/helloUser", appHello.helloUser);

//@ Exporta a variavel com as routas
module.exports = routerApp;
