const mongoose = require('mongoose');

const { mongodb } = require('./keys');

const pasivosDB = mongoose.createConnection(mongodb.URI_PASIVOS);
const pruebasDB = mongoose.createConnection(mongodb.URI_PRUEBAS);