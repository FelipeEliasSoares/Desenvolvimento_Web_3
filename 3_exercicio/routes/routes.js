const express = require("express");
const routerApp = express.Router();
const appCalculadora = require("../controller/ctlCalculadora");

routerApp.post("/calculadora", appCalculadora.calculadora);

module.exports = routerApp;
